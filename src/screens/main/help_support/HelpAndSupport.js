import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import BackHandler from '../../../component/BackHandler';
import {icon} from '../../../utils/Image';
import {moderateScale, scale} from 'react-native-size-matters';
import Text16 from '../../../component/customText/Text16';
import Text14 from '../../../component/customText/Text14';
import Text22 from '../../../component/customText/Text22';
import Text20 from '../../../component/customText/Text20';
import Text12 from '../../../component/customText/Text12';
import {EnvelopeIcon, PhoneIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const HelpAndSupport = () => {
  const {navigate}=useNavigation()

  return (
    <View style={[CommonStyle.container, {backgroundColor: '#f6f6f6'}]}>
      <BackHandler name={'Help and Support'} />

      {
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: moderateScale(20),
            backgroundColor: colors.white,
            alignItems: 'center',
            paddingVertical: moderateScale(10),
            borderRadius: scale(7),
          }}>
          <View>
            <Text20 fontFamily={fonts.bold} text={'Contact Information'} />
            <Text12
              fontFamily={fonts.regular}
              text={'Say something to start a live chat!'}
            />
          </View>

          {
            //#endregionconstact

            <View style={{width: '90%', marginTop: moderateScale(10)}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop:moderateScale(10)
                }}>
                <View>
                  <PhoneIcon color={colors.gray} />
                  <Text12
                    text={'Call Back Request'}
                    fontFamily={fonts.regular}
                    mt={10}
                  />
                </View>
                <TouchableOpacity
                onPress={()=>navigate('RequestCallBack')}
                  style={{
                    borderWidth: 1,
                    borderColor: colors.green,
                    height: 28,
                    justifyContent: 'center',
                    paddingHorizontal:scale(10),
                    borderRadius:8,
                    width:scale(90)
                  }}>
                  <Text12
                    color={colors.green}
                    text={'Call Request'}
                    fontFamily={fonts.regular}
                    mt={1}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop:moderateScale(20)
                }}>
                <View>
                  <PhoneIcon color={colors.gray} />
                  <Text12
                    text={'Call Back Request'}
                    fontFamily={fonts.regular}
                    mt={10}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: colors.white,
                    height: 28,
                    justifyContent: 'center',
                    paddingHorizontal:scale(10),
                    borderRadius:8,
                    backgroundColor:colors.green,
                    width:scale(90),
                    alignItems:'center'
                  }}>
                  <Text12
                    color={colors.white}
                    text={'Call'}
                    fontFamily={fonts.regular}
                    mt={1}
                  />
                </TouchableOpacity>
              </View>



              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop:moderateScale(20)
                }}>
                <View>
                  <EnvelopeIcon color={colors.gray} />
                  <Text12
                    text={'Call With Us'}
                    fontFamily={fonts.regular}
                    mt={10}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: colors.white,
                    height: 28,
                    justifyContent: 'center',
                    paddingHorizontal:scale(10),
                    borderRadius:8,
                    backgroundColor:colors.yellow,
                    width:scale(90),
                    alignItems:'center'
                  }}>
                  <Text12
                    color={colors.black}
                    text={'Chat'}
                    fontFamily={fonts.regular}
                    mt={1}
                  />
                </TouchableOpacity>
              </View>
              
            </View>
            //#endregion
          }
          <View style={{paddingVertical:moderateScale(40)}}>
          <Image resizeMode='contain' style={{height:moderateScale(30),width:moderateScale(200)}} source={require('../../../assets/social.png')}/>
          </View>
        </View>
      }
    </View>
  );
};
const styles = StyleSheet.create({});

export default HelpAndSupport;
