import {View, Text, FlatList, Modal, TouchableOpacity, Image, TouchableWithoutFeedback} from 'react-native';
import React, { useState } from 'react';
import BackHandler from '../../../component/BackHandler';
import {moderateScale, scale} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import Text16 from '../../../component/customText/Text16';
import Text24 from '../../../component/customText/Text24';
import Input from '../../../component/customInput/Input';
import Text12 from '../../../component/customText/Text12';
import Text18 from '../../../component/customText/Text18';
import {icon} from '../../../utils/Image';
import Button from '../../../component/customButton/Button';
import Text14 from '../../../component/customText/Text14';
import Text20 from '../../../component/customText/Text20';
import {
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text22 from '../../../component/customText/Text22';
import {useNavigation} from '@react-navigation/native';

const Wallet = () => {
  const {navigate} = useNavigation();
  const [transactionInfo,setTransactionInfo]=useState(false)
  const dummyData = [
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: true,
    },
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: false,
    },
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: true,
    },
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: false,
    },
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: true,
    },
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: false,
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
      onPress={()=>setTransactionInfo(true)}
        style={{
          borderBottomWidth: index !== dummyData.length - 1 ? 0.5 : 0,
          paddingVertical: moderateScale(10),
          paddingHorizontal: scale(15),
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderColor: colors.placeholderColor,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: moderateScale(25),
              width: moderateScale(25),
              borderRadius: 200,
              backgroundColor:'#f6f6f6'
            }}>
            <Image style={CommonStyle.img} source={index%2==0?icon.send_icon:icon.request_icon}/>
          </View>
          <View style={{marginLeft: scale(10)}}>
            <Text12
              mt={3}
              color={colors.black}
              text={index%2==0?'Pay To Driver':'Add Money'}
              fontFamily={fonts.semibold}
            />
            <Text
              style={{
                fontFamily: fonts.regular,
                fontSize: 10,
                marginTop: moderateScale(5),
                color:colors.gray
              }}>{`Txn ID #515456655, Oct 14, 10:24 AM`}</Text>
          </View>
        </View>

        <View>
          <Text14 fontFamily={fonts.semibold} text={`${index%2==0?'-':'+'} ₹15.00`} />
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: 10,
              marginTop: moderateScale(5),
            }}>{`#515456655`}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={CommonStyle.container}>
      {/* <BackHandler name={'Wallet'} /> */}

      {
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            backgroundColor: colors.theme,
            paddingHorizontal: scale(15),
            paddingVertical: moderateScale(10),
            paddingBottom: moderateScale(20),
          }}>
          <SafeAreaView />

          <Text18 text={'Wallet'} color={colors.white} textAlign={'center'} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: moderateScale(10),
              alignItems: 'center',
            }}>
            <View>
              <Text16
                text={'Total Balance'}
                fontFamily={fonts.regular}
                color={colors.white}
              />
              <Text24
              // mt={30}
              lineHeight={moderateScale(40)}
              fontSize={moderateScale(30)}
                text={'₹ 124.57'}
                color={colors.white}
                fontFamily={fonts.bold}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigate('AddMoney')}
              style={{
                backgroundColor: colors.yellow,
                height: 32,
                justifyContent: 'center',
                paddingHorizontal: scale(10),
                borderRadius: 8,
              }}>
              <Text14 mt={1} text={'Add Money'} />
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              borderWidth: 1,
              marginTop: moderateScale(20),
              borderRadius: 8,
              borderColor: colors.placeholderColor,
            }}>
            <Input placeHolder={'Enter Amount'} />
          </View> */}
        </View>
      }

      {
        //#region trasactionList
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: scale(10),
              paddingVertical: moderateScale(10),
            }}>
            <Text14 text={'Last Transactions'} />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                paddingHorizontal: scale(10),
                borderColor:colors.borderC,
                borderRadius:8
              }}>
              <AdjustmentsHorizontalIcon
                color={colors.gray}
                size={moderateScale(20)}
              />
              <Text14 mt={1} text={'  Filter'} />
            </TouchableOpacity>
          </View>
          <FlatList renderItem={renderItem} data={dummyData} />
        </View>
        //#endregion
      }
      <InformationModal transactionInfo={transactionInfo} setTransactionInfo={setTransactionInfo}/>
    </View>
  );
};

export default Wallet;

const InformationModal = ({transactionInfo,setTransactionInfo}) => {
  return (
    <Modal 
    transparent
    visible={transactionInfo}
    animationType='slide'
    >
      <TouchableWithoutFeedback onPress={()=>setTransactionInfo(false)}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 'auto',
            width: '90%',
            backgroundColor: colors.white,
            borderRadius: moderateScale(10),
            paddingHorizontal: scale(15),
            paddingBottom: moderateScale(20),
          }}>
          <Text18
            mt={moderateScale(20)}
            fontFamily={fonts.bold}
            text={'Pay To Driver'}
            color={colors.theme}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:moderateScale(10)}}>
            <View>
              <Text12
                color={colors.gray}
                fontFamily={fonts.regular}
                text={'Txn Id'}
              />
              <Text12
                fontFamily={fonts.extraBold}
                color={colors.theme}
                text={'#515456655'}
              />
            </View>
            <View>
              <Text12
                color={colors.gray}
                fontFamily={fonts.regular}
                text={'Date & Time'}
              />
              <Text12
                fontFamily={fonts.extraBold}
                color={colors.theme}
                text={'Oct 14, 10:24 AM'}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: moderateScale(10),
            }}>
            <View>
              <Text12
                color={colors.gray}
                fontFamily={fonts.regular}
                text={'Booking Id'}
              />
              <Text12
                fontFamily={fonts.extraBold}
                color={colors.theme}
                text={'#515456655'}
              />
            </View>
            <View>
              <Text12
                color={colors.gray}
                fontFamily={fonts.regular}
                text={'Amount'}
              />
              <Text20
                color={colors.yellow}
                fontFamily={fonts.bold}
                text={'-₹15.00'}
              />
            </View>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
