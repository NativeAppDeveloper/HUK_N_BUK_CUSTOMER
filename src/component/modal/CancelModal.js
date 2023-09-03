import {
  Image,
  StyleSheet,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {icon} from '../../utils/Image';
import Text14 from '../customText/Text14';
import Text18 from '../customText/Text18';
import Button from '../customButton/Button';
import {colors, fonts} from '../../utils/Styles';
const CancelModal = ({cancelStatus, setCancelStatus,setCancelRide}) => {
  const navigation = useNavigation();

  return (
    <Modal animationType="fade" statusBarTranslucent transparent visible={cancelStatus}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={styles.modalView}>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              paddingVertical: moderateVerticalScale(20),
            }}>
           
            <Text18
              fontFamily={fonts.bold}
              color={colors.theme}
              text={`Cancel Ride`}
              textAlign={'center'}
            />

            <Text14
              textAlign={'center'}
              fontFamily={fonts.regular}
              color={colors.gray}
              text={`Are you sure want to cancel this ride`}
            />
          </View>

          <View
            style={{
              borderTopWidth: 1,
              width: '100%',
              alignItems: 'center',
              paddingTop: moderateScale(10),
              borderColor: colors.borderC,
            }}>
                <TouchableOpacity    onPress={()=>{
            setCancelStatus(false);
            setCancelRide(false)
            navigation.navigate('Home')
        }}>

            <Text18 color={colors.red} text={'Cancel'} />
                </TouchableOpacity>
          </View>
          <Button
          onPress={()=>{
            setCancelStatus(false);
            setCancelRide(false)
            navigation.goBack()
        }}
            mt={15}
            backgroundColor={colors.theme}
            btnTextClr={colors.white}
            text={'Don’t Cancel'}
            width={'100%'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CancelModal;

const styles = StyleSheet.create({
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:moderateVerticalScale(200),
    // marginBottom: moderateVerticalScale(50),
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
