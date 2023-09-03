import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackHandler from '../../../component/BackHandler'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import { moderateScale } from 'react-native-size-matters'
import { width } from '../../../utils/Helper'
import { icon } from '../../../utils/Image'
import Text14 from '../../../component/customText/Text14'
import Text12 from '../../../component/customText/Text12'
import Text16 from '../../../component/customText/Text16'
import { scale } from 'react-native-size-matters'
import { ChevronRightIcon } from 'react-native-heroicons/solid'
import Button from '../../../component/customButton/Button'
import { useNavigation } from '@react-navigation/native'

const LuggageAllowance = () => {
  const [slectedIndex,setSetlectedIndex]=useState(0)
  const navigation = useNavigation();

  const data = [
    {
        carName: 'Hatchback',
        desc: 'Comfy,Economical cars',
        price: '₹300-400',
        icon:icon.car1
    },
    {
        carName: 'Sedan',
        desc: 'Spacious Sedan ,Top Drivers',
        price: '₹400-600',
        icon:icon.car2

    },
    {
        carName: 'SUV',
        desc: 'Luxury Compfort,more Space',
        price: '₹400-600',
        icon:icon.car3

    },
];
  return (
    <View style={{backgroundColor:colors.white,flex:1}}>
      <BackHandler name={'Luggage Allowance'}/>
      <View style={{flex:1,paddingTop:moderateScale(30)}}>
        <View style={{height:moderateScale(300),width:width,borderBottomWidth:1,borderColor:colors.borderC}}>
        <Image resizeMode='contain' style={CommonStyle.img} source={require('../../../assets/icon/saman.png')}/>
        </View>


        {
          // #region lugage allowed
          <View style={{ paddingHorizontal: moderateScale(15), marginTop: 10 }}>
          <Text16 text={'Luggage Allowed'} />

          {
              //#region car map
              <>
                  {data.map((ele, ind) => {
                      return (
                          <View
                              key={ind}
                              style={{
                                  marginVertical: 1,
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginTop: moderateScale(15),
                              }}>
                              <View
                                  style={{
                                      height: moderateScale(55),
                                      borderWidth: 0.5,
                                      width: moderateScale(55),
                                      borderColor: colors.placeholderColor,
                                      borderRadius: 8,
                                      padding:3
                                  }}>
                                  <Image
                                      resizeMode="contain"
                                      style={CommonStyle.img}
                                      source={ele.icon}
                                  />
                              </View>

                              <TouchableOpacity
                              onPress={()=>setSetlectedIndex(ind)}
                                  style={{
                                      // borderWidth: 1,
                                      width: '80%',
                                      borderRadius: 8,
                                      paddingHorizontal: scale(10),
                                      // borderColor:slectedIndex==ind?colors.theme:colors.gray,
                                      // backgroundColor:slectedIndex==ind?'#e6ebfa':colors.white
                                  }}>
                                  <View style={{}}>
                                      <View
                                          style={{
                                              flexDirection: 'row',
                                              justifyContent: 'space-between',
                                          }}>
                                          <Text14
                                              fontFamily={fonts.semibold}
                                              text={ele.carName}
                                          />

                                          <Text14
                                              fontFamily={fonts.semibold}
                                              text={'₹300-400'}
                                          />
                                      </View>

                                      <Text12
                                          fontFamily={fonts.extraLight}
                                          color={colors.placeholderColor}
                                          text={ele.desc}
                                      />
                                  </View>
                              </TouchableOpacity>
                          </View>
                      );
                  })}

            <Button onPress={()=>{
              navigation.navigate('BookRide')
            }} width={'100%'} mt={10} text={'Book Outstation Ride'}/>
            <View style={{marginBottom:30}}></View>
              </>
              //#endregion
          }
      </View>
          //#endregion
          
        }
      </View>
    </View>
  )
}

export default LuggageAllowance