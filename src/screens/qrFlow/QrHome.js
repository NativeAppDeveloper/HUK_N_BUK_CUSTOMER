import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {moderateScale, scale} from 'react-native-size-matters';

import {MagnifyingGlassIcon, MapPinIcon} from 'react-native-heroicons/solid';
import BottomSheet from '@gorhom/bottom-sheet';
import {CommonStyle, colors, fonts} from '../../utils/Styles';
import {icon, images} from '../../utils/Image';
import CustomMapView from '../../component/CustomMapView';
import Text16 from '../../component/customText/Text16';
import Text14 from '../../component/customText/Text14';
import Text12 from '../../component/customText/Text12';
import Button from '../../component/customButton/Button';
import {width} from '../../utils/Helper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CustomDropDown from '../../component/common/CustomDropDown';

export default function QrHome() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const sheetRef = useRef(null);
  const [indexx, setIndex] = useState(0);
  const [bookRental, setBookRental] = useState(false);
  const [outStation, setOutStation] = useState(false);
  const [outStationIndex, setOutStationIndex] = useState(0);

  // useEffect(() => {
  //   navigation.closeDrawer();
  // }, []);

  const handleSheetChanges = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
    setIndex(index);
    // updateState({ ...iState, open: false, i: index });
  }, []);
  //   const { toggle, open, i } = iState;
  const snapPoints = useMemo(() => ['40%', '55%', '70%'], []);

  return (
    <>
      <GestureHandlerRootView
        style={{
          flex: 1,
          // height:100
        }}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
                height: moderateScale(40),
                 width: moderateScale(40),
                 marginTop:moderateScale(50),
                 marginLeft:moderateScale(15)
                 }}>
            <Image
              resizeMode="contain"
              style={CommonStyle.img}
              source={icon.backBtn}
            />
          </TouchableOpacity>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
          />

          {
            //#region  current region Location
            <TouchableOpacity
              style={{
                height: moderateScale(30),
                width: moderateScale(30),
                backgroundColor: colors.white,
                padding: 5,
                borderRadius: 8,
                elevation: 5,
                position: 'absolute',
                top: '45%',
                right: moderateScale(10),
              }}>
              <Image
                style={CommonStyle.img}
                resizeMode="contain"
                source={icon.current}
              />
            </TouchableOpacity>
            //#endregion
          }
          <CustomMapView Marker={true} mapStyle={styles.mapStyle} />

          <BottomSheet
            index={indexx}
            ref={sheetRef}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enableContentPanningGesture={true}>
            {
              //#region Bottom View
              <View style={styles.bottomContainer}>
                <View style={styles.carContainer}>
                  <TouchableOpacity
                    onPress={() => setActiveTab(0)}
                    style={[
                      {
                        borderBottomWidth: activeTab == 0 ? 2 : 0,
                        width: '33%',
                        alignItems: 'center',
                      },
                    ]}>
                    <Image
                      style={styles.imgContainer}
                      resizeMode="contain"
                      source={images.intercity}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setActiveTab(1)}
                    style={[
                      {
                        borderBottomWidth: activeTab == 1 ? 2 : 0,
                        width: '33%',
                        alignItems: 'center',
                      },
                    ]}>
                    <Image
                      style={styles.imgContainer}
                      resizeMode="contain"
                      source={images.rentel}
                    />
                  </TouchableOpacity>
                </View>

                {
                  activeTab == 0 && (
                    //#region destion View

                    <View style={styles.destination}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Location', {name: 'Destination'})
                        }
                        style={styles.searchContainer}>
                        <MagnifyingGlassIcon color={colors.placeholderColor} />
                        <TextInput
                          style={{paddingVertical: moderateScale(5)}}
                          placeholder="Where are you going ?"
                        />
                      </TouchableOpacity>
                      {[1, 1].map((data, ind) => {
                        return (
                          <TouchableOpacity
                            onPress={() => navigation.navigate('QrInterCity_Rentel')}
                            key={ind}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              paddingHorizontal: scale(15),
                              marginTop: moderateScale(10),
                              borderBottomWidth: ind == 0 ? 0.5 : 0,
                              borderColor: colors.gray,
                              paddingBottom: moderateScale(10),
                            }}>
                            <MapPinIcon color={colors.yellow} />
                            <View style={{marginLeft: 10}}>
                              <Text14
                                text={'Surat Railway Station'}
                                fontFamily={fonts.semibold}
                              />
                              <Text12
                                text={'Rd road nearXYZ'}
                                color={colors.gray}
                                fontFamily={fonts.regular}
                              />
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  )
                  //#endregion
                }

                {
                  activeTab == 1 && (
                    //#region when rental tab is active
                    <>
                      {!bookRental ? (
                        <View style={{paddingHorizontal: scale(10)}}>
                          <Text16
                            mt={moderateScale(15)}
                            text={'How much time do you need ?'}
                            fontFamily={fonts.bold}
                          />

                          {[
                            'Keep a car and driver for upto 24 hours',
                            `Ideal for business meetings, tourist travel and multiple stop trips`,
                            'Book for now to get started',
                          ].map((item, ind) => {
                            return (
                              <View
                                key={ind}
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  marginVertical: moderateScale(4),
                                }}>
                                <View
                                  style={{
                                    height: 10,
                                    width: 10,
                                    backgroundColor: colors.yellow,
                                    marginRight: moderateScale(10),
                                  }}></View>
                                <Text14
                                  mt={1}
                                  fontFamily={fonts.regular}
                                  text={item}
                                  color={colors.theme}
                                />
                              </View>
                            );
                          })}

                          <Button
                            onPress={() => setBookRental(!bookRental)}
                            mt={moderateScale(10)}
                            width={'100%'}
                            text={'Book Rental'}
                          />
                        </View>
                      ) : (
                        <View style={{paddingHorizontal: scale(10)}}>
                          <Text16
                            mt={moderateScale(15)}
                            text={'How much time do you need ?'}
                            fontFamily={fonts.bold}
                          />
                          <CustomDropDown
                            placeholder={'1 Hour ( 10 km Included )'}
                            width={'100%'}
                          />

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: moderateScale(20),
                            }}>
                            <Text12
                              color={colors.secondry}
                              text={'Starting at'}
                            />
                            <View style={{flexDirection: 'row'}}>
                              <Text12 color={colors.black} text={'₹199.87/'} />
                              <Text12 color={colors.secondry} text={'hour'} />
                            </View>
                          </View>

                          <Button
                            onPress={() => navigation.navigate('BookRide')}
                            mt={moderateScale(10)}
                            width={'100%'}
                            text={'Choose a Ride'}
                          />
                        </View>
                      )}
                    </>
                  )
                  //#endregion
                }
              </View>
              //#endregion
            }
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    // height: moderateScale(290),
    width: width,
    backgroundColor: colors.white,
    // position: 'absolute',
    // bottom: 0
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
    justifyContent: 'space-around',
    width: '100%',
    alignSelf: 'center',
    // paddingHorizontal: scale(20),
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



