import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {iphone8} from '../../../utils/Helper';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {useNavigation} from '@react-navigation/native';
import {icon} from '../../../utils/Image';
import Text18 from '../../../component/customText/Text18';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Text16 from '../../../component/customText/Text16';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import { StarIcon } from 'react-native-heroicons/solid';

const DriverList = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground 
    source={require('../../../assets/dummymap.png')}
    style={{backgroundColor: 'rgba(0,0,0,0.3)', flex: 1}}>
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

          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <View style={{height: moderateScale(30), width: moderateScale(30)}}>
              <Image style={CommonStyle.img} source={icon.Loader} />
            </View>
            <View>
              <Text12
                color={colors.placeholderColor}
                fontFamil={fonts.regular}
                text={' Please Wait while we are'}
              />
              <Text14
                mt={1}
                text={' Looking for Driver'}
                color={colors.white}
              />
            </View>
            {/* <Text18 color={colors.white} text={'One Way'} /> */}
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderWidth: 1,
                backgroundColor: colors.white,
                paddingHorizontal: scale(4),
                borderRadius: 4,
                justifyContent: 'center',
                height: moderateScale(30),
                overflow: 'hidden',
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
                height: moderateScale(30),
                overflow: 'hidden',
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

      <View style={{height: 7, backgroundColor: colors.borderC}}>
        <View
          style={{
            width: '70%',
            height: '100%',
            backgroundColor: colors.yellow,
          }}></View>
      </View>

      {
        //#region  bid list
        <View style={{marginTop:moderateScale(20)}}>
          {[1, 1, 1].map((ele, ind) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('My Request')}
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
    </ImageBackground>
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
export default DriverList;
