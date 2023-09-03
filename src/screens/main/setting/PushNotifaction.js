import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import BackHandler from '../../../component/BackHandler';
import {icon} from '../../../utils/Image';
import {moderateScale, scale} from 'react-native-size-matters';
import Text16 from '../../../component/customText/Text16';
import Text14 from '../../../component/customText/Text14';
import {
  CheckIcon,
  ChevronRightIcon,
  TrashIcon,
} from 'react-native-heroicons/solid';
import Text12 from '../../../component/customText/Text12';
import {useNavigation} from '@react-navigation/native';

const PushNotifaction = () => {
  const {navigate} = useNavigation();
  const [active, setActiveTab] = useState(0);
  const [notifactionData, setNotifactionData] = useState([
    {
      img: icon.Eng,
      color: colors.theme,
      heading: 'Job Request',
      enabled: true,
    },
    {
      img: icon.Hindi,
      color: colors.yellow,
      heading: 'Cancellation',
      enabled: false,
    },
    {
      img: icon.Hindi,
      color: colors.yellow,
      heading: 'Trip Start/End',
      enabled: false,
    },
    {
      img: icon.Hindi,
      color: colors.yellow,
      heading: 'Bid Acceptance',
      enabled: false,
    },
    {
      img: icon.Hindi,
      color: colors.yellow,
      heading: 'New Driver Add/Delete',
      enabled: false,
    },
    {
      img: icon.Hindi,
      color: colors.yellow,
      heading: 'New Vehicle Add/Delete',
      enabled: false,
    },
    {
      img: icon.Hindi,
      color: colors.yellow,
      heading: 'Invoice Generation',
      enabled: false,
    },
  ]);

  const toggleSwitch = index => {
    const newData = [...notifactionData];
    newData[index].enabled = !newData[index].enabled;
    setNotifactionData(newData);
  };
  return (
    <View style={[CommonStyle.container, {backgroundColor: '#f6f6f6'}]}>
      <BackHandler name={'Push Notifications'} />

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
                onPress={() => setActiveTab(index)}
                style={[styles.cardContainer]}>
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
                  {/* <Image resizeMode='contain' source={icon.toggleBtn}  style={{
                                        transform: [
                                            { scaleX: true ? -1 : 1 }
                                        ],
                                        height:moderateScale(40),
                                        width:scale(60),
                                        // tintColor:colors.yellow
                                    }} /> */}

                  <Switch
                    trackColor={{false: '#767577', true: colors.yellow}}
                    thumbColor={item.enabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch(index)}
                    value={item.enabled}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      }
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

export default PushNotifaction;
