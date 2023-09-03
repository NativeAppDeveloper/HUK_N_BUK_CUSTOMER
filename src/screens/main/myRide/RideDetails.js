import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { height, iphone8, width } from '../../../utils/Helper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text18 from '../../../component/customText/Text18';
import { icon, images } from '../../../utils/Image';
import { CommonStyle, colors, fonts } from '../../../utils/Styles';
import CustomMapView from '../../../component/CustomMapView';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Button from '../../../component/customButton/Button';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RideCancelModal from '../../../component/modal/RideCancelModal';
import { PlusIcon } from 'react-native-heroicons/solid';
import { AirbnbRating } from 'react-native-ratings';
import CancelModal from '../../../component/modal/CancelModal';

const RdieDetails = ({ route }) => {
  const navigation = useNavigation();
  const [outStationIndex, setOutStationIndex] = useState(0);
  const sheetRef = useRef(null);
  const [indexx, setIndex] = useState(0);
  const [cancel, setCancelRide] = useState(false);
  const [cancelStatus, setCancelStatus] = useState(false)
  const rideStatus = route?.params?.rideStatus;
  console.log(rideStatus, '=-==-=ride satus');

  const rideColor = () => {
    switch (rideStatus) {
      case 'Ongoing':
        return colors.orange;
      case 'Upcoming':
        return colors.theme;
      case 'Completed':
        return colors.green;
      case 'Cancelled':
        return colors.red;
    }
  };

  const handleSheetChanges = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
    setIndex(index);
    // updateState({ ...iState, open: false, i: index });
  }, []);
  //   const { toggle, open, i } = iState;
  const snapPoints = useMemo(() => ['55%', '65%', '70%'], []);

  return (
    <>
      {Platform.OS == 'android' && <SafeAreaView />}
      <View
        style={{
          backgroundColor: colors.white,
          ...Platform.select({
            ios: {
              paddingTop: iphone8 ? moderateScale(10) : moderateScale(10),
            },
          }),
        }}>
        <StatusBar backgroundColor={colors.theme} barStyle={'light-content'} />
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: moderateScale(15),
              zIndex: 999,
              top: 25,
            }}
            onPress={() => navigation.goBack()}>
            <View
              style={{
                height: moderateVerticalScale(30),
                width: moderateVerticalScale(30),
              }}>
              <Image
                style={[CommonStyle.img, { tintColor: colors.theme }]}
                source={icon.backBtn}
              />
            </View>
          </TouchableOpacity>

          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text18 color={colors.theme} text={'Ride Details'} />
            <Text
              style={{ fontSize: 10, marginTop: 10, fontFamily: fonts.regular }}>
              Tue, 23 Feb 2020 12:00PM • ID: 2130812309 • Round Trip
            </Text>
          </View>
        </View>

        {
          //#region  ride status
          <View
            style={{
              paddingVertical: moderateScale(7),
              backgroundColor: rideColor(),
              alignItems: 'center',
            }}>
            <Text12 text={rideStatus} color={colors.white} />
          </View>
          //#endregion
        }
      </View>

      {
        //#region  map
        <CustomMapView Marker={true} mapStyle={styles.mapStyle} />
        //#endregion
      }

      <GestureHandlerRootView
        style={{
          flex: 1,
        }}>
        <BottomSheet
          index={indexx}
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enableContentPanningGesture={true}>
          <View
            style={{
              backgroundColor: colors.white,
              // position: 'absolute',
              width: width,
              bottom: 0,
              height: moderateScale(370),
            }}>
            <BottomSheetScrollView>
              <View
                style={{
                  paddingHorizontal: scale(10),
                  marginTop: moderateScale(0),
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    height: moderateScale(40),
                    width: moderateScale(40),
                    borderRadius: moderateScale(20),
                    borderWidth: 1,
                    overflow: 'hidden',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={CommonStyle.img}
                    source={icon.car1}
                  />
                </View>

                <View style={{ marginLeft: moderateScale(10) }}>
                  <Text14
                    color={colors.theme}
                    mt={1}
                    fontFamily={fonts.bold}
                    text={'Wagon R'}
                  />
                  <Text12
                    fontFamily={fonts.regular}
                    color={colors.gray}
                    text={'UP16-BV-0000'}
                  />
                </View>
              </View>

              <View
                disabled
                // onPress={() => navigate('RdieDetails')}
                style={styles.itemContainer}>
                <View style={styles.bookingIdContainer}>
                  <Text style={styles.bookingIdText}>{`Tue, 23 Feb 2020`}</Text>
                </View>

                {
                  //#region
                  <View
                    style={{
                      paddingHorizontal: scale(15),
                      marginTop: moderateScale(10),
                    }}>
                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <View
                          style={{
                            height: moderateScale(23),
                            width: moderateScale(23),
                          }}>
                          <Image
                            source={icon.currentLocation}
                            style={CommonStyle.img}
                          />
                        </View>

                        <View>
                          <Text14
                            color={colors.theme}
                            mt={1}
                            text={'333B, Anchorv  ale Link'}
                          />
                          <Text12
                            fontFamily={fonts.regular}
                            color={colors.gray}
                            text={'Pick up 12:05PM, 23 Feb'}
                          />
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        height: 50,
                        borderColor: 'black',
                        borderLeftWidth: 1,
                        borderStyle: 'dashed',
                        marginHorizontal: scale(10),
                        // alignItems:'center',
                        justifyContent: 'center',
                        paddingLeft: 20,
                      }}>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                          style={{ height: 17, width: 17 }}
                          source={icon.Time}
                        />
                        <Text style={{ fontSize: 10, fontFamily: fonts.regular }}>
                          {' '}
                          4h50m
                        </Text>
                        <Image
                          style={{
                            height: 17,
                            width: 17,
                            marginHorizontal: scale(10),
                          }}
                          source={icon.distance}
                        />
                        <Text style={{ fontSize: 10, color: '#f7954a' }}>
                          456 km
                        </Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                      <View
                        style={{
                          height: moderateScale(23),
                          width: moderateScale(23),
                        }}>
                        <Image
                          source={icon.location}
                          style={CommonStyle.img}
                        />
                      </View>

                      <View>
                        <Text14
                          color={colors.theme}
                          mt={1}
                          text={'333B, Anchorv  ale Link'}
                        />
                        <Text12
                          fontFamily={fonts.regular}
                          color={colors.gray}
                          text={'Drop off up 12:05PM, 23 Feb'}
                        />
                      </View>
                    </View>
                  </View>
                  //#endregion
                }

                {
                  //#region  bottom View
                  <View
                    style={{
                      borderTopWidth: 0.5,
                      paddingHorizontal: scale(10),
                      borderTopColor: colors.placeholderColor,
                      paddingTop: moderateScale(15),
                      marginTop: 8,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        overflow: 'hidden',
                      }}>
                      <Image
                        source={{
                          uri: 'https://nftcrypto.io/wp-content/uploads/2023/05/2023-05-18-17_57_18-The-Journey-of-an-NFT-Avatar-Word-Product-Activation-Failed.png',
                        }}
                        resizeMode="cover"
                        style={CommonStyle.img}
                      />
                    </View>

                    <View style={{ marginLeft: 15 }}>
                      <Text14
                        color={colors.theme}
                        mt={1}
                        text={'Akshit'}
                      />
                      <Text12
                        fontFamily={fonts.regular}
                        color={colors.gray}
                        text={'4.5'}
                      />
                    </View>

                    <View
                      style={{
                        marginLeft: 15,
                        position: 'absolute',
                        right: 8,
                        top: 15,
                      }}>
                      <Text12
                        textAlign={'right'}
                        fontFamily={fonts.bold}
                        color={colors.black}
                        text={'₹ 150.00'}
                        mt={1}
                      />
                      <Text12
                        color={colors.theme}
                        git
                        mt={1}
                        fontFamily={fonts.regular}
                        textAlign={'right'}
                        text={'8268'}
                      />
                    </View>
                  </View>
                  //#endregion
                }

                {
                  rideStatus === 'Completed' && (
                    //#region rate a driver
                    <View
                      style={{
                        paddingHorizontal: scale(15),
                        borderTopWidth: 0.5,
                        marginTop: moderateScale(20),
                        borderColor: colors.placeholderColor
                      }}>
                      <Text14 mt={15} text={'Rated'} />
                      <AirbnbRating
                        size={moderateScale(18)}
                        count={5}
                        reviews={[]}
                        ratingContainerStyle={{
                          alignItems: 'flex-start',
                        }}
                        defaultRating={3}
                        starContainerStyle={{
                          position: 'absolute',
                          height: moderateScale(20),
                        }}
                      />

                      <Text12
                        color={colors.secondry}
                        fontFamily={fonts.regular}
                        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                      />
                    </View>
                  )
                  //#endregion
                }

                {
                  rideStatus !== 'Cancelled' && (
                    //#region  amnities
                    <View
                      style={{
                        paddingHorizontal: scale(10),
                        borderTopWidth: 0.5,
                        borderColor: colors.placeholderColor,
                        marginTop: moderateScale(15),
                      }}>
                      <Text14 text={'Amenities'} />

                      <View style={{ flexDirection: 'row' }}>
                        {['Water Bottle', 'Wifi', 'Tissues', 'Newspaper'].map(
                          (data, ind) => {
                            return (
                              <TouchableOpacity
                                style={{
                                  backgroundColor: colors.bg,
                                  padding: moderateScale(8),
                                  marginRight: moderateScale(10),
                                  borderRadius: 8,
                                  marginTop: moderateScale(10),
                                }}>
                                <Text12
                                  text={data}
                                  color={colors.placeholderColor}
                                  mt={1}
                                />
                              </TouchableOpacity>
                            );
                          },
                        )}
                      </View>
                    </View>
                  )
                  //#endregion
                }

                {
                  rideStatus == 'Ongoing' && (
                    //#region  odometer details
                    <View
                      style={{
                        paddingHorizontal: moderateScale(15),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: moderateScale(10),
                        borderBottomWidth: 0.5,
                        borderColor: colors.placeholderColor,
                        paddingBottom: moderateScale(10),
                        borderTopWidth: 0.5,
                        paddingTop: moderateScale(13),
                      }}>
                      <View>
                        <Text12
                          color={colors.theme}
                          fontFamily={fonts.bold}
                          text={'Odometer Drop Point'}
                        />
                        <View
                          style={{
                            height: moderateScale(55),
                            width: moderateScale(55),
                            borderWidth: 1,
                            borderRadius: 8,
                            marginTop: moderateScale(10),
                          }}>
                          <Image
                            style={CommonStyle.img}
                            source={images.odometer}
                          />
                        </View>
                      </View>

                      <Text12
                        color={colors.theme}
                        fontFamily={fonts.bold}
                        text={'Odometer Pickup Point'}
                      />
                    </View>
                  )
                  //#endregion
                }



                {
                  rideStatus == "Completed" && (
                    //#region  odometer details
                    <View
                      style={{
                        paddingHorizontal: moderateScale(15),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: moderateScale(10),
                        borderBottomWidth: 0.5,
                        borderColor: colors.placeholderColor,
                        paddingBottom: moderateScale(10),
                        borderTopWidth: 0.5,
                        paddingTop: moderateScale(13),
                      }}>
                      <View>
                        <Text12
                          color={colors.theme}
                          fontFamily={fonts.bold}
                          text={'Odometer Pickup Point'}
                        />
                        <View
                          style={{
                            height: moderateScale(55),
                            width: moderateScale(55),
                            borderWidth: 1,
                            borderRadius: 8,
                            marginTop: moderateScale(10),
                          }}>
                          <Image
                            style={CommonStyle.img}
                            source={images.odometer}
                          />
                        </View>
                      </View>

                      <View style={{alignItems:'center'}}>
                        <Text12
                          color={colors.theme}
                          fontFamily={fonts.bold}
                          text={'Odometer Drop Point'}
                        />
                        <View
                          style={{
                            height: moderateScale(55),
                            width: moderateScale(55),
                            borderWidth: 1,
                            borderRadius: 8,
                            marginTop: moderateScale(10),
                          }}>
                          <Image
                            style={CommonStyle.img}
                            source={images.odometer}
                          />
                        </View>
                      </View>
                    </View>
                  )
                  //#endregion
                }

                {
                  rideStatus !== 'Cancelled' && (
                    //#region  price view

                    <View
                      style={{
                        paddingHorizontal: scale(10),
                        marginTop: moderateScale(10),
                        borderTopWidth: 0.5,
                        borderColor: colors.placeholderColor,
                        paddingTop: moderateScale(10),
                      }}>
                      <Text18 color={colors.theme} text={'Price Break Up'} />

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12
                          color={colors.theme}
                          text={'Estimated Basic Fare'}
                        />
                        <Text12 color={colors.theme} text={'5,275'} />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12 color={colors.secondry} text={'Toll Tax'} />
                        <Text12
                          color={colors.secondry}
                          text={'Exclude ( ₹150 to ₹180 )'}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12 color={colors.secondry} text={'State Tax'} />
                        <Text12 color={colors.secondry} text={'Include'} />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12
                          color={colors.secondry}
                          text={'Driver Allowance (Per Night)'}
                        />
                        <Text12
                          color={colors.secondry}
                          text={'Exclude ( ₹150/ Night )'}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12 color={colors.secondry} text={'Parking'} />
                        <Text12 color={colors.secondry} text={'Excluded'} />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12
                          color={colors.secondry}
                          text={'Extra Km Charge'}
                        />
                        <Text12
                          color={colors.secondry}
                          text={'₹15/km after 160km'}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12 color={colors.theme} text={rideStatus=="Completed"?'Total Fare':'Partial Payment'} />
                        <Text12 color={colors.theme} text={rideStatus=="Completed"?'7000':'Partial Payment'} />
                      </View>
                    </View>
                  )
                  //#endregion
                }
              </View>
              {(rideStatus == 'Upcoming' || rideStatus == 'Ongoing') && (
                <View style={{ marginVertical: moderateScale(15) }}>
                  <Button width={'95%'} text={'Pay ₹5125'} />
                </View>
              )}

              {rideStatus == 'Upcoming' && (
                <TouchableOpacity
                  onPress={() => setCancelRide(true)}
                  style={{
                    width: '90%',
                    borderTopWidth: 1,
                    alignSelf: 'center',
                    alignItems: 'center',
                    borderColor: colors.placeholderColor,
                    marginBottom: moderateScale(10),
                  }}>
                  <Text14 mt={moderateScale(10)} text={'Cancel Ride'} />
                </TouchableOpacity>
              )}

              {
                rideStatus == 'Cancelled' && (
                  //#region when ride status is cancel
                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                      marginTop: moderateScale(10),
                    }}>
                    <Text12
                      fontFamily={fonts.regular}
                      color={colors.secondry}
                      text={'Cancel Reason'}
                    />
                    <Text14 text={'Driver denied to go to destination'} />
                  </View>
                )
                //#endregion
              }


              {rideStatus == "Completed" &&
                //#region  when ride complete rider download the recipt
                <TouchableOpacity
                  // onPress={() => setCancelRide(true)}
                  style={{
                    width: '90%',
                    borderTopWidth: 1,
                    alignSelf: 'center',
                    alignItems: 'center',
                    borderColor: colors.placeholderColor,
                    marginBottom: moderateScale(10),
                  }}>
                  <Text14 mt={moderateScale(10)} text={'Download Receipt'} />
                </TouchableOpacity>
                //#endregion
              }

              {/* <PlusIcon size={20} color={colors.theme}/> */}
            </BottomSheetScrollView>
          </View>
        </BottomSheet>
      </GestureHandlerRootView>

      <RideCancelModal cancel={cancel} setCancelRide={setCancelRide} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(26),
    backgroundColor: colors.white,
    paddingHorizontal: scale(10),
    justifyContent: 'center',
  },
  mapStyle: {
    flex: 2,
    position: 'absolute',
    top: moderateScale(16),
    left: 0,
    right: 0,
    bottom: '0%',
    zIndex: -1,
    // heigh
  },
  itemContainer: {
    marginTop: moderateScale(20),
    paddingVertical: moderateScale(10),
    borderColor: colors.placeholderColor,
    backgroundColor: colors.white,
    borderWidth: 0.5,
  },
  bookingIdContainer: {
    paddingBottom: moderateScale(10),
    borderColor: colors.placeholderColor,
    paddingHorizontal: scale(15),
  },
  bookingIdText: {
    fontSize: 10,
    color: colors.theme,
    fontFamily: fonts.regular,
  },
});

export default RdieDetails;
