import { View, Text, Modal, TouchableOpacity, Image, Linking } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import Text18 from '../customText/Text18'
import Text14 from '../customText/Text14'
import { colors, fonts } from '../../utils/Styles'
import { requestLocationPermission } from '../../utils/Permission'
import { request, PERMISSIONS, check } from 'react-native-permissions';

const CheckLocationStatus = () => {

    async function checkAndRequestLocationPermission() {
        try {
          const status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE); // For iOS
          // const status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION); // For Android
      
          if (status === 'granted') {
            console.log('Location permission already granted.');
            // You can now access the user's location here
          } else {
            const result = await request(
              Platform.select({
                ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
                android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
              })
            );
      
            if (result === 'granted') {
              console.log('Location permission granted.');
              // You can now access the user's location here
            } else {
              console.log('Location permission denied.');
              // Handle denied permission
              Linking.openSettings()
            }
          }
        } catch (error) {
          console.error('Error checking or requesting location permission:', error);
        }
      }
      
  return (
    <Modal>
    <View style={{flex: 1, alignItems: 'center',justifyContent:'space-between',paddingVertical:moderateScale(20)}}>
      <View>
        <View
          style={{height: moderateScale(300), width: moderateScale(300)}}>
          <Image
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
            source={require('../../assets/GPS.png')}
          />
        </View>

        <View style={{alignItems: 'center', width: '90%'}}>
          <Text18 text="Location permission not enable" />
          <Text14
            textAlign={'center'}
            lineHeight={moderateScale(20)}
            fontFamily={fonts.regular}
            text={
              'Sharing Location permission helps us improve your ride booking and pickup experience'
            }
          />
        </View>
      </View>

      <View>
        <TouchableOpacity
        onPress={()=>checkAndRequestLocationPermission()}
          style={{
            width: scale(320),
            backgroundColor: colors.yellow,
            paddingVertical: moderateScale(10),
            borderRadius: moderateScale(6),
            alignItems: 'center',
            elevation:3
          }}>
          <Text style={{fontFamily: fonts.medium, color: colors.black}}>
            Allow Permission
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
  )
}

export default CheckLocationStatus