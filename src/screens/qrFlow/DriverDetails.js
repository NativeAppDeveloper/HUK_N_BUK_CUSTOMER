import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {commonPadding, iphone8, width} from '../../utils/Helper';
import {moderateScale, scale} from 'react-native-size-matters';
import {moderateVerticalScale} from 'react-native-size-matters';
import Text18 from '../../component/customText/Text18';
import {CommonStyle, colors, fonts} from '../../utils/Styles';
import {icon} from '../../utils/Image';
import {StarIcon} from 'react-native-heroicons/solid';
import Text14 from '../../component/customText/Text14';
import Text16 from '../../component/customText/Text16';
import Text12 from '../../component/customText/Text12';
import Button from '../../component/customButton/Button';
import { useNavigation } from '@react-navigation/native';

const DriverDetails = () => {
  const navigation=useNavigation()
  return (
    <>
      {Platform.OS == 'android' && <SafeAreaView />}
      <View
        style={{
          ...Platform.select({
            ios: {
              paddingTop: iphone8 ? moderateScale(10) : moderateScale(40),
            },
          }),
          backgroundColor: '#F1F1EF',
          flex: 1,
        }}>
        {/* <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} /> */}
        <View style={styles.header}>
          {
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: moderateScale(15),
                zIndex: 999,
              }}
              onPress={() => navigation.goBack()}>
              <View
                style={{
                  height: moderateVerticalScale(30),
                  width: moderateVerticalScale(30),
                }}>
                <Image
                  style={[CommonStyle.img, {tintColor: colors.theme}]}
                  source={icon.backBtn}
                />
              </View>
            </TouchableOpacity>
          }

          <View style={{width: '100%', alignItems: 'center'}}>
            <Text18
              fontFamily={fonts.bold}
              color={colors.theme}
              text={'DriverDetails'}
            />
          </View>
        </View>

        {
          <View
            style={{
              backgroundColor: colors.white,
              height: '75%',
              position: 'absolute',
              width: width,
              bottom: 0,
            }}>
            <View
              style={{
                height: moderateScale(100),
                width: moderateScale(100),
                borderRadius: moderateScale(100),
                overflow: 'hidden',
                position: 'absolute',
                alignSelf: 'center',
                top: moderateScale(-50),
              }}>
              <Image
                style={CommonStyle.img}
                resizeMode="cover"
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gal_Gadot_at_the_2018_Comic-Con_International_13_%28cropped%29.jpg/1200px-Gal_Gadot_at_the_2018_Comic-Con_International_13_%28cropped%29.jpg',
                }}
              />
            </View>

            <View style={{marginTop: moderateScale(50), alignItems: 'center'}}>
              <Text18
                mt={10}
                color={colors.theme}
                fontFamily={fonts.bold}
                text={'Ravita Singh'}
              />
              <View
                style={{flexDirection: 'row', marginTop: moderateScale(10)}}>
                <StarIcon size={moderateScale(15)} color={colors.yellow} />
                <Text
                  style={{
                    fontSize: moderateScale(10),
                    fontFamily: fonts.regular,
                    color:colors.secondry
                  }}>
                  {' '}
                  4.5
                </Text>
              </View>

              <View
                style={{
                  width: width,
                  paddingHorizontal: commonPadding,
                  backgroundColor: '#F1F1EF',
                  marginTop: moderateScale(20),
                  paddingVertical: moderateScale(10),
                }}>
                <Text14 text={'Driver Details'} fontFamily={fonts.regular} />

                <View
                  style={{
                    marginTop: moderateScale(10),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      height: moderateScale(50),
                      width: moderateScale(50),
                      borderRadius: moderateScale(50),
                      overflow: 'hidden',
                    }}>
                    <Image
                      style={CommonStyle.img}
                      resizeMode="cover"
                      source={icon.bidDetails}
                    />
                  </View>

                  <View style={{width: '80%'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text16
                        text={'Wagon R'}
                        color={colors.theme}
                        fontFamily={fonts.semibold}
                      />
                      <Text12
                        text={'Hatchback'}
                        color={colors.theme}
                        fontFamily={fonts.extraLight}
                      />
                    </View>
                    <Text12
                      text={'UP16-BV-0000'}
                      color={colors.secondry}
                      fontFamily={fonts.extraLight}
                    />
                  </View>
                </View>
              </View>

              <View style={{marginTop: moderateScale(40),alignItems:"center"}}>
                <Text14
                  mt={10}
                  color={colors.theme}
                  fontFamily={fonts.regular}
                  text={'Contact Driver'}
                />

                <View style={{flexDirection:'row',width:moderateScale(130),justifyContent:'space-between',marginTop:moderateScale(20)}}>
                  <TouchableOpacity style={{height:moderateScale(44),width:moderateScale(44),borderRadius:100,backgroundColor:'#F1F1EF',padding:10}}>
                    <Image style={CommonStyle.img} source={icon.call}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={{height:moderateScale(44),width:moderateScale(44),borderRadius:100,backgroundColor:'#F1F1EF',padding:10}}>
                    <Image style={CommonStyle.img} source={icon.sms}/>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
            <Button
            onPress={()=>navigation.navigate('QrHome')}
             mt={moderateScale(50)}/>
          </View>
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(26),
    // backgroundColor: colors.white,
    paddingHorizontal: scale(10),
    justifyContent: 'center',
    ...Platform.select({
      android: {
        marginTop: moderateScale(10),
      },
    }),
  },
});

export default DriverDetails;
