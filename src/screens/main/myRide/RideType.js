import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import BackHandler from '../../../component/BackHandler';
import {icon, images} from '../../../utils/Image';
import {moderateScale, scale} from 'react-native-size-matters';
import Text16 from '../../../component/customText/Text16';
import Text14 from '../../../component/customText/Text14';
import Text12 from '../../../component/customText/Text12';
import {useNavigation} from '@react-navigation/native';
import { StarIcon } from 'react-native-heroicons/solid';

const RideType = ({route}) => {
  const rideType = route?.params?.rideType;
  const [activeTab, setActiveTab] = useState(0);
  const {navigate} = useNavigation();
  const [tabData, setTabData] = useState([
    {
      name: 'Ongoing',
    },
    {
      name: 'Upcoming',
    },
    {
      name: 'Completed',
    },
    {
      name: 'Cancelled',
    },
  ]);


  console.log(rideType,'[popopopo');

  return (
    <View style={[CommonStyle.container, styles.container]}>
      <BackHandler name={rideType} />

      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabData.map((ele, ind) => (
            <TouchableOpacity
              key={ind}
              onPress={() => setActiveTab(ind)}
              style={[
                styles.tabButton,
                {
                  backgroundColor:
                    activeTab == ind ? colors.yellow : colors.white,
                  marginLeft: ind == 0 ? 20 : 0,
                },
              ]}>
              <Text12 mt={1} color={colors.theme} text={ele.name} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 1, 1, 1, 1, 1]}
          renderItem={() => (
            <TouchableOpacity
              onPress={()=>{
                  if(rideType=='Intercity'){
                    console.log('1')
                    navigate('InterCityRideDetail',{rideStatus:tabData[activeTab].name})
                  }
                  if(rideType=='Outstation'){
                    navigate('RdieDetails',{rideStatus:tabData[activeTab].name})
                  }
                  if(rideType=='Local Rental'){
                    navigate('LocalRideDetails',{rideStatus:tabData[activeTab].name})
                  }
              }}
              // onPress={()=>navigate('RdieDetails',{rideStatus:tabData[activeTab].name})}
              // onPress={()=>navigate('InterCityRideDetail',{rideStatus:tabData[activeTab].name})}
              // onPress={()=>navigate('LocalRideDetails',{rideStatus:tabData[activeTab].name})}

              LocalRideDetails
              style={styles.itemContainer}>
              <View style={[styles.bookingIdContainer,{flexDirection:'row',justifyContent:'space-between'}]}>
                <Text
                  style={
                    styles.bookingIdText
                  }>{`Booking ID #41651651561 • One Way`}</Text>


                  <View style={{flexDirection:'row'}}>
                    <Image style={{height:moderateScale(20),width:moderateScale(20)}} source={icon.timer1}/>
                    <Text12 text={' 3 Hour / 30km'}
                    color={colors.gray}
                    fontSize={10}
                    />
                  </View>
              </View>

              {
                //#region
                <View
                  style={{
                    paddingHorizontal: scale(10),
                    marginTop: moderateScale(10),
                  }}>
                {(rideType=='Intercity'||rideType=="Outstation")&&  <View>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          height: moderateScale(23),
                          width: moderateScale(23),
                        }}>
                        <Image
                          source={icon.currentLocation}
                          style={CommonStyle.img}
                        />
                      </View>

                      <View>
                        <Text14
                          color={colors.theme}
                          mt={1}
                          text={'333B, Anchorv  ale Link'}
                        />
                        <Text12
                          fontFamily={fonts.regular}
                          color={colors.gray}
                          text={'Pick up 12:05PM, 23 Feb'}
                        />
                      </View>
                    </View>
                  </View>}

                {rideType !=='Local Rental' && <View
                    style={{
                      height: 50,
                      borderColor: 'black',
                      borderLeftWidth: 1,
                      borderStyle: 'dashed',
                      marginHorizontal: scale(10),
                      // alignItems:'center',
                      justifyContent: 'center',
                      paddingLeft: 20,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        style={{height: 17, width: 17}}
                        source={icon.Time}
                      />
                      <Text style={{fontSize: 10, fontFamily: fonts.regular}}>
                        {' '}
                        4h50m
                      </Text>
                      <Image
                        style={{
                          height: 17,
                          width: 17,
                          marginHorizontal: scale(10),
                        }}
                        source={icon.distance}
                      />
                      <Text style={{fontSize: 10, color: '#f7954a'}}>
                        456 km
                      </Text>
                    </View>
                  </View>}

                  <View style={{flexDirection: 'row', marginTop: 8}}>
                    <View
                      style={{
                        height: moderateScale(23),
                        width: moderateScale(23),
                      }}>
                      <Image
                        source={icon.location}
                        style={CommonStyle.img}
                      />
                    </View>

                    <View>
                      <Text14
                        color={colors.theme}
                        mt={1}
                        text={'East Cosat Hill'}
                      />
                      <Text12
                        fontFamily={fonts.regular}
                        color={colors.gray}
                        text={'Drop off 12:05PM, 23 Feb'}
                      />
                    </View>
                  </View>
                </View>
                //#endregion
              }

              {
                //#region  bottom View
                <View
                  style={{
                    borderTopWidth: 1,
                    paddingHorizontal: scale(10),
                    borderTopColor: colors.placeholderColor,
                    paddingTop: 5,
                    marginTop: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{height: 40, width: 40}}>
                    <Image
                      source={icon.profile}
                      resizeMode="contain"
                      style={CommonStyle.img}
                    />
                  </View>

                  <View style={{marginLeft: 15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text14
                      color={colors.theme}
                      mt={1}
                      text={'Akshit Kumar •'}
                    />

                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <StarIcon color={colors.yellow} size={moderateScale(10)}/>
                      <Text12 color={colors.placeholderColor} text={'4.5'}/>
                    </View>

                    </View>
                    <Text12
                      fontFamily={fonts.regular}
                      color={colors.gray}
                      text={'UP16-BV-0000 • Sedan'}
                    />
                  </View>

                  <View
                    style={{
                      marginLeft: 15,
                      position: 'absolute',
                      right: 8,
                      top: 10,
                    }}>
                    <Text12 color={colors.theme} mt={1} text={'Total Amount'} />
                    <Text12
                      textAlign={'right'}
                      fontFamily={fonts.regular}
                      color={colors.black}
                      text={'₹ 7,325'}
                    />
                  </View>
                </View>
                //#endregion
              }
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(20),
  },
  tabButton: {
    width: scale(90),
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    marginRight: 10,
    borderRadius: 8,
  },
  listContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  itemContainer: {
    borderWidth: 1,
    marginTop: moderateScale(20),
    paddingVertical: moderateScale(10),
    borderColor: colors.placeholderColor,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  bookingIdContainer: {
    borderBottomWidth: 0.5,
    paddingBottom: moderateScale(10),
    borderColor: colors.placeholderColor,
    paddingHorizontal: scale(10),
  },
  bookingIdText: {
    fontSize: 10,
    color: colors.theme,
    fontFamily: fonts.regular,
  },
});

export default RideType;
