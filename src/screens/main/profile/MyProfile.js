import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackHandler from '../../../component/BackHandler';
import {moderateScale, scale} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import Text14 from '../../../component/customText/Text14';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomDropDown from '../../../component/common/CustomDropDown';
import Button from '../../../component/customButton/Button';
import {icon} from '../../../utils/Image';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Text16 from '../../../component/customText/Text16';
import LottieView from 'lottie-react-native';

const MyProfile = () => {
  const [edit, setEdit] = useState(false);
  const [uploadModal,setUploadModal]=useState(false)
  const [url,setUrl]=useState('')
  const [profileData, setProfileData] = useState({
    firstName: 'Sachin',
    lastName: 'Kumar',
    gender: 'Male',
    dateOfBirth: '13-4-2001',
    mobileNumber: '+91 8178055121',
    email: 'ajit@gmail.com',
  });

  const handleChange = (field, value) => {
    setProfileData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };




  return (
    <View style={CommonStyle.container}>
      <BackHandler name={'My Profile'} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.conatiner}>
          {
            //#region image container
            <TouchableOpacity
              onPress={() => setUploadModal(true)}
              style={styles.imgConatiner}>
              <Image
                source={{
                  uri: 'https://nftcrypto.io/wp-content/uploads/2023/05/2023-05-18-17_57_18-The-Journey-of-an-NFT-Avatar-Word-Product-Activation-Failed.png',
                }}
                style={[CommonStyle.img, {borderRadius: 100}]}
              />
              <Image
                style={{
                  position: 'absolute',
                  zIndex: 999,
                  height: 30,
                  width: 30,
                  right: 0,
                  bottom: 0,
                }}
                source={icon.edit}
              />
            </TouchableOpacity>
            //#endregion
          }

          {
            //#region  User Details
            <View>
              <InputWithHeading
                onChangeText={val => handleChange('firstName', val)}
                value={profileData.firstName}
                edit={edit}
                heading={'First Name'}
              />

              <InputWithHeading
                onChangeText={val => handleChange('lastName', val)}
                value={profileData.lastName}
                edit={edit}
                heading={'Last Name'}
              />
              <InputWithHeading
                onChangeText={val => handleChange('mobileNumber', val)}
                value={profileData.mobileNumber}
                edit={edit}
                heading={'Mobile Number'}
              />

              <InputWithHeading
                onChangeText={val => handleChange('email', val)}
                value={profileData.email}
                edit={edit}
                heading={'Email'}
              />

              {edit ? (
                <View style={{marginTop: moderateScale(10)}}>
                  <Text14 color={colors.theme} text={'Gender'} />

                  <CustomDropDown
                    width={'100%'}
                    placeholder={'Select Category'}
                    dropDownData={[
                      {label: 'Male', value: 'male'},
                      {label: 'Female', value: 'female'},
                      {label: 'Other', value: 'other'},
                    ]}
                    labelField="label"
                    valueField="value"
                    value={'male'}
                    onChange={item => console.log(item)}
                  />
                </View>
              ) : (
                <InputWithHeading
                  edit={edit}
                  heading={'Gender'}
                  value={profileData.gender}
                />
              )}

              <InputWithHeading
                onChangeText={val => handleChange('dateOfBirth', val)}
                value={profileData.dateOfBirth}
                edit={edit}
                heading={'Date Of Birth'}
              />
            </View>
            //#endregion
          }
        </View>
      </KeyboardAwareScrollView>
      <View style={{marginVertical: moderateScale(20)}}>
        <Button
          onPress={() => setEdit(!edit)}
          text={edit ? 'Save' : 'Edit Profile'}
        />
      </View>
      <Upload 
      uploadModal={uploadModal} 
      setUploadModal={setUploadModal}
      setUrl={setUrl}
       />

    </View>
  );
};

const InputWithHeading = ({heading, edit, value, onChangeText}) => {
  return (
    <View style={{marginTop: moderateScale(10)}}>
      <Text14 color={colors.theme} text={heading} />
      <View
        style={{
          borderWidth: edit ? 1 : 0,
          paddingVertical:
            Platform.OS == 'ios' ? moderateScale(15) : moderateScale(2),
          borderColor: colors.placeholderColor,
          borderRadius: 8,
          marginTop: moderateScale(12),
          paddingHorizontal: edit ? scale(5) : 0,
        }}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          editable={edit}
          placeholder={heading}
          style={{fontFamily: fonts.regular, color: colors.gray}}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    width: '90%',
    alignSelf: 'center',
  },
  imgConatiner: {
    height: moderateScale(90),
    width: moderateScale(90),
    borderWidth: 2,
    borderColor: colors.theme,
    borderRadius: moderateScale(45),
    // overflow: "hidden",
    alignSelf: 'center',
    marginVertical: moderateScale(10),
  },
});
export default MyProfile;

const Upload = ({uploadModal,setUploadModal,setUrl}) => {
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
        setUploadModal(false)
      }
    });
  };


  const uploadFromGallery = async () => {
    let options = {
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhotos: true,
    };
    launchImageLibrary(options, response => {
      console.log('response', response);
      setUploadModal(false)
    });
  };

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

            
            <LottieView height={moderateScale(100)} width={moderateScale(100)} source={require('../../../assets/upload.json')} autoPlay loop />
            <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%'}}>


            
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
