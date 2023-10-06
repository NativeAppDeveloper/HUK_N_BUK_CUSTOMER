import React from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {icon} from '../utils/Image';
import {Text} from 'react-native-svg';
// import { imageConstant } from '../utils/constant';
import MapViewDirections from 'react-native-maps-directions';
import {moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {colors} from '../utils/Styles';
import {LOG_COLORS, isValidObject} from '../utils/Helper';

const {width, height} = Dimensions.get('window');

let origin = {latitude: 28.5355, longitude: 77.391};
let destination = {latitude: 28.6139, longitude: 77.209};

const customStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

const cars = [
  {latitude: 28.512, longitude: 77.42},
  {latitude: 28.522, longitude: 77.43},
  {latitude: 28.6177, longitude: 77.3639}, // Noida Sector 62
  {latitude: 28.6253, longitude: 77.3725}, // Noida Sector 63
  {latitude: 28.6115, longitude: 77.3943}, // Noida Sector 67
  {latitude: 28.594, longitude: 77.358}, // Noida Sector 57
];

const CustomMapView = props => {
  const ASPECT_RATIO = width / height;
  const LATITUDE = props?.latitude ? props?.latitude : 28.5355;
  const LONGITUDE = props?.longitude ? props?.longitude : 77.391;
  const LATITUDE_DELTA = props?.latitudeDelta ? props?.latitudeDelta : 0.0922;
  const LONGITUDE_DELTA = props?.longitudeDelta ? props?.longitudeDelta : 0.09;

  const {userLocation} = useSelector(state => state.userReducers);
  const {userDestination} = useSelector(state => state.destinationReducers);
  const {pickUpLocationDetails} = useSelector(state => state.pickupLocationDetailsReducers);

  console.log(LOG_COLORS.pink, userDestination, 'asjdhaskjdhaskjdh');
  // console.log({LATITUDE} , {LONGITUDE});
  return (
    <View style={styles.container}>
      <MapView
        onRegionChangeComplete={props?.onRegionChangeComplete}
        scrollEnabled={true} // Make sure this is set to true
        mapType="terrain"
        ref={props?.refs}
        showsUserLocation={true}
        showsBuildings={true}
        followsUserLocation={props?.followsUserLocation}
        // provider={PROVIDER_GOOGLE}
        style={props.mapStyle}
        userInterfaceStyle={'light'}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation?.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        customMapStyle={customStyle}>
        {props?.Marker && (
          <Marker
            //   icon={icon.backBtn}
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation?.longitude,
            }}>
            <Image
              source={icon.loc}
              style={{width: moderateScale(30), height: moderateScale(30)}}
              resizeMode="contain"
            />
          </Marker>
        )}

        <Marker
          //   icon={icon.backBtn}
          coordinate={{
            latitude: 28.512,
            longitude: 77.42,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.09,
          }}>
          <Image
            source={icon.Car}
            style={{width: 50, height: 50}}
            resizeMode="contain"
          />
        </Marker>

        {/* {cars.map((car, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: car.latitude,
              longitude: car.longitude,
            }}>
            <Image
              source={icon.Car}
              style={{width: 50, height: 50}}
              resizeMode="contain"
            />
          </Marker>
        ))} */}

       {isValidObject(userDestination) && props?.showDestination&&  <Marker
          //   icon={icon.backBtn}
          coordinate={{
            latitude: userDestination?.latitude,
            longitude: userDestination?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.09,
          }}>
          <Image
            source={icon.location}
            style={{
              width: moderateScale(40),
              height: moderateScale(40),
              tintColor: colors.theme,
            }}
            resizeMode="contain"
          />
        </Marker>}

        {isValidObject(userDestination) && props.showPolyLine && (
          <MapViewDirections
            origin={{
              latitude:pickUpLocationDetails?.latitude,
              longitude:pickUpLocationDetails?.longitude,
            }}
            destination={{
              latitude: userDestination?.latitude,
              longitude: userDestination?.longitude,
            }}
            apikey="AIzaSyDhp3DOJ8SCTdSaij3f6kgF9QyVkH5JW8g"
            strokeWidth={4}
            strokeColor={colors.yellow}
            mode="DRIVING"
          />
        )}
      </MapView>
    </View>
  );
};

export default CustomMapView;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // zIndex:-1
  },
});
