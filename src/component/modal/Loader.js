import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import { colors } from '../../utils/Styles';

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
            height: moderateScale(50),
            width: moderateScale(50),
            backgroundColor: colors.white,
            borderRadius: 8,
            justifyContent:'center',
            alignItems:'center'
          }}>
          <ActivityIndicator size={moderateScale(30)} color={colors.yellow} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
