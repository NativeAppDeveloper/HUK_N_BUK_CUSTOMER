import {View, Text, Modal} from 'react-native';
import React from 'react';
import {colors} from '../../utils/Styles';
import {moderateScale} from 'react-native-size-matters';

const ConfiramtionModal = () => {
  return (
    <Modal transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            height: moderateScale(200),
            width: '90%',
            borderRadius: 10,
          }}></View>
      </View>
    </Modal>
  );
};

export default ConfiramtionModal;
