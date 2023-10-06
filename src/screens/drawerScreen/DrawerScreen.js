import {
  View,
  Text,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {images} from '../../utils/Image';
import {ChevronRightIcon, XMarkIcon} from 'react-native-heroicons/solid';
import {CommonStyle, colors, fonts} from '../../utils/Styles';
import {moderateScale, scale} from 'react-native-size-matters';
import Text14 from '../../component/customText/Text14';
import Text18 from '../../component/customText/Text18';
import {useNavigation} from '@react-navigation/native';
import {height} from '../../utils/Helper';
import {useDispatch} from 'react-redux';
import {actionType} from '../../redux/actionType';

const DrawerScreen = props => {
  // const navigation=useNavigation()
  const dispatch = useDispatch();
  const {width, height} = useWindowDimensions('screen');
  const drawerData = {
    first: [
      {
        name: 'MyProfile',
        title: 'My Profile',
      },
      {
        name: 'Notification',
        title: 'Notification',
      },
      {
        name: 'MyRide',
        title: 'My Rides',
      },
      {
        name: 'Wallet',
        title: 'Wallet',
      },
    ],
    second: [
      {
        name: 'Setting',
        title: 'Settings',
      },
      {
        name: 'HelpAndSupport',
        title: 'Help & Support',
      },
      {
        name: 'AboutApp',
        title: 'Refund Policy',
      },
    ],

    third: [
      {
        name: 'AboutApp',
        title: 'About',
      },
      {
        name: 'AboutApp',
        title: 'Term & Conditions',
      },
      {
        name: 'AboutApp',
        title: 'Privacy Policy',
      },
      {
        name: 'Faq',
        title: 'FAQ’s',
      },
    ],
  };

  const navigationHandler = (name, title) => {
    props.navigation.navigate(name, {screen: title});
  };

  const logoutHandler = () => {
    dispatch({
      type: actionType.authInitial,
      payload: false,
    });
    setTimeout(() => {
      dispatch({
        type: 'CHANGE_STACK',
        payload: 'AUTH',
      });
    }, 100);
  };
  return (
    <ImageBackground
      resizeMode="stretch"
      source={images.account}
      style={[styles.container, {width: width, height: height}]}>
      <DrawerContentScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cancelView}>
          <View style={styles.cancelBtn}>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <XMarkIcon size={moderateScale(40)} color={colors.theme} />
            </TouchableOpacity>
          </View>

          {
            //#region  screen List
            <>
              {Object.keys(drawerData ?? {}).length > 0 &&
                Object.keys(drawerData ?? {}).map((item, ind) => {
                  return (
                    <View key={ind} style={styles.cardContainer}>
                      {ind == 0 && (
                        <View style={styles.imageName}>
                          <View style={styles.imageNameInner}>
                            <Image
                              style={[CommonStyle.img]}
                              source={images.registrationComplete}
                            />
                          </View>
                          <Text18 color={colors.theme} text={'  Sachin'} />
                        </View>
                      )}
                      {drawerData[item].map((data, index) => {
                        return (
                          <TouchableOpacity
                            onPress={() =>
                              navigationHandler(data.name, data.title)
                            }
                            style={{
                              borderBottomWidth:
                                index === drawerData[item].length - 1 ? 0 : 0.5,
                              padding: moderateScale(10),
                              borderColor: colors.placeholderColor,
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                            key={index}>
                            <Text14
                              color={colors.theme}
                              text={data.title}
                              fontFamily={fonts.regular}
                            />
                            <ChevronRightIcon
                              color={colors.placeholderColor}
                              size={moderateScale(20)}
                            />
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  );
                })}
            </>

            //#endregion
          }
        </View>

        <View>
          <TouchableOpacity
            onPress={() =>logoutHandler()}
            style={{
              borderTopWidth: 2,
              paddingTop: 10,
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
              borderColor: colors.borderC,
              marginTop: moderateScale(10),
              marginBottom: moderateScale(40),
            }}>
            <Text14 color={colors.theme} text={'Logout'} />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#efefed', height: height},
  cancelView: {width: '90%', alignSelf: 'center', flex: 1},
  cancelBtn: {
    alignItems: 'flex-end',
    marginTop: Platform.OS == 'ios' ? moderateScale(5) : moderateScale(10),
  },
  cardContainer: {
    backgroundColor: colors.white,
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  imageName: {
    padding: moderateScale(1),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingVertical: moderateScale(10),
    paddingHorizontal: scale(10),
    borderColor: colors.placeholderColor,
  },
  imageNameInner: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: moderateScale(60),
    overflow: 'hidden',
  },
});

export default DrawerScreen;
