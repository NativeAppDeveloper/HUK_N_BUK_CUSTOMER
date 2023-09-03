import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils/Styles'
import { moderateScale, scale } from 'react-native-size-matters'

export default function Input({
  placeHolder,
  mt,
  onChangeText,
  keyboardType,
  fontSize
  
}) {
  return (
    <View style={{
      width: '100%',
      backgroundColor: colors.white,
      paddingHorizontal: scale(10),
      borderRadius: moderateScale(8),
      marginTop:mt?mt:0,
      ...Platform.select({
        ios:{
        paddingVertical:moderateScale(14)
        }
      }),
      // paddingVertical:moderateScale(5),
      borderWidth:1,
      borderColor:colors.borderC
      // paddingVertical:moderateScale()

      
      

    }}>
      <TextInput 
      keyboardType={keyboardType?'number-pad':'default'}
      onChangeText={onChangeText}
      style={{fontFamily:fonts.medium,color:colors.black,fontSize:fontSize?fontSize:14}} placeholderTextColor={colors.placeholderColor} placeholder={placeHolder} />
    </View>
  )
}

const styles = StyleSheet.create({})