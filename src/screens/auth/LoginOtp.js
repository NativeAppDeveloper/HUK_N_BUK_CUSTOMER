import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text24 from '../../component/customText/Text24';
import Text14 from '../../component/customText/Text14';
import {colors} from '../../utils/Styles';
import SignupSeteps from '../../component/common/SignupSeteps';
import Button from '../../component/customButton/Button';
import {useDispatch} from 'react-redux';
import {errorTost, sucessTost} from '../../utils/Helper';
import {
  getLoginOtpServices,
  loginVerifiyServices,
} from '../../services/Services';
import { setData } from '../../services/AsyncServices';

const LoginOtp = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const btnHandler = () => {
    dispatch({
      type: 'CHANGE_STACK',
      payload: 'MAIN',
    });
  };

  //   let {route} = props;
  const isFocused = useIsFocused();
  let paramData = props?.route?.params?.item;
  // define all state here
  const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const [openFlag, setOpenFlag] = useState(false);
  const [matchOtp, setMatchOtp] = useState('');
  const [enterOtp, setEnterOtp] = useState('');
  const [seconds, setSeconds] = useState(59);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [checkNum, setCheckNum] = useState(null);

  const getOtp = async () => {
    let objToSend = {
      phoneNumber: paramData,
    };
    try {
      let response = await getLoginOtpServices(objToSend);
      sucessTost('123456');
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    let objToSend = {
      phoneNumber: paramData,
      otp: 123456,
    };
    try {
      let response = await loginVerifiyServices(objToSend);
      console.log(response.data);
      await setData('token', response.data.token);
      btnHandler();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOtp();
  }, []);

  // const checkPhoneEmail = () => {
  //   console.log(paramData);
  //   if (!isNaN(paramData)) {
  //     setCheckNum(true);
  //   } else {
  //     setCheckNum(false);
  //   }
  // };

  // useEffect(() => {
  //   checkPhoneEmail();
  // }, []);

  // useEffect(() => {
  //   if(checkNum){
  //     // getOtp1()
  //   }
  // }, [checkNum])

  // timer start
  // useEffect(() => {
  //   if (isFocused) {
  //     let interval = null;
  //     if (isTimerRunning) {
  //       interval = setInterval(() => {
  //         setSeconds(seconds => {
  //           if (seconds === 0) {
  //             clearInterval(interval);
  //             setIsTimerRunning(false);
  //             return 30;
  //           }
  //           return seconds - 1;
  //         });
  //       }, 1000);
  //     }
  //     return () => clearInterval(interval);
  //   }
  // }, [isTimerRunning, isFocused]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView bounces={false} extraHeight={moderateScale(100)}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <SignupSeteps step={''} />
          <Text24 mt={30} text={'OTP Verification'} />

          <Text14
            mt={10}
            color={colors.gray}
            text={`We have sent you a 6 digit verification code on `}
          />
          <Text14 text={paramData} />

          <OTPInputView
            style={{
              width: '100%',
              height: moderateScale(100),
              alignSelf: 'center',
            }}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad={openFlag}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              // setEnterOtp(code);
              setCode(code);
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <Button
            backgroundColor={colors.yellow}
            // backgroundColor={code.length<6?colors.placeholderColor:colors.yellow}
            onPress={() => verifyOtp()}
            width={'100%'}
            mt={moderateVerticalScale(20)}
            text={'Verify'}
          />
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text14
                textAlign={'center'}
                mt={25}
                color={colors.gray}
                text={
                  checkNum ? 'Change my mobile number' : 'Change my email id'
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: scale(45),
    height: moderateVerticalScale(53),
    borderRadius: moderateScale(8),
    color: 'black',
    fontFamily: 'PlusJakartaSans-ExtraBold',
    backgroundColor: colors.white,
  },

  underlineStyleHighLighted: {
    // borderColor: colors.theme,
  },
});

export default LoginOtp;
