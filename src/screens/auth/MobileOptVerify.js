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

import {sucessTost} from '../../utils/Helper';
import {
  getOtpFromMobileServices,
  signupServices,
  verifyMobileOtpServices,
} from '../../services/Services';
import { signUpDetails } from '../../utils/localVariable';
import { setData } from '../../services/AsyncServices';

const MobileOptVerify = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const btnHandler = () => {
    dispatch({
      type: 'CHANGE_STACK',
      payload: 'MAIN',
    });
  };

  // let {route} = props;
  let paramData = props?.route.params?.flow;
  let value = props?.route.params?.value;
  const isFocused = useIsFocused();
  const [checkNum, setCheckNum] = useState(false);

  console.log(value);

  // define all state here
  const [openFlag, setOpenFlag] = useState(false);
  const [matchOtp, setMatchOtp] = useState('');

  const [enterOtp, setEnterOtp] = useState('');
  const [seconds, setSeconds] = useState(59);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // const otpHandler = () => {
  //   navigation.navigate('RegistrationComplete');
  // };

  // const checkPhoneEmail = () => {
  //   if (isNaN(value)) {
  //     setCheckNum(true);
  //   } else {
  //     setCheckNum(false);
  //   }
  // };

  const getOtpFunction = async () => {
    let objToSend = {
      phoneNumber: value,
    };
    try {
      let response = await getOtpFromMobileServices(objToSend);
      console.log(response.data, 'sucess');
      sucessTost('123456');
    } catch (error) {
      console.log(error, 'errror');
    }
  };

  const otpHandler = async () => {
    let objToSend = {
      email: value,
      otp: 123456,
    };
    try {
      let response = await verifyMobileOtpServices(objToSend);
      console.log(response.data);
      signupHandler()
    } catch (error) {
      console.log(error.response.data);
    }
  };


  console.log(signUpDetails,'signUpDetails');

  const signupHandler=async()=>{
    let objToSend={
      firstName:signUpDetails.step1?.firstName,
      lastName:signUpDetails?.step1?.lastName,
      dob:signUpDetails?.dob,
      gender:signUpDetails?.gender,
      email:signUpDetails?.email,
      phoneNumber:value
    }
    try {
      let response = await signupServices(objToSend)
      console.log(response.data)
      await setData('token',response.data.token)
      navigation.navigate('RegistrationComplete');
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isFocused) {
      getOtpFunction();
    }
  }, [isFocused]);

  // useEffect(() => {
  //   checkPhoneEmail();
  // }, []);

  useEffect(() => {
    if (checkNum) {
      console.log('123');
      // getOtp1()
    }
  }, [checkNum]);

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
          <Text14 text={value} />

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
              setEnterOtp(code);
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <Button
            onPress={() => otpHandler()}
            width={'100%'}
            mt={moderateVerticalScale(20)}
            text={'Verify'}
          />
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text14
                textAlign={'center'}
                mt={25}
                color={colors.gray}
                text={'Change my mobile number'}
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

export default MobileOptVerify;
