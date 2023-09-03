import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyle, colors, fonts } from '../../../utils/Styles';
import BackHandler from '../../../component/BackHandler';
import { icon } from '../../../utils/Image';
import { moderateScale, scale } from 'react-native-size-matters';
import Text16 from '../../../component/customText/Text16';
import Text14 from '../../../component/customText/Text14';
import { useNavigation } from '@react-navigation/core';
import Text12 from '../../../component/customText/Text12';

const MyRequest = () => {
  const { navigate } = useNavigation();
  const [notifactionData, setNotifactionData] = useState([
    {
      img: icon.img2,
      color: colors.theme,
      heading: 'Intercity',
      desc: 'Booking #1234 has been success...',
    },
    {
      img: icon.img2,
      color: colors.yellow,
      heading: 'Outstation',
      desc: 'Invite friends - Get 3 coupons each!',
    },
    {
      img: icon.img1,
      color: colors.green,
      heading: 'Local Rental',
      desc: 'Booking #1234 has been success...',
    },
  ]);
  return (
    <View style={[CommonStyle.container, { backgroundColor: '#f6f6f6' }]}>
      <StatusBar backgroundColor={colors.theme} />
      <BackHandler drawer={1} name={'My Request'} />

      {
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: moderateScale(100),
          }}
          data={notifactionData}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => navigate('RequestDetails')}
                style={styles.itemContainer}>
                <View style={styles.bookingIdContainer}>
                  {index == 0 && (
                    <Text style={styles.bookingIdText}>
                      {`Tue, 23 Feb • `}{' '}
                      <Text
                        style={{ color: colors.theme, fontFamily: fonts.bold }}>
                        One Way
                      </Text>
                    </Text>
                  )}

                  {index == 1 && (
                    <Text style={styles.bookingIdText}>
                      {`Tue, 23 Feb to Wed, 24 Feb  •  `}{' '}
                      <Text
                        style={{ color: colors.theme, fontFamily: fonts.bold }}>
                        Round Trip
                      </Text>
                    </Text>
                  )}

                  {index == 2 && (
                    <Text style={styles.bookingIdText}>
                      {`Tue, 23 Feb to Wed, 24 Feb  •`}{' '}
                      <Text
                        style={{ color: colors.theme, fontFamily: fonts.bold }}>
                        Multicity
                      </Text>
                    </Text>
                  )}

                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.yellow,
                      padding: moderateScale(5),
                      paddingHorizontal: scale(13),
                      borderRadius: 8,
                    }}>
                    <Text12 mt={1} text={'0 Bid'} />
                  </TouchableOpacity>
                </View>

                {
                  //#region
                  <View
                    style={{
                      paddingHorizontal: scale(10),
                      // marginTop: moderateScale(5),
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
                        <Text style={{ fontSize: 10, fontFamily: fonts.regular,color:colors.theme }}>
                          {' '}
                          456 km
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
                          source={icon.currentLocation}
                          style={CommonStyle.img}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '90%',
                        }}>
                        <View>
                          <Text14
                            color={colors.theme}
                            mt={1}
                            text={'East Coast Hill'}
                          />
                          <Text12
                            fontFamily={fonts.regular}
                            color={colors.gray}
                            text={'Drop off 12:28PM'}
                          />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginRight: moderateScale(10),
                            }}>
                            <Image
                              resizeMode="contain"
                              style={{
                                height: moderateScale(15),
                                width: moderateScale(15),
                                marginRight: moderateScale(5),
                              }}
                              source={icon.child}
                            />
                            <Text12
                              mt={1}
                              text={'2'}
                              color={colors.gray}
                              fontFamily={fonts.regular}
                            />
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Image
                              resizeMode="contain"
                              style={{
                                height: moderateScale(15),
                                width: moderateScale(15),
                                marginRight: moderateScale(5),
                              }}
                              source={icon.adult}
                            />
                            <Text12
                              mt={1}
                              text={'2'}
                              color={colors.gray}
                              fontFamily={fonts.regular}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  //#endregion
                }

                {
                  //#region  bottom View
                  <View
                    style={{
                      borderTopWidth: 1,
                      paddingHorizontal: scale(10),
                      borderTopColor: colors.borderC,
                      paddingTop: 5,
                      marginTop: 8,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{ height: 40, width: 40 }}>
                      <Image
                        source={icon.car2}
                        resizeMode="contain"
                        style={CommonStyle.img}
                      />
                    </View>

                    <View style={{ marginLeft: 15 }}>
                      <Text12
                        fontFamily={fonts.regular}
                        color={colors.gray}
                        text={'Vehcile Type'}
                      />
                      <Text14 color={colors.theme} mt={1} text={'Hatchback'} />
                    </View>

                    <View
                      style={{
                        marginLeft: 15,
                        position: 'absolute',
                        right: 8,
                        top: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View>
                        <Text12
                          color={colors.secondry}
                          mt={1}
                          text={'Time Remaining'}
                          fontFamily={fonts.regular}
                        />
                        <Text12
                          textAlign={'right'}
                          fontFamily={fonts.bold}
                          color={colors.yellow}
                          text={'15:00 m'}
                          mt={1}
                        />
                      </View>

                      <View
                        style={{
                          height: moderateScale(20),
                          width: moderateScale(20),
                          marginLeft: moderateScale(10),
                        }}>
                        <Image style={CommonStyle.img} source={icon.Loader} />
                      </View>
                    </View>
                  </View>
                  //#endregion
                }
              </TouchableOpacity>
            );
          }}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(20),
  },
  tabButton: {
    width: scale(90),
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    marginRight: 10,
    borderRadius: 8,
  },
  listContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  itemContainer: {
    borderWidth: 1,
    marginTop: moderateScale(20),
    paddingVertical: moderateScale(10),
    borderColor: colors.borderC,
    backgroundColor: colors.white,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
  },
  bookingIdContainer: {
    paddingBottom: moderateScale(10),
    borderColor: colors.placeholderColor,
    paddingHorizontal: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookingIdText: {
    fontSize: 10,
    color: colors.theme,
    fontFamily: fonts.regular,
  },
});

export default MyRequest;

const MyRequestCard = () => {
  return <View></View>;
};
