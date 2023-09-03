import {View, Text, StyleSheet, FlatList, Image, ImageBackground, Modal} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import BackHandler from '../../../component/BackHandler';
import {icon} from '../../../utils/Image';
import {moderateScale, scale} from 'react-native-size-matters';
import Text16 from '../../../component/customText/Text16';
import Text14 from '../../../component/customText/Text14';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import Text24 from '../../../component/customText/Text24';
import Input from '../../../component/customInput/Input';
import Button from '../../../component/customButton/Button';
import RazorpayCheckout from 'react-native-razorpay';
import { height } from '../../../utils/Helper';
import { useNavigation } from '@react-navigation/native';

const AddMoney = () => {
  const [notifactionData, setNotifactionData] = useState([
    {
      img: icon.Shape1,
      color: colors.theme,
      heading: 'What is Huk n Buk?',
      desc: 'Booking #1234 has been success...',
    },
    {
      img: icon.promo,
      color: colors.yellow,
      heading: 'How does Huk n Buk work?',
      desc: 'Invite friends - Get 3 coupons each!',
    },
    {
      img: icon.Shape2,
      color: colors.green,
      heading: `What type of photography services are available on the app?
                `,
      desc: 'Booking #1234 has been success...',
    },
    {
      img: icon.Shape1,
      color: colors.orange,
      heading: `How do I book a photographer on the app?
                `,
      desc: 'Booking #1234 has been success...',
    },
    {
      img: icon.Shape1,
      color: colors.blue,
      heading: `How do I book a photographer on the app?
                `,
      desc: 'Booking #1234 has been success...',
    },
  ]);

  const [sucess,setSucess]=useState(false)

  const handlePayment = data => {
    const options = {
      description: 'Sample Description',
      image: 'https://your-image-url.png',
      currency: 'INR',
      key: 'rzp_test_krFA0ciPkS23g0', // Replace with your actual Razorpay key
      amount: '1000', // Amount in paise (e.g., 10000 paise = ₹100)
      name: 'Sachin',
      prefill: {
        email: 'sac123sh@gmail.com',
        contact: '8178055121',
        name: 'Sachin',
      },
      theme: {color: colors.theme}, // Customize the theme color
    };

    RazorpayCheckout.open(options)
      .then(response => {
        // Payment success callback
        console.log(response);
        setSucess(true)
      })
      .catch(error => {
        // Payment failure callback
        console.log(error);
      });
  };

  return (
    <View style={[CommonStyle.container, {backgroundColor: '#f6f6f6'}]}>
      <BackHandler name={'Add Money'} />

      {
        //#region content container
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: moderateScale(10),
          }}>
          <Text16
            text={'Total Balance'}
            fontFamily={fonts.regular}
            color={colors.theme}
          />
          <Text24
            text={'₹ 124.57'}
            color={colors.theme}
            fontFamily={fonts.bold}
          />
          <View
            style={{
              borderWidth: 1,
              marginTop: moderateScale(20),
              borderRadius: 8,
              borderColor: colors.placeholderColor,
            }}>
            <Input keyboardType={2} placeHolder={'Enter Amount'} />
          </View>
        </View>
        //#endregion
      }

      <View
        style={{
          backgroundColor: colors.theme,
          position: 'absolute',
          width: '100%',
          bottom: 0,
          paddingVertical: moderateScale(20),
        }}>
        <Button text={'Add Money'} onPress={handlePayment} />
      </View>
      <SucessModal sucess={sucess} setSucess={setSucess}/>
    </View>
  );
};

export default AddMoney;


const SucessModal=({sucess,setSucess})=>{
  const navigation=useNavigation()
  return(
    <Modal
    visible={sucess}
    >
      <ImageBackground source={require('../../../assets/pay.png')}  style={{flex:1,justifyContent:'flex-end',height:height,paddingBottom:moderateScale(20)}}>
        <Button onPress={()=>{
          setSucess(false)
          navigation.navigate('Wallet')
        }} backgroundColor={colors.white}  text={'Okay'}/>
      </ImageBackground>
      </Modal>
  )
}
