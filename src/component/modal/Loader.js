import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import { colors } from '../../utils/Styles';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <Modal transparent statusBarTranslucent>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: moderateScale(60),
            width: moderateScale(60),
            backgroundColor: colors.white,
            borderRadius: 8,
            justifyContent:'center',
            alignItems:'center',
            overflow:'hidden'
          }}>
             <LottieView
             speed={2}
            source={require("../../assets/Loder.json")}
            style={{
              width: moderateScale(90),
              height: moderateScale(90),
            }}
            autoPlay={true}
          />
          {/* <ActivityIndicator size={moderateScale(30)} color={colors.yellow} /> */}
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
