import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {CommonStyle, colors} from '../../../utils/Styles';
import {icon, images} from '../../../utils/Image';
// import Text18 from '../../../component/customText/Text18';
import Text12 from '../../../component/customText/Text12';
import {fonts} from '../../../utils/Styles';
import Text14 from '../../../component/customText/Text14';
import {MinusIcon, PlusIcon} from 'react-native-heroicons/solid';
import Text24 from '../../../component/customText/Text24';
import Button from '../../../component/customButton/Button';
import {useNavigation} from '@react-navigation/core';
import Text18 from '../../../component/customText/Text18';

const SelectPassenger = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(1);
  const navigation = useNavigation();

  return (
    <View>
      {Platform.OS == 'android' && <SafeAreaView />}
      <View
        style={{
          ...Platform.select({
            ios: {
              paddingTop: iphone8 ? moderateScale(10) : moderateScale(40),
            },
          }),
        }}>
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
            <Text18 fontFamily={fonts.semibold} color={colors.theme} text={'Select Passengers'} />
          </View>
        </View>
        <View
          style={{
            marginTop: moderateVerticalScale(10),
            borderBottomColor: colors.placeholderColor,
            borderBottomWidth: 0.5,
            paddingVertical: moderateVerticalScale(10),
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: moderateScale(20),
            }}>
            <View style={styles.imageNameInner}>
              <Image
                resizeMode="contain"
                style={[CommonStyle.img]}
                source={icon.car2}
              />
            </View>
            <View>
              <Text12 color={colors.gray} text={'Vehicle Type'} />

              <View>
                <Text14 mt={1} fontFamily={fonts.semibold} color={colors.theme} text={'Hatchback'} />
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                right: moderateScale(10),
              }}>
              <Text12 mt={1} color={colors.gray} text={'Maximum Passenger'} />
              <Text12
                mt={1}
                textAlign={'center'}
                color={colors.theme}
                text={'5'}

              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: moderateVerticalScale(10),
          borderBottomColor: colors.placeholderColor,
          borderBottomWidth: 0.5,
          paddingVertical: moderateVerticalScale(10),
        }}>
        <View style={styles.imageNameInner}>
          <Image style={[CommonStyle.img]} source={icon.fe_male} />
        </View>
        <Text14
          fontFamily={fonts.semibold}
          color={colors.theme}
          textAlign={'center'}
          text={'2 Adults'}
        />
        <Text14
          // fontFamily={fonts}
          color={colors.gray}
          textAlign={'center'}
          mt={1}
          text={'>12 years'}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: moderateScale(80),
            marginVertical: moderateScale(20),
          }}>
          <TouchableOpacity>
            <MinusIcon size={moderateScale(20)} color={colors.black} />
          </TouchableOpacity>
          <Text24 textAlign={'center'} text={adultCount} />
          <TouchableOpacity>
            <PlusIcon size={moderateScale(20)} color={colors.black} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: moderateVerticalScale(10),
          paddingVertical: moderateVerticalScale(10),
        }}>
        <View style={styles.imageNameInner}>
          <Image style={[CommonStyle.img]} source={icon.bro_sis} />
        </View>
        <Text14
          color={colors.theme}
          textAlign={'center'}
          text={'0 childrens'}
        />
        <Text14
          color={colors.gray}
          textAlign={'center'}
          mt={1}
          text={'2-12 years'}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: moderateScale(80),
            marginVertical: moderateScale(20),
          }}>
          <MinusIcon size={30} color={colors.black} />
          <Text24 textAlign={'center'} text={childCount} />

          <PlusIcon size={30} color={colors.black} />
        </View>
      </View>
      

      <Button
        onPress={() => navigation.navigate('Depart_Arrival')}
        width={'90%'}
        mt={moderateVerticalScale(80)}
        text={'Next'}
      />
    </View>
  );
};

export default SelectPassenger;

const styles = StyleSheet.create({
  imageNameInner: {
    height: moderateScale(32),
    width: moderateScale(32),
    marginRight: moderateScale(10),
    borderRadius: moderateScale(6),
    alignSelf: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.borderC,
  },

  header: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(26),
    // backgroundColor: colors.white,
    paddingHorizontal: scale(10),
    justifyContent: 'center',
  },
});
