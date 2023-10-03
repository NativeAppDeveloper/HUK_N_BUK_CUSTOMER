import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../../utils/Image';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../utils/Styles';
import Text22 from '../../component/customText/Text22';
import Text14 from '../../component/customText/Text14';
import Input from '../../component/customInput/Input';
import Button from '../../component/customButton/Button';
import Text12 from '../../component/customText/Text12';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {errorTost, width} from '../../utils/Helper';
import toastShow from '../../utils/Toast';
import Validator from '../../utils/Validator';
import {checkPhoneEmailSercvies} from '../../services/Services';

const Login = () => {
  const navigation = useNavigation();
  const [loginValue, setLoginValue] = useState('');

  const loginHandler = () => {
    if (loginValue == '') {
      errorTost('Please enter email or phone number');
      return;
    }
    if (checkPhoneEmail()) {
      checUserExist();
      // navigation.navigate('LoginOtp', {item: loginValue});
    }
    // else{
    //   // navigation.navigate('LoginOtp', {item: loginValue});

    // }
  };

  const checkPhoneEmail = () => {
    if (!isNaN(loginValue)) {
      if (loginValue.length < 10) {
        errorTost('Please enter valid phone number');
        return false;
      }
      return true;
    }
    if (isNaN(loginValue)) {
      if (!Validator.isEmail(loginValue)) {
        errorTost('Please enter valid email');
        return false;
      }
    }
    return true;
  };

  const checUserExist = async () => {
    let objToSend = {
      email: '',
      phoneNumber: loginValue,
    };
    try {
      let response = await checkPhoneEmailSercvies(objToSend);
      navigation.navigate('LoginOtp', {item: loginValue});
    } catch (error) {
      console.log(error.response.data);
      errorTost(error.response.data.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          width: width,
          alignItems: 'center',
          paddingBottom: moderateScale(50),
        }}>
        <View
          style={{
            width: '90%',
            alignItems: 'center',
            marginTop: moderateScale(90),
          }}>
          <View style={{height: moderateScale(70), width: scale(70)}}>
            <Image
              resizeMode="contain"
              style={CommonStyle.img}
              source={require('../../assets/icon/logo.png')}
            />
          </View>

          <View style={[CommonStyle.alCenter]}>
            <Text22
              fontFamily={fonts.bold}
              color={colors.theme}
              mt={moderateScale(40)}
              text={'Hi, Welcome to Huk & Buk'}
            />
            <Text14
              mt={moderateScale(10)}
              fontFamily={fonts.regular}
              color={colors.secondry}
              text={'Enter your Mobile or Email to login.'}
            />
          </View>

          <Input
            onChangeText={val => setLoginValue(val)}
            mt={moderateScale(33)}
            placeHolder={'Mobile Number or Email address'}
          />

          <Button
            text={'Login'}
            onPress={() => loginHandler()}
            mt={moderateScale(30)}
            width={'100%'}
          />

          <Text12
            fontFamily={fonts.regular}
            color={colors.gray}
            text="By clicking start, you agree to our "
            mt={moderateScale(25)}
          />
          <Text12
            fontFamily={fonts.bold}
            mt={10}
            color={colors.black}
            text="Terms and Conditions "
          />
        </View>

        <View style={{flexDirection: 'row', marginTop: moderateScale(180)}}>
          <Text14
            color={colors.secondry}
            fontFamily={fonts.regular}
            text={'Don’t have an account?'}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Step1')}>
            <Text14 fontFamily={fonts.bold} text={' Sign Up'} />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
export default Login;
