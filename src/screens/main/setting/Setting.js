import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import BackHandler from '../../../component/BackHandler';
import {icon} from '../../../utils/Image';
import {moderateScale, scale} from 'react-native-size-matters';
import Text16 from '../../../component/customText/Text16';
import Text14 from '../../../component/customText/Text14';
import {ChevronRightIcon, TrashIcon} from 'react-native-heroicons/solid';
import Text12 from '../../../component/customText/Text12';
import {useNavigation} from '@react-navigation/native';
import {deleteAccountServices} from '../../../services/Services';
import {useDispatch} from 'react-redux';
import ConfiramtionModal from '../../../component/modal/ConfiramtionModal';

const Setting = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [notifactionData, setNotifactionData] = useState([
    {
      img: icon.bell,
      color: colors.theme,
      heading: 'Payment Method',
      name: 'Payments',
    },
    {
      img: icon.bell,
      color: colors.yellow,
      heading: 'Push Notifications',
      name: 'PushNotifaction',
    },
    {
      img: icon.global,
      color: colors.green,
      heading: 'Language',
      name: 'Language',
    },
  ]);

  const deleteHandler = async () => {
    try {
      let response = await deleteAccountServices();
      dispatch({
        type: 'CHANGE_STACK',
        payload: 'ONBOARDING',
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={[CommonStyle.container, {backgroundColor: '#f6f6f6'}]}>
      <BackHandler name={'Setting'} />

      {
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: moderateScale(10),
          }}
          data={notifactionData}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => navigate(item.name)}
                style={styles.cardContainer}>
                <View
                  style={{height: moderateScale(20), width: moderateScale(20)}}>
                  <Image
                    resizeMode="contain"
                    style={{height: '100%', width: '100%'}}
                    source={item.img}
                  />
                </View>

                {
                  <View style={{paddingLeft: moderateScale(10)}}>
                    <Text14
                      lineHeight={moderateScale(13)}
                      text={item.heading}
                      fontFamily={fonts.medium}
                      color={colors.theme}
                    />
                  </View>
                }
                <View
                  style={{
                    position: 'absolute',
                    right: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  {index == 2 && (
                    <Text12 text={'English'} color={colors.gray} />
                  )}
                  <ChevronRightIcon color={colors.gray} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      }

      <TouchableOpacity
        onPress={() => deleteHandler()}
        style={styles.cardContainer2}>
        <View style={{height: moderateScale(20), width: moderateScale(20)}}>
          <TrashIcon color={colors.red} />
        </View>

        <View style={{paddingLeft: moderateScale(10)}}>
          <Text14
            lineHeight={moderateScale(13)}
            text={'Delete Account'}
            fontFamily={fonts.medium}
            color={colors.red}
          />
        </View>
      </TouchableOpacity>

      {/* <ConfiramtionModal/> */}
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    paddingVertical: moderateScale(16),
    paddingHorizontal: scale(10),
    borderColor: colors.placeholderColor,
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
    marginVertical: moderateScale(9),
    borderRadius: moderateScale(7),
  },
  cardContainer2: {
    flexDirection: 'row',
    paddingVertical: moderateScale(17),
    paddingHorizontal: scale(10),
    borderColor: colors.placeholderColor,
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
    marginVertical: moderateScale(9),
    borderRadius: moderateScale(7),
    position: 'absolute',
    bottom: moderateScale(20),
  },
});

export default Setting;
