import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';

import CustomMapView from '../../../component/CustomMapView';
import {moderateScale, scale} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {icon, images} from '../../../utils/Image';
import {LOG_COLORS, width} from '../../../utils/Helper';
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  XMarkIcon,
} from 'react-native-heroicons/solid';
import Button from '../../../component/customButton/Button';
import Text16 from '../../../component/customText/Text16';
import {homeFlow} from '../../../utils/localVariable';
import LocationText from '../../../component/common/LocationText';
import {
  confimRideServices,
  findDriverServices,
  findRideDriverServices,
  myRequestStatusServices,
} from '../../../services/Services';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';

export default function ConfirmRide() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const [offerModal, SetOfferModal] = useState(false);
  const [slectedIndex, setSetlectedIndex] = useState(0);
  const [findDriver, setFindDriver] = useState(false);
  const {userLocation} = useSelector(state => state.userReducers);
  const [rideDetails, setRideDetails] = useState(null);
  const {userDestination} = useSelector(state => state.destinationReducers);
  const {userLocationDetails} =useSelector((state)=>state.userLocationDeetailsReducers)
  const {pickUpLocationDetails} = useSelector(state => state.pickupLocationDetailsReducers);

  console.log(userLocationDetails,'yessssss')
  const isFocused = useIsFocused();
  const data = [
    {
      carName: 'Hatchback',
      desc: 'Comfy,Economical cars',
      price: '₹300-400',
    },
    {
      carName: 'Sedan',
      desc: 'Spacious Sedan ,Top Drivers',
      price: '₹400-600',
    },
    {
      carName: 'SUV',
      desc: 'Luxury Compfort,more Space',
      price: '₹400-600',
    },
  ];

  // const

  console.log(homeFlow.flow);

  const confirmRide = async () => {
    let objToSend = {
      // "couponId":"",
      startLocation:pickUpLocationDetails?.place,
      startLat: pickUpLocationDetails.latitude,
      startLong: pickUpLocationDetails.longitude,
      endLat: userDestination.latitude,
      endLong: userDestination.longitude,
      endLocation: userDestination.place,
      amount: 400,
      distance: 10,
    };

    // // console.log(objToSend);
    // return
    try {
      let response = await confimRideServices(objToSend);
      console.log(LOG_COLORS.red, response.data.addRide, 'yessss');
      setRideDetails(response.data.addRide);
      // return;
      // setTimeout(() => {
      //   setFindDriver(false);
      //   navigation.navigate('RideStatus');
      // }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const findDriverHandler = async () => {
    console.log('hshsshsh');
    let objToSend = {
      vehicleCategoryId: '6516a79e26a0ec9f41577d48',
      long: userLocation.longitude,
      lat: userLocation.latitude,
    };
    try {
      let response = await findRideDriverServices(objToSend);
      console.log(response, 'here');
      await myRequestStatus();
      // console.log(LOG_COLORS.pink, JSON.stringify(response.data),'mere wala data');
    } catch (error) {
      console.log(error);
    }
  };

  const myRequestStatus = async () => {
    // alert('shshs')
    try {
      let response = await myRequestStatusServices();
      // console.log(response.data,'12345');
      if (response.data.result.requestStatus == 'ACCEPT') {
        setFindDriver(false);
        navigation.navigate('RideStatus');
      }
    } catch (error) {
      console.log(error, 'qqqsf;lsdkfjsdkl');
    }
  };

  useEffect(() => {
    if (isFocused && rideDetails !== null) {
      setInterval(() => {
        findDriverHandler();
      }, 2000);
    }
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <CustomMapView
        Marker={true}
        mapStyle={styles.mapStyle}
        showPolyLine={true}
      />
      <LocationText />

      <View
        style={{
          height: moderateScale(170),
          backgroundColor: colors.white,
          paddingBottom: moderateScale(10),
        }}>
        <ScrollView>
          <View style={{paddingHorizontal: moderateScale(15), marginTop: 10}}>
            <Text16
              text={`Please Confirm Your 
Pickup We Are Ready For You`}
            />
          </View>

          <View
            style={{
              paddingHorizontal: scale(10),
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: moderateScale(15),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{height: moderateScale(20), width: moderateScale(20)}}>
                <Image style={CommonStyle.img} source={icon.currentLocation} />
              </View>
              <View style={{width: '80%'}}>
                <Text14
                  numberOfLines={1}
                  mt={1}
                  text={userLocationDetails?.formattedAddress}
                />
              </View>
            </View>
            <Text14 color={colors.yellow} text={'Search'} />
          </View>
        </ScrollView>
        <Button
          text={'Confirm'}
          onPress={() => {
            if (homeFlow.flow == 2) {
              setFindDriver(true);
              setTimeout(() => {
                setFindDriver(false);
                navigation.navigate('DriverList');
              }, 1000);
            } else {
              setFindDriver(true);
              confirmRide();
            }
          }}
        />
      </View>
      <LookingForDriver findDriver={findDriver} setFindDriver={setFindDriver} />
    </View>
  );
}

const LookingForDriver = ({findDriver, setFindDriver}) => {
  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={findDriver}
      animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(126,126,126,0.5)',
        }}>
        <View
          style={{
            height: moderateScale(200),
            width: '90%',
            backgroundColor: colors.white,
            borderRadius: moderateScale(8),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              // height: moderateScale(60),
              // width: moderateScale(60),
              alignSelf: 'center',
              // borderWidth:1
            }}>
            {/* <LottieView
            // resizeMode='cover'
              speed={2}
              source={require('../../../assets/Loder.json')}
              style={{
                width: moderateScale(90),
                height: moderateScale(90),
                borderWidth:1
              }}
              autoPlay={true}
            /> */}
            {/* <Image style={CommonStyle.img} source={icon.Loader} /> */}
          </View>

          <ActivityIndicator color={colors.yellow} size={moderateScale(40)} />

          <Text16
            mt={moderateScale(12)}
            color={colors.placeholderColor}
            fontFamily={fonts.light}
            text={'Please Wait while we are'}
          />

          <Text16 fontFamily={fonts.semibold} text={'Looking for Driver'} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  bottomContainer: {
    height: moderateScale(290),
    width: width,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
  },
  imgContainer: {
    width: scale(80),
    height: moderateScale(80),
  },
  mapStyle: {
    flex: 2,
    position: 'absolute',
    top: moderateScale(16),
    left: 0,
    right: 0,
    bottom: '0%',
    zIndex: -1,
  },
  carContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: scale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: colors.white,
  },
  destination: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateScale(10),

    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    marginTop: moderateScale(15),
  },
  searchContainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#EDF1F7',
    paddingVertical: moderateScale(1),
    borderRadius: moderateScale(4),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
});
