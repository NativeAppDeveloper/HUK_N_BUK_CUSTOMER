import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { images } from '../../../utils/Image'
import Button from '../../../component/customButton/Button'
import { colors } from '../../../utils/Styles'
import { moderateScale } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'

const RegistrationComplete = () => {
  const dispatch=useDispatch()
  return (
    <ImageBackground source={images.registrationComplete} style={{flex:1,justifyContent:"flex-end",paddingBottom:moderateScale(30)}}>
        <Button onPress={()=>{
          dispatch({
            type:'CHANGE_STACK',
            payload:'MAIN'
          })
        }}  backgroundColor={colors.white} text={'Go to Home'}/>
      </ImageBackground>
  )
}

export default RegistrationComplete