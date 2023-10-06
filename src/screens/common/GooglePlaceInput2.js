import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, scale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

import {requestLocationPermission} from '../../utils/Permission';
import {getCurrentPosition} from '../../utils/GoogleHelper';
import BackHandler from '../../component/BackHandler';
import {icon} from '../../utils/Image';
import {colors} from '../../utils/Styles';
import Text14 from '../../component/customText/Text14';
import {closeLoader, showLoader} from '../../utils/Helper';
import {GOOGLE_API_KEY} from '../../utils/Urls';
import {actionType} from '../../redux/actionType';
import CustomMapView from '../../component/CustomMapView';
import axios from 'axios';

const GooglePlacesInput2 = props => {
  const navigation = useNavigation();
  // const {loc}=useSelector((state)=>state.getUserLocationReducer)
  const dispatch = useDispatch();
  const [val, setVal] = useState('');
  let {route} = props;
  const mapRef = useRef(null);
  const reff = useRef(null);
  const [enterLocations, setEnterLocations] = useState('');
  // return
  const getCoordinatesFromPlaceId = temp => {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${
      temp.place_id
    }&key=${'AIzaSyA6kvD69stUp0XzFbOaM7pajrzi6MhdSyU'}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          const result = data.results[0];

          const {lat, lng} = data.results[0].geometry.location;
          let city = '';
          let country = '';
          let pincode = '';
          let state = '';

          for (const component of result.address_components) {
            if (component.types.includes('postal_code')) {
              pincode = component.long_name;
            }

            if (component.types.includes('locality')) {
              city = component.long_name;
            }

            if (component.types.includes('country')) {
              country = component.long_name;
            }

            if (
              component.types.includes('administrative_area_level_1') ||
              component.types.includes('administrative_area_level_2')
            ) {
              state = component.long_name;
            }
          }

          console.log('City:', city);
          console.log('Country:', country);
          console.log('Longitude:', lng);
          console.log('Latitude:', lat);
          console.log('Area Pincode:', pincode);
          console.log(temp.description, 'dex');

          let objToSend = {
            Location: {
              coordinates: [lng, lat],
            },
            pincode: pincode,
            place: temp.description,
            city: city,
            country: country,
            state: state,
            latitude: lat,
            longitude: lng,
          };

          dispatch({
            type: actionType.pickUpLocation,
            payload: objToSend,
          });
          navigation.navigate('Home', {destination: objToSend});
        } else {
          console.log(data, 'rerererererer');
          // return
          // const {lat, lng} = data.results[0].geometry.location;

          // let objToSend = {
          //   Location: {
          //     coordinates: [lng, lat],
          //   },
          //   pincode: pincode,
          //   place: temp.description,
          //   city: city,
          //   country: country,
          //   state: state,
          // };
          // // alert('Error', 'Failed to retrieve coordinates from Place ID');
          // // console.log('er',data)
          // navigation.navigate('BookRide',{destination:objToSend})
        }
      })
      .catch(error => {
        alert('Error', 'An error occurred while fetching coordinates');
        console.error(error);
      });
  };

  const locationCall = async () => {
    requestLocationPermission();
    try {
      const location = await getCurrentPosition();
      getCurrentLocation(location.latitude, location.longitude);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentLocation = async (latitude, longitude) => {
    dispatch(showLoader);
    try {
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.status === 'OK') {
        // Extract relevant address components
        const {results} = data;
        const addressComponents = results[0].address_components;
        const formattedAddress = results[0].formatted_address; // Full address
        dispatch(closeLoader);

        console.log(JSON.stringify(formattedAddress), 'here');

        // Find the locality and country
        let city = '';
        let country = '';
        let pincode = '';
        let state = '';

        for (const component of results[0].address_components) {
          if (component.types.includes('postal_code')) {
            pincode = component.long_name;
          }

          if (component.types.includes('locality')) {
            city = component.long_name;
          }

          if (component.types.includes('country')) {
            country = component.long_name;
          }

          if (
            component.types.includes('administrative_area_level_1') ||
            component.types.includes('administrative_area_level_2')
          ) {
            state = component.long_name;
          }
        }

        let objToSend = {
          Location: {
            coordinates: [longitude, latitude],
          },
          pincode: pincode,
          place: formattedAddress,
          city: city,
          country: country,
          state: state,
          latitude: latitude,
          longitude: longitude,
        };

        dispatch({
          type: actionType.pickUpLocation,
          payload: objToSend,
        });
        console.log(objToSend, 'yessssss');
        navigation.navigate('Home', {location: objToSend});
        // if (route.params.screenName == 'Acution') {
        //   navigation.navigate('CreateAuction', {item: objToSend, flow: 'map'});
        // } else {
        //   navigation.navigate('AddProduct', {item: objToSend, flow: 'map'});
        // }
      } else {
        throw new Error('Unable to retrieve location');
      }
    } catch (error) {
      dispatch(closeLoader);

      throw new Error('Error retrieving location: ' + error.message);
    }
  };

  const getAddressFromLatLng = async (lat, lng) => {
    const response = await Geocoder.geocode({
      latitude: lat,
      longitude: lng,
    });

    if (response.results.length > 0) {
      const address = response.results[0].formattedAddress;
      return address;
    } else {
      return null;
    }
  };

  async function reverseGeocode(lat, lng) {
    // setLt(lat)
    // setLgt(lng)
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`,
      );

      if (response.data.results.length > 0) {
        const placeName = response.data.results[0].formatted_address;
        // dispatch(actions.setEnterPickLocation(response.data.results[0]))
        console.log('placeName', placeName);
        // setDetail(response.data.results[0])
        setEnterLocations(placeName);
        return placeName;
      } else {
        return 'Location not found';
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      return 'Error fetching location';
    }
  }

  useEffect(() => {
    reff.current?.setAddressText(enterLocations);
  }, [enterLocations]);

  return (
    // <SafeAreaView style={{ flex: 1}}>
    <View style={{flex: 1}}>
      <BackHandler name={'Location'} />

      {false && (
        <CustomMapView
          onRegionChangeComplete={e => reverseGeocode(e.latitude, e.longitude)}
          // latitude={userLocation?.latitude}
          // longitude={userLocation?.longitude}
          // Marker={true}
          // showPolyLine={true}
          // destination={destination?.Location}
          mapStyle={styles.mapStyle}
          ref={mapRef}
        />
      )}

 
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // Handle the selected place
          console.log(data);
          getCoordinatesFromPlaceId(data);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en', // language of the results
        }}
        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            marginTop: moderateScale(15),
            width: '95%',
            alignSelf: 'center',
            color: colors.black,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            color: colors.black,
            fontSize: 16,
            fontFamily: 'PlusJakartaSans-Medium',
            // paddingVertical:5,
            backgroundColor: 'white',
            paddingVertical: moderateScale(10),
          },
          predefinedPlacesDescription: {
            color: colors.black,
            fontFamily: 'PlusJakartaSans-SemiBold',
          },
        }}
        // textInputProps={onChangeText={(val)}}

        currentLocation={false} // Enable/disable current location functionality
        fetchDetails={true}
        enablePoweredByContainer={false}
        textInputProps={{
          onChangeText: val => {
            setVal(val);
          },
          // multiline:true
          // placeholderTextColor
          // placeholderTextColor{'red'}
        }}
        ref={reff}
      />

      {val == ''  && (
        <TouchableOpacity
          onPress={() => locationCall()}
          // className="border absolute w-[95%] self-center rounded-lg flex-row py-1 items-center px-3 border-secondry bg-white"
          style={{
            marginTop: moderateScale(195),
            elevation: 1,
            position: 'absolute',
            borderWidth: 0.5,
            flexDirection: 'row',
            width: '95%',
            alignSelf: 'center',
            backgroundColor: colors.white,
            paddingVertical: moderateScale(14),
            alignItems: 'center',
            borderColor: colors.yellow,
            paddingHorizontal: scale(10),
            borderRadius:8
          }}>
          <Image
            style={{
              tintColor: colors.yellow,
              height: moderateScale(20),
              width: moderateScale(20),
              marginRight: 10,
            }}
            source={icon.current}
          />
          <Text14 mt={1} text={'Current Location'} />
        </TouchableOpacity>
      )}
    </View>
    //  </SafeAreaView>
  );
};

export default GooglePlacesInput2;

const styles = StyleSheet.create({
  mapStyle: {
    flex: 2,
    position: 'absolute',
    top: moderateScale(16),
    left: 0,
    right: 0,
    bottom: moderateScale(0),
    zIndex: -1,
  },
});
