import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LottieView from 'lottie-react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors, fonts } from '../../utils/Styles';
import Text14 from '../customText/Text14';
import { XMarkIcon } from 'react-native-heroicons/solid';
import { useDispatch } from 'react-redux';
import { closeLoader, showLoader } from '../../utils/Helper';
import { DocumentsUpload } from '../../utils/S3Bucket';

const UploadModal = ({uploadModal,setUploadModal,setUrl,update,type}) => {

  const dispatch=useDispatch()
    const uploadFromCamera = async () => {
      // alert('hello')
      let options = {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
      };
  
      launchCamera(options, response => {
        if (response.didCancel) {
          // toast('User cancelled ', colorConstant.darkRed)
          console.log('User cancelled image picker');
        } else if (response.error) {
          // toast('Something went wrong', colorConstant.darkRed)
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
            
          console.log('response', response);
          getImageLink(response?.assets[0]);
          // setUploadModal(false)
        }
      });
    };

    // console.log(onj)
  
  
    const uploadFromGallery = async () => {
      let options = {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
      };
      launchImageLibrary(options, response => {
        console.log('response', response);
        getImageLink(response.assets[0])
        // setUploadModal(false)
      });
    };


    const getImageLink=async(data)=>{
      dispatch(showLoader)
      let reqData = {
        uri: data?.uri,
        type: data?.type,
        name: data?.fileName==undefined?data?.name:data?.fileName
    }

      try {
        let response = await DocumentsUpload(reqData)
        // setUrl(response?.postResponse?.location)
        update((pre)=>({
          ...pre,
          [type]:response?.postResponse?.location
        }))
        
        setUploadModal(false)
        dispatch(closeLoader)
        // console.log(response,'image link mily gye')
      } catch (error) {
        dispatch(closeLoader)
        console.log(error);
      }
    }


    
  
    return (
      <Modal animationType='slide' visible={uploadModal} transparent statusBarTranslucent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '90%',
              backgroundColor: colors.white,
              // height: moderateScale(180),
              borderRadius: 10,
              justifyContent:'center',
              alignItems:'center',
              paddingBottom:moderateScale(20),
              paddingTop:moderateScale(10)
            }}>
  
                <TouchableOpacity 
                onPress={()=>setUploadModal(false)}
                style={{alignSelf:'flex-end',marginRight:10}}>
                    <XMarkIcon size={moderateScale(25)} color={colors.theme}/>
                </TouchableOpacity>
              <LottieView height={moderateScale(100)} width={moderateScale(100)} source={require('../../assets/upload.json')} autoPlay loop />
              <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',marginTop:moderateScale(10)}}>
  
  
              
            <TouchableOpacity 
            onPress={()=>uploadFromGallery()}
            style={{width:'42%',backgroundColor:colors.yellow,paddingVertical:moderateScale(10),borderRadius:8,alignItems:'center'}}>
              <Text14 fontFamily={fonts.regular} mt={1} color={colors.theme} text={'Upload from gallery'} />
            </TouchableOpacity>
  
            <TouchableOpacity 
            onPress={()=>uploadFromCamera()}
            style={{borderWidth:1,borderColor:colors.yellow,width:'42%',borderRadius:8,justifyContent:'center',alignItems:'center'}}>
              <Text14 fontFamily={fonts.regular} mt={1} text={'Take a picture'} />
            </TouchableOpacity>
              
            </View>
          </View>
        </View>
      </Modal>
    );
  };

export default UploadModal