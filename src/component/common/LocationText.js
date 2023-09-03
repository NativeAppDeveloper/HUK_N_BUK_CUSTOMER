import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BackHandler from '../BackHandler'
import { colors } from '../../utils/Styles'
import { useNavigation } from '@react-navigation/native'
import { moderateScale, scale } from 'react-native-size-matters'
import Text12 from '../customText/Text12'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

const LocationText = () => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity 
    onPress={()=>navigation.goBack()}
    activeOpacity={0.9}
    style={{ 
        backgroundColor: colors.white, 
        position: 'absolute',
        top:moderateScale(80),
        elevation:10,
        paddingVertical:moderateScale(12),
        left:moderateScale(15),
        paddingHorizontal:scale(10),
        flexDirection:'row',
        borderRadius:moderateScale(10)
     }}
    >
        <Text12 color={colors.theme} text={'Surat Railway Station'} />
        <ChevronRightIcon size={moderateScale(20)} color={colors.theme}/>
    </TouchableOpacity>
  )
}

export default LocationText