import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Text24 from '../../../component/customText/Text24';
import Text14 from '../../../component/customText/Text14';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import Input from '../../../component/customInput/Input';
import Button from '../../../component/customButton/Button';
import {icon} from '../../../utils/Image';
import SignupSeteps from '../../../component/common/SignupSeteps';
import {CalendarDaysIcon, CheckIcon} from 'react-native-heroicons/solid';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
import {errorTost} from '../../../utils/Helper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Step3 = () => {
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();
  const [select, setSelectd] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    let data= new Date(date)
    
    let vals=`${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}`
    console.log(vals,'9090090')
    setSelected(vals)
    // console.warn('A date has been picked: ', data.getFullYear(),data.getMonth()+1,data.getDate());
    setTimeout(() => {
      hideDatePicker();
      
    }, 10);
  };

  console.log(selected, '-0-0-0-');

  const nextHandler = () => {
    if (selected == '') {
      errorTost('Please select date of birth');
      return;
    }
    navigation.navigate('Step4');
  };
  return (
    <SafeAreaView>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {
          //#region header
          <SignupSeteps step={'Step 3/5'} />
          //#endregion
        }

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        {
          //#region  headet text
          <View style={{marginTop: moderateVerticalScale(20)}}>
            <Text24 text={'Date of Birth'} />
            <Text14
              fontFamily={fonts.regular}
              color={colors.gray}
              text={`Please provide your date of birth`}
            />
          </View>
          //#endregion
        }

        <View style={{alignSelf: 'center', width: '100%'}}>
          {
            false && (
              //#region Name Components
              <View style={{width: '100%', marginTop: moderateScale(20)}}>
                <Calendar
                  // minDate={new Date()}
                  maxDate={new Date('2012-05-18')} // Adjust this to 18 years ago
                  style={{
                    borderColor: 'gray',
                    height: moderateScale(330),
                    borderRadius: moderateScale(10),
                  }}
                  onDayPress={day => {
                    setSelected(day.dateString);
                  }}
                  enableSwipeMonths={true}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      disableTouchEvent: true,
                      selectedDotColor: 'orange',
                    },
                  }}
                  theme={{
                    backgroundColor: colors.white,
                    calendarBackground: colors.white,
                    textSectionTitleColor: colors.theme,
                    selectedDayBackgroundColor: colors.theme,
                    selectedDayTextColor: colors.white,
                    todayTextColor: colors.theme,
                    dayTextColor: colors.theme,
                    arrowColor: colors.theme,
                    // textDisabledColor: '#d9e
                  }}
                />
              </View>
            )
            //#endregion
          }

          <View>

            <TouchableOpacity
            onPress={showDatePicker}
              style={{
                backgroundColor: colors.white,
                paddingVertical: moderateScale(14),
                borderRadius: 8,
                paddingHorizontal: scale(10),
                flexDirection:'row',
                alignItems:"center",
                justifyContent:'space-between',
                marginTop:moderateScale(20)
              }}>
              <Text14 text={selected==''?'Please Select Date Of Birth':selected} />
              <CalendarDaysIcon color={colors.gray} size={moderateScale(20)} />
            </TouchableOpacity>

            {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
          </View>

          {
            //#region  Next Button
            <View>
              <Button
                onPress={() => nextHandler()}
                width={'100%'}
                mt={moderateVerticalScale(20)}
                text={'Next'}
              />
            </View>
            //#region
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Step3;
