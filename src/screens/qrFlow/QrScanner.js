import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';

const QrScanner = () => {
  const navigation=useNavigation()
  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occurred', err)
    );
  };


 const qrHandler=()=>{
  setTimeout(() => {
    navigation.navigate('DriverDetails')
  }, 2000);
 }

 useEffect(() => {
  qrHandler()
 }, [])
 
  return (
    // <QRCodeScanner
    // cameraProps={{ captureAudio: false }}
    //   onRead={onSuccess}
    //   flashMode={RNCamera.Constants.FlashMode.torch}
    //   topContent={
    //     <Text style={styles.centerText}>
    //       Go to{' '}
    //       <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
    //       your computer and scan the QR code.
    //     </Text>
    //   }
    //   bottomContent={
    //     <TouchableOpacity style={styles.buttonTouchable}>
    //       <Text style={styles.buttonText}>OK. Got it!</Text>
    //     </TouchableOpacity>
    //   }
    // />

    <ImageBackground style={{flex:1}} source={require('../../assets/Login.png')}>
    
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QrScanner;
