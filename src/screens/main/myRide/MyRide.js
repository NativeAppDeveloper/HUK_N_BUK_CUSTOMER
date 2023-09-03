import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import BackHandler from '../../../component/BackHandler';
import {icon} from '../../../utils/Image';
import {moderateScale, scale} from 'react-native-size-matters';
import Text16 from '../../../component/customText/Text16';
import Text14 from '../../../component/customText/Text14';
import { useNavigation } from '@react-navigation/core';
import { rideType } from '../../../utils/localVariable';

const MyRide = () => {
    const {navigate}=useNavigation()
  const [notifactionData, setNotifactionData] = useState([
    {
      img: icon.img2,
      color: colors.theme,
      heading: 'Intercity',
      desc: 'Booking #1234 has been success...',
    },
    {
      img: icon.img2,
      color: colors.yellow,
      heading: 'Outstation',
      desc: 'Invite friends - Get 3 coupons each!',
    },
    {
      img: icon.img1,
      color: colors.green,
      heading: 'Local Rental',
      desc: 'Booking #1234 has been success...',
    },
  ]);
  return (
    <View style={[CommonStyle.container,{backgroundColor:'#f6f6f6'}]}>
      <StatusBar backgroundColor={colors.theme}/>
      <BackHandler  name={'My Rides'} />

      {
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          data={notifactionData}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
              onPress={()=>{
                rideType.type=item.heading
                navigate('RideType',{rideType:item.heading})
              }}
                style={styles.card}>
                <View
                  style={{
                    height: moderateScale(45),
                    width: 50,
                    backgroundColor: '#fdf9f9',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{height: '100%', width: '100%'}}
                    source={item.img}
                  />
                </View>

                <View style={{paddingLeft: moderateScale(10)}}>
                  <Text14
                    lineHeight={moderateScale(13)}
                    text={item.heading}
                    fontFamily={fonts.medium}
                    color={colors.black}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      }
    </View>
  );
};


const styles = StyleSheet.create({
    card:{
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingVertical: moderateScale(10),
        paddingHorizontal: scale(10),
        borderColor: colors.placeholderColor,
        alignItems: 'center',
        backgroundColor:colors.white,
        elevation:5,
        marginTop:moderateScale(15),
        width:'90%',
        alignSelf:"center",
        borderRadius:moderateScale(6),
        marginBottom:moderateScale(8)
      }
})
export default MyRide;
