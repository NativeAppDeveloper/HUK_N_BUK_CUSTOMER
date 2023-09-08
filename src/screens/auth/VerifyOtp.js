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
import auth from '@react-native-firebase/auth';

const VerifyOtp = props => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const btnHandler = () => {
    dispatch({
      type: 'CHANGE_STACK',
      payload: 'MAIN',
    });
  };

  // let {route} = props;
  let paramData=props?.route.params?.flow
  let value=props?.route.params?.value
  const isFocused = useIsFocused();
  const [checkNum, setCheckNum] = useState(null);


  console.log(value)

  // define all state here
  const [openFlag, setOpenFlag] = useState(false);
  const [matchOtp, setMatchOtp] = useState('');
  
  const [enterOtp, setEnterOtp] = useState('');
  const [seconds, setSeconds] = useState(59);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const otpHandler=()=>{
    if(paramData=='email'){
      navigation.navigate('Step5')
    }
    else{
      navigation.navigate('RegistrationComplete')
    }
  }


  const checkPhoneEmail = () => {
    console.log(paramData);
    if (isNaN(paramData)) {
      setCheckNum(true);
    } else {
      setCheckNum(false);
    }
  };


  console.log(checkNum)



// get otp form firebase
const getOtp1 = async () => {
  let phoneNumber=`+91${paramData}`
  console.log('yelllll')
  try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
      console.log("confirmation***********", confirmation);
      setVerificationCode(confirmation?.verificationId)
  } catch (error) {

      console.log('Error sending verification code: ', error);
  }
}

// verify otp form firebase
const handleOTP = async () => {

  // dispatch({
  //   type: 'CHANGE_STACK',
  //   payload: 'MAIN',
  // })


  if(code==''){
    errorTost('Please enter otp')
    return
  }
  if(code.length<6){
    errorTost('Please enter valid')
    return
  }

  try {
      const cred = auth.PhoneAuthProvider.credential(verificationCode, code)
      let userData = await auth().signInWithCredential(cred);
      dispatch({
        type: 'CHANGE_STACK',
        payload: 'MAIN',
      })
      console.log("******&&&check new uid", userData);
      // handleEmailotp()
  }
  catch (error) {
      if (error.code == 'auth/invalid-verification-code') {
          errorTost('Otp does not match');
      } else {
        
          toastShow(error.code)
      }
  }

}


useEffect(() => {
  checkPhoneEmail();
}, []);


useEffect(() => {
  if(checkNum){
    console.log('123')
    // getOtp1()
  }
}, [checkNum])


  useEffect(() => {
    checkPhoneEmail()
  }, [])
  

  // timer start
  useEffect(() => {
    if (isFocused) {
      let interval = null;
      if (isTimerRunning) {
        interval = setInterval(() => {
          setSeconds(seconds => {
            if (seconds === 0) {
              clearInterval(interval);
              setIsTimerRunning(false);
              return 30;
            }
            return seconds - 1;
          });
        }, 1000);
      }
      return () => clearInterval(interval);
    }
  }, [isTimerRunning, isFocused]);

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
            <TouchableOpacity onPress={()=> navigation.goBack()}>
              <Text14
                textAlign={'center'}
                mt={25}
                color={colors.gray}
                text={!checkNum?'Change my email id':'Change my mobile number'}
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

export default VerifyOtp;