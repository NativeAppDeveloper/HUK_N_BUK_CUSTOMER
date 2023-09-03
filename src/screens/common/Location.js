import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackHandler from '../../component/BackHandler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle, colors, fonts} from '../../utils/Styles';
import {iphone8} from '../../utils/Helper';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Text18 from '../../component/customText/Text18';
import {icon} from '../../utils/Image';
import Text12 from '../../component/customText/Text12';
import Text14 from '../../component/customText/Text14';
import {MapPinIcon, XMarkIcon} from 'react-native-heroicons/solid';
import Text16 from '../../component/customText/Text16';
import { useNavigation } from '@react-navigation/native';
import { homeFlow } from '../../utils/localVariable';

const Location = ({route}) => {
    const paramData=route?.params
    // console.log(paramData,'[p[p[p[');
    const navigation=useNavigation()
  return (
    <View style={{flex: 1}}>
      {Platform.OS == 'android' && <SafeAreaView />}
      <View
        style={{
          ...Platform.select({
            ios: {
              paddingTop: iphone8 ? moderateScale(10) : moderateScale(40),
            },
          }),
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
            <Text18 color={colors.theme} text={paramData?.name} />
          </View>
        </View>
      </View>

      <View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            paddingVertical: moderateScale(10),
            backgroundColor: colors.white,
            elevation: 5,
            borderRadius: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              paddingBottom: moderateScale(10),
              paddingHorizontal: scale(15),
              borderColor: colors.borderC,
            }}>
            <View
              style={{
                height: moderateScale(9),
                width: moderateScale(9),
                backgroundColor: colors.yellow,
                borderRadius: moderateScale(4.5),
              }}></View>
            <View style={{marginLeft: moderateScale(10)}}>
              <Text12 fontSize={13} fontFamily={fonts.regular} text={'Pickup location'} />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // paddingBottom: moderateScale(10),
              paddingHorizontal: scale(15),
              borderColor: colors.borderC,
              paddingTop: moderateScale(10),
            }}>
            <View
              style={{
                height: moderateScale(12),
                width: moderateScale(12),
                backgroundColor: colors.theme,
                borderRadius: moderateScale(7.5),
              }}></View>
            <View style={{marginLeft: moderateScale(10)}}>
              <Text12 fontSize={13} fontFamily={fonts.regular} text={'Surat Railway Station'} />
            </View>
              <TouchableOpacity
              onPress={()=>navigation.goBack()}
               style={{position:'absolute',right:10,top:5}}>
            <XMarkIcon color={colors.black}/>
              </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* pupular cities */}

      <View
        style={{
          marginTop: moderateScale(30),
          backgroundColor: colors.white,
          paddingVertical: moderateScale(20),
          flex: 1,
        }}>
        <Text16 fontFamily={fonts.semibold} color={colors.theme} text={'    Popular Places'} />
        <ScrollView contentContainerStyle={{marginTop: moderateScale(10)}}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, ind) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if(homeFlow?.flow==2){
                    navigation.navigate('LuggageAllowance')

                  }
                  else{
                    navigation.navigate('BookRide')
                  }
                }}
                key={ind}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: scale(15),
                  marginTop: moderateScale(10),
                  //   borderBottomWidth: ind == 0 ? 0.5 : 0,
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
        </ScrollView>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(26),
    // backgroundColor: colors.white,
    paddingHorizontal: scale(10),
    justifyContent: 'center',
  },
});
