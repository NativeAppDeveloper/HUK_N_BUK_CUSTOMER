import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {CommonStyle, colors} from '../../../utils/Styles';
import {icon, images} from '../../../utils/Image';
import Text18 from '../../../component/customText/Text18';
import Text12 from '../../../component/customText/Text12';
import {fonts} from '../../../utils/Styles';
import Text14 from '../../../component/customText/Text14';
import {MinusIcon, PlusIcon} from 'react-native-heroicons/solid';
import Text24 from '../../../component/customText/Text24';
import Button from '../../../component/customButton/Button';
import {useNavigation} from '@react-navigation/core';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const Depart_Arrival = () => {
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();
  const [select, setSelectd] = useState(null);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);
  const [arival,setArrival]=useState(false)

  const startTimer = () => {
    if (hours === 0 && minutes === 0) {
      return;
    }

    setIsRunning(true);
    const totalSeconds = hours * 3600 + minutes * 60;

    const interval = setInterval(() => {
      if (totalSeconds > 0) {
        const updatedSeconds = totalSeconds - 1;
        const updatedHours = Math.floor(updatedSeconds / 3600);
        const updatedMinutes = Math.floor((updatedSeconds % 3600) / 60);

        setHours(updatedHours);
        setMinutes(updatedMinutes);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1000);

    setTimerInterval(interval);
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
  };

  return (
    <View>
      {Platform.OS == 'android' && <SafeAreaView />}
      <View
        style={{
          ...Platform.select({
            ios: {
              paddingTop: iphone8 ? moderateScale(10) : moderateScale(40),
            },
          }),
        }}>
        <View style={styles.header}>
          {
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: moderateScale(15),
                zIndex: 999,
              }}
              onPress={() =>{
                if(!arival){
                  navigation.goBack()
                }
                else{
                  setArrival(false)
                }
              }}>
              <View
                style={{
                  height: moderateVerticalScale(30),
                  width: moderateVerticalScale(30),
                }}>
                <Image
                  style={[CommonStyle.img, {tintColor: colors.theme}]}
                  source={icon.backBtn}
                />
              </View>
            </TouchableOpacity>
          }

          <View style={{width: '100%', alignItems: 'center'}}>
            <Text18 color={colors.theme} text={arival?'Arrival':'Depart'} />
          </View>
        </View>
        <View style={{alignSelf: 'center', width: '100%'}}>
          {
            //#region Name Components
            <View
              style={{
                width: '100%',
                marginTop: moderateScale(20),
                paddingHorizontal: moderateScale(20),
              }}>
              <Calendar
                style={{
                  borderColor: 'gray',
                  height: moderateScale(330),
                  borderRadius: moderateScale(10),
                }}
                onDayPress={day => {
                  setSelected(day.dateString);
                }}
                markedDates={{
                  [selected]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedDotColor: 'orange',
                  },
                }}
              />
            </View>
            //#endregion
          }
        </View>
      </View>

      <View>

        <View
          style={{
            alignSelf:'center',
            marginTop:moderateScale(30),
            // backgroundColor:colors.white,
            // elevation:5,
            borderRadius:8,
            height:moderateScale(170),
            width:moderateScale(300)
          }}>
            <Image resizeMode='cover' style={CommonStyle.img} source={require('../../../assets/icon/timerClock.png')}/>
          </View>

      </View>


      <View
        style={{
          position: 'relative',
          width: '100%',
          bottom: moderateVerticalScale(0),
        }}>
        <Button
          onPress={() => {
            if(arival){
              navigation.navigate('ConfirmRide')
            }
            else{
              setArrival(true)
            }
          }}
          width={'90%'}
          mt={moderateVerticalScale(10)}
          text={'Next'}
        />
      </View>
    </View>
  );
};

export default Depart_Arrival;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(26),
    // backgroundColor: colors.white,
    paddingHorizontal: scale(10),
    justifyContent: 'center',
  },
});
