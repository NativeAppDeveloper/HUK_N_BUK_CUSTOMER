import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {iphone8} from '../../../utils/Helper';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import Text18 from '../../../component/customText/Text18';
import {icon} from '../../../utils/Image';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import Text16 from '../../../component/customText/Text16';
import { StarIcon } from 'react-native-heroicons/solid';
const RequestDetails = () => {
  const navigation = useNavigation();

  return (
    <>
      {Platform.OS == 'android' && <SafeAreaView />}
      <View
        style={{
          backgroundColor: colors.theme,
          ...Platform.select({
            ios: {
              paddingTop: iphone8 ? moderateScale(10) : moderateScale(40),
            },
          }),
        }}>
        <StatusBar backgroundColor={colors.theme} barStyle={'light-content'} />
        <View style={styles.header}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
            <View
              style={{
                height: moderateVerticalScale(30),
                width: moderateVerticalScale(30),
              }}>
              <Image
                style={[CommonStyle.img, {tintColor: colors.white}]}
                source={icon.backBtn}
              />
            </View>
          </TouchableOpacity>

          <View style={{alignItems: 'center',}}>
            <Text18 color={colors.white} text={'One Way'} />
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderWidth: 1,
                backgroundColor: colors.white,
                paddingHorizontal: scale(4),
                borderRadius: 4,
                justifyContent: 'center',
              }}>
              <Text16
                mt={1}
                text={'15'}
                fontFamily={fonts.semibold}
                color={colors.yellow}
              />
            </View>

            <Text16
              mt={1}
              text={` : `}
              fontFamily={fonts.semibold}
              color={colors.gray}
            />

            <View
              style={{
                borderWidth: 1,
                backgroundColor: colors.white,
                paddingHorizontal: scale(4),
                borderRadius: 4,
                justifyContent: 'center',
              }}>
              <Text16
                mt={1}
                text={'46'}
                fontFamily={fonts.semibold}
                color={colors.yellow}
              />
            </View>
          </View>
        </View>
      </View>

      {
        //#region Details start
        <View>
          <View>
            {
              //#region
              <View
                style={{
                  paddingHorizontal: scale(15),
                  // marginTop: moderateScale(5),
                  backgroundColor: colors.white,
                  paddingVertical: moderateScale(15),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: moderateScale(10),
                  }}>
                  <Text12
                    mt={1}
                    fontFamily={fonts.regular}
                    color={colors.gray}
                    text={'Pick up 12:05PM, 23 Feb'}
                  />
                  <View style={{flexDirection: 'row'}}>
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
                <View>
                  <View style={{flexDirection: 'row'}}>
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
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{height: 17, width: 17}} source={icon.Time} />
                    <Text style={{fontSize: 10, fontFamily: fonts.regular,color:colors.theme}}>
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
                    <Text style={{fontSize: 10, color: '#f7954a'}}>456 km</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: 8}}>
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
                  </View>
                </View>
              </View>
              //#endregion
            }
          </View>
        </View>
        //#endregion
      }

      {
        //#region Bid recived
        <View>
          <View
            style={{
              paddingHorizontal: scale(15),
              marginVertical: moderateScale(10),
              flexDirection:'row',
              justifyContent:'space-between'
            }}>
            <Text18 text={'Bid Received'} />
            <Text18 text={'3 Bids'} />

            
          </View>

          {
            //#region  bid list
            <View>
              {[1, 1, 1].map((ele, ind) => {
                return (
                  <TouchableOpacity
                  onPress={() => navigation.navigate('BidDetails')}
                  key={ind}
                  style={{
                    paddingHorizontal: scale(10),
                    borderTopColor: colors.placeholderColor,
                    marginTop: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: colors.white,
                    width: '90%',
                    alignSelf: 'center',
                    paddingVertical: moderateVerticalScale(12),
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: colors.borderC,
                  }}>
                  <View style={{height: 40, width: 40}}>
                    <Image
                      source={icon.profile}
                      resizeMode="contain"
                      style={CommonStyle.img}
                    />
                  </View>
  
                  <View style={{marginLeft: 15}}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                    <Text14
                      color={colors.theme}
                      mt={1}
                      text={ind==0?'Akshit Kumar •':ind==1?'Sachin':'Honey'}
                    />
  
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <StarIcon size={moderateScale(12)} color={colors.yellow}/>
                      <Text style={{fontSize:10,color:colors.placeholderColor}}>5.5</Text>
                    </View>
                    </View>
                    <Text12
                      fontFamily={fonts.light}
                      color={colors.gray}
                      text={'UP16-BV-0000 • Wagon R'}
                    />
                  </View>
  
                  <View
                    style={{
                      marginLeft: 15,
                      position: 'absolute',
                      right: 8,
                      top: 16,
                    }}>
                    <Text12 color={colors.theme} mt={1} text={'Offered Price'} />
                    <Text12
                      textAlign={'right'}
                      fontFamily={fonts.regular}
                      color={colors.black}
                      text={'₹ 7,325'}
                    />
                  </View>
                </TouchableOpacity>
                );
              })}
            </View>
            //#endregion bid list
          }
        </View>
        //#endregion
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(26),
    backgroundColor: colors.theme,
    paddingHorizontal: scale(10),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default RequestDetails;
