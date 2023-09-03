import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {moderateScale, scale} from 'react-native-size-matters';
import CustomMapView from '../../component/CustomMapView';
import {CommonStyle, colors, fonts} from '../../utils/Styles';
import Text20 from '../../component/customText/Text20';
import Text14 from '../../component/customText/Text14';
import {icon} from '../../utils/Image';
import Text12 from '../../component/customText/Text12';
import Text18 from '../../component/customText/Text18';
import RideCancelModal from '../../component/modal/RideCancelModal';
import {commonPadding, width} from '../../utils/Helper';
import {
  ChevronRightIcon,
  StarIcon,
  XMarkIcon,
} from 'react-native-heroicons/solid';
import Text16 from '../../component/customText/Text16';
import Button from '../../component/customButton/Button';

export default function QrInterCity_Rentel() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const [offerModal, SetOfferModal] = useState(false);
  const [slectedIndex, setSetlectedIndex] = useState(0);
  const [findDriver, setFindDriver] = useState(false);
  const [cancleRide, setCancelRide] = useState(false);

  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <CustomMapView Marker={true} mapStyle={styles.mapStyle} />
      <View
        style={{
          backgroundColor: colors.white,
          paddingVertical: moderateScale(15),
        }}>
        <View
          style={{
            paddingHorizontal: scale(15),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text20 fontFamily={fonts.semibold} text={'Booking Details'} />

          {/* <View
              style={{
                backgroundColor: colors.yellow,
                alignItems: 'center',
                padding: 5,
                paddingHorizontal: scale(15),
                borderRadius: 8,
                marginBottom: moderateScale(10),
              }}>
              <Text14 mt={1} text={'2'} />
              <Text14 mt={1} text={'Min'} />
            </View> */}
        </View>

        <View
          style={{
            paddingHorizontal: scale(15),
            borderBottomWidth: 1,
            borderColor: colors.borderC,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: moderateScale(10),
            marginTop: moderateScale(20),
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: moderateScale(50), width: moderateScale(50)}}>
              <Image
                resizeMode="contain"
                style={CommonStyle.img}
                source={icon.dummy}
              />
            </View>

            <View style={{marginLeft: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text14
                  fontFamily={fonts.semibold}
                  color={colors.theme}
                  text={'Akshit Kumar •'}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 3,
                    marginLeft: 10,
                  }}>
                  <StarIcon size={moderateScale(10)} color={colors.yellow} />
                  <Text12 text={'4.3'} />
                </View>
              </View>
              <Text12
                fontFamily={fonts.extraLight}
                color={colors.secondry}
                text="UP16-BV-0000 • Wagon R"
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                height: moderateScale(30),
                width: moderateScale(30),
                backgroundColor: colors.borderC,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: moderateScale(100),
              }}>
              <Image style={{height: '60%', width: '60%'}} source={icon.call} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: moderateScale(30),
                width: moderateScale(30),
                backgroundColor: colors.borderC,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: moderateScale(100),
                marginLeft: 10,
              }}>
              <Image style={{height: '60%', width: '60%'}} source={icon.sms} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: scale(15),
            borderBottomWidth: 1,
            borderColor: colors.borderC,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: moderateScale(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{height: moderateScale(20), width: moderateScale(20)}}>
              <Image
                resizeMode="contain"
                style={CommonStyle.img}
                source={icon.currentLocation}
              />
            </View>

            <View style={{marginLeft: 10}}>
              <Text14
                fontFamily={fonts.semibold}
                text={'333B, Anchorv  ale Link'}
                color={colors.theme}
              />
              <Text12
                fontFamily={fonts.extraLight}
                color={colors.secondry}
                text="Pick up 12:05PM"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: scale(15),
            borderBottomWidth: 1,
            borderColor: colors.borderC,
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            paddingBottom: moderateScale(10),
            paddingTop: moderateScale(15),
          }}>
          <Text14
            fontFamily={fonts.bold}
            text={'1 Hour (10 km Included )'}
            color={colors.theme}
          />
          <Text12
            fontFamily={fonts.extraLight}
            color={colors.secondry}
            text="Booking Time"
          />
        </View>

        <View
          style={{
            paddingHorizontal: scale(15),
            borderColor: colors.borderC,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: moderateScale(10),
            paddingTop: moderateScale(15),
          }}>
          <View>
            <Text12
              fontFamily={fonts.extraLight}
              color={colors.secondry}
              text="Payment"
            />
            <Text14
              fontFamily={fonts.bold}
              text={`Card : ........6543`}
              color={colors.theme}
            />
          </View>

          <View>
            <Text12
              fontFamily={fonts.extraLight}
              color={colors.secondry}
              text="Estimated Price"
            />
            <Text14
              textAlign={'right'}
              fontFamily={fonts.bold}
              text={`₹346`}
              color={colors.theme}
            />
          </View>
        </View>

        {
          //#endregion payment
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: scale(20),
              borderColor: colors.placeholderColor,
              paddingBottom: moderateScale(15),
              borderBottomWidth: 1,
              paddingHorizontal: commonPadding,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  height: moderateScale(28),
                  width: moderateScale(28),
                }}
                resizeMode="contain"
                source={icon.discount}
              />
              <Text14 text={'  Cash payment'} color={colors.placeholderColor} />
            </View>

            <ChevronRightIcon color={colors.black} />
          </View>
        }

        {
          //#region promo
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: scale(20),
              borderColor: colors.placeholderColor,
              paddingBottom: moderateScale(15),
              paddingHorizontal: commonPadding,
            }}>
            <TouchableOpacity
              onPress={() => SetOfferModal(true)}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: moderateScale(28),
                  width: moderateScale(28),
                  borderRadius: moderateScale(14),
                  backgroundColor: colors.yellow,
                  alignItems: 'center',
                }}
                resizeMode="contain">
                <Text16
                  text={'₹'}
                  color={colors.theme}
                  fontFamily={fonts.extraBold}
                />
              </View>
              <Text14
                text={'  Apply Promo code'}
                color={colors.placeholderColor}
              />
            </TouchableOpacity>

            <ChevronRightIcon color={colors.black} />
          </View>
        }

        <Button 
        onPress={()=>{
            setFindDriver(true);
            setTimeout(() => {
                setFindDriver(false)
                navigation.navigate('QrRideDetails')
            }, 1000);
           }}
         text={'Book Ride'} />
      </View>

      <RideCancelModal cancel={cancleRide} setCancelRide={setCancelRide} />
      <AddPromoCode offerModal={offerModal} SetOfferModal={SetOfferModal} />
      <LookingForDriver findDriver={findDriver} setFindDriver={setFindDriver} />

    </View>
  );
}

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

const AddPromoCode = ({offerModal, SetOfferModal}) => {
  const data1 = [
    {
      carName: 'Get 10% on First Ride',
      desc: 'Valid Till 12/08/23',
      price: '₹300-400',
    },
    {
      carName: 'Get 50₹ on Fair Ride',
      desc: 'Valid Till 15/10/22',
      price: '₹400-600',
    },
    {
      carName: 'Get 100₹on Next Two',
      desc: 'Valid Till 12/08/23',
      price: '₹400-600',
    },
  ];
  return (
    <Modal animationType="slide" visible={offerModal} transparent>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            height: '55%',
            backgroundColor: colors.white,
            paddingBottom: moderateScale(10),
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: moderateScale(15),
                marginTop: moderateScale(10),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text16
                    color={colors.theme}
                    fontFamily={fonts.bold}
                    text={'Add Promo Code'}
                    mt={1}
                  />
                  <Image
                    source={icon.discount}
                    style={{
                      height: moderateScale(20),
                      width: moderateScale(20),
                      marginHorizontal: scale(10),
                    }}
                  />
                </View>
                <TouchableOpacity onPress={() => SetOfferModal(false)}>
                  <XMarkIcon color={colors.black} size={moderateScale(25)} />
                </TouchableOpacity>
              </View>
              {
                //#endregion enter coupon
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: moderateScale(15),
                    marginBottom: moderateScale(10),
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: colors.placeholderColor,
                      width: '60%',
                      borderRadius: 8,
                      justifyContent: 'center',
                      paddingLeft: 10,
                    }}>
                    <TextInput placeholder="Enter promo code" />
                  </View>
                  <Button text={'Apply'} width={'30%'} />
                </View>
                //#endregion
              }
              {
                //#region car map
                <>
                  {data1.map((ele, ind) => {
                    return (
                      <View
                        key={ind}
                        style={{
                          marginVertical: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: moderateScale(15),
                        }}>
                        <View
                          style={{
                            height: moderateScale(55),
                            borderWidth: 0.5,
                            width: moderateScale(55),
                            borderColor: colors.placeholderColor,
                            borderRadius: 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Image
                            resizeMode="contain"
                            style={{height: '60%', width: '60%'}}
                            source={icon.discount}
                          />
                        </View>

                        <View
                          style={{
                            borderWidth: 1,
                            width: '80%',
                            borderRadius: 8,
                            paddingHorizontal: scale(10),
                          }}>
                          <View style={{}}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}>
                              <Text14
                                fontFamily={fonts.semibold}
                                text={ele.carName}
                              />

                             {ind==0&& <Image
                                resizeMode="contain"
                                style={{
                                  height: moderateScale(20),
                                  width: moderateScale(20),
                                  position: 'absolute',
                                  top:moderateScale(10),
                                  right:moderateScale(5)
                                }}
                                source={icon.checkbox}
                              />}
                            </View>

                            <Text12
                              fontFamily={fonts.extraLight}
                              color={colors.placeholderColor}
                              text={ele.desc}
                            />
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </>
                //#endregion
              }
            </View>
          </ScrollView>
          <Button onPress={() => SetOfferModal(false)} text={'Use Code'} />
        </View>
      </View>
    </Modal>
  );
};



const LookingForDriver = ({findDriver,setFindDriver}) => {
    return (
      <Modal 
      transparent
      statusBarTranslucent
      visible={findDriver}
      animationType='slide'
       >
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
                height: moderateScale(60),
                width: moderateScale(60),
                alignSelf: 'center',
              }}>
              <Image style={CommonStyle.img} source={icon.Loader} />
            </View>
  
            <Text16
              mt={moderateScale(12)}
              color={colors.placeholderColor}
              fontFamily={fonts.extraLight}
              text={'Please Wait while we are'}
            />
  
            <Text16 fontFamily={fonts.bold} text={'Looking for Driver'} />
          </View>
        </View>
      </Modal>
    );
  };