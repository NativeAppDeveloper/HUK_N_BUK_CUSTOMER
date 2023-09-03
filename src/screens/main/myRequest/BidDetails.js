import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonPadding, iphone8} from '../../../utils/Helper';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import Text18 from '../../../component/customText/Text18';
import {icon} from '../../../utils/Image';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import Text16 from '../../../component/customText/Text16';
import {StarIcon} from 'react-native-heroicons/solid';
import Text24 from '../../../component/customText/Text24';
import Button from '../../../component/customButton/Button';
import RazorpayCheckout from 'react-native-razorpay';

const BidDetails = () => {
  const navigation = useNavigation();
  const [requestStatus, setRequestStatus] = useState(false);
  const handlePayment = data => {
    const options = {
      description: 'Sample Description',
      image: 'https://your-image-url.png',
      currency: 'INR',
      key: 'rzp_test_krFA0ciPkS23g0', // Replace with your actual Razorpay key
      amount: '1000', // Amount in paise (e.g., 10000 paise = ₹100)
      name: 'Sachin',
      prefill: {
        email: 'sac123sh@gmail.com',
        contact: '8178055121',
        name: 'Sachin',
      },
      theme: {color: colors.theme}, // Customize the theme color
    };

    RazorpayCheckout.open(options)
      .then(response => {
        // Payment success callback
        console.log(response);
        setRequestStatus(true);
      })
      .catch(error => {
        // Payment failure callback
        console.log(error);
      });
  };

  return (
    <>
      {Platform.OS == 'android' && <SafeAreaView />}
      <View
        style={{
          backgroundColor: colors.theme,
          ...Platform.select({
            ios: {
              paddingTop: iphone8 ? moderateScale(10) : moderateScale(40),
            },
          }),
        }}>
        <StatusBar backgroundColor={colors.theme} barStyle={'light-content'} />
        <View style={styles.header}>
          <TouchableOpacity
            style={{width: '33%'}}
            onPress={() => navigation.goBack()}>
            <View
              style={{
                height: moderateVerticalScale(30),
                width: moderateVerticalScale(30),
              }}>
              <Image
                style={[CommonStyle.img, {tintColor: colors.white}]}
                source={icon.backBtn}
              />
            </View>
          </TouchableOpacity>

          <View style={{alignItems: 'center', width: '33%'}}>
            <Text18 color={colors.white} text={'Bid Details'} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '33%',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                borderWidth: 1,
                backgroundColor: colors.white,
                paddingHorizontal: scale(4),
                borderRadius: 4,
                justifyContent: 'center',
              }}>
              <Text16
                mt={1}
                text={'15'}
                fontFamily={fonts.semibold}
                color={colors.yellow}
              />
            </View>

            <Text16
              mt={1}
              text={` : `}
              fontFamily={fonts.semibold}
              color={colors.gray}
            />

            <View
              style={{
                borderWidth: 1,
                backgroundColor: colors.white,
                paddingHorizontal: scale(4),
                borderRadius: 4,
                justifyContent: 'center',
              }}>
              <Text16
                mt={1}
                text={'46'}
                fontFamily={fonts.semibold}
                color={colors.yellow}
              />
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: moderateScale(30),
          backgroundColor: colors.white,
        }}
        showsVerticalScrollIndicator={false}>
        {
          //#region Bid Details
          <View style={{backgroundColor: colors.white}}>
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: moderateScale(15),
                borderBottomWidth: 1,
                paddingHorizontal: scale(15),
                borderColor: colors.borderC,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{height: moderateScale(55), width: moderateScale(55)}}>
                  <Image style={CommonStyle.img} source={icon.bidDetails} />
                </View>

                <View style={{marginLeft: scale(5)}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text14
                      text={'Sachin Kumar '}
                      color={colors.theme}
                      fontFamily={fonts.bold}
                      mt={1}
                    />
                    <StarIcon size={moderateScale(10)} color={colors.yellow} />
                    <Text12
                      mt={1}
                      fontFamily={fonts.extraLight}
                      text={' 4.5'}
                      color={colors.placeholderColor}
                    />
                  </View>
                  <Text12
                    mt={1}
                    fontFamily={fonts.extraLight}
                    text={'UP16-BV-0000 • Wagon R'}
                    color={colors.placeholderColor}
                  />
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: moderateScale(10),
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: moderateScale(15),
                      width: moderateScale(15),
                      marginRight: moderateScale(5),
                    }}
                    source={icon.child}
                  />
                  <Text12
                    mt={1}
                    text={'2'}
                    color={colors.gray}
                    fontFamily={fonts.regular}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: moderateScale(15),
                      width: moderateScale(15),
                      marginRight: moderateScale(5),
                    }}
                    source={icon.adult}
                  />
                  <Text12
                    mt={1}
                    text={'2'}
                    color={colors.gray}
                    fontFamily={fonts.regular}
                  />
                </View>
              </View>
            </View>

            {
              //#region offer Details
              <View
                style={{
                  paddingHorizontal: commonPadding,
                  paddingVertical: moderateScale(10),
                }}>
                <Text12
                  fontFamily={fonts.semibold}
                  color={colors.theme}
                  text={'Offer Details'}
                />

                <View
                  style={[styles.offerList, {marginTop: moderateScale(20)}]}>
                  <Text12
                    text={'Extra Km Charge'}
                    fontFamily={fonts.regular}
                    color={colors.gray}
                  />

                  <Text12 text={'₹15/km after 160km'} color={colors.theme} />
                </View>

                <View style={styles.offerList}>
                  <Text12
                    fontFamily={fonts.regular}
                    text={'Toll Tax'}
                    color={colors.gray}
                  />

                  <Text12
                    text={'Exclude ( ₹150 to ₹180 )'}
                    color={colors.theme}
                  />
                </View>

                <View style={styles.offerList}>
                  <Text12
                    fontFamily={fonts.regular}
                    text={'State Tax'}
                    color={colors.gray}
                  />

                  <Text12
                    fontFamily={fonts.regular}
                    text={'Include'}
                    color={colors.theme}
                  />
                </View>

                <View style={styles.offerList}>
                  <Text12
                    text={'Driver Allowance'}
                    color={colors.gray}
                    fontFamily={fonts.regular}
                  />

                  <Text12
                    text={'Exclude ( ₹150/ Night )'}
                    color={colors.theme}
                  />
                </View>

                <View style={styles.offerList}>
                  <Text12
                    text={'Parking'}
                    color={colors.gray}
                    fontFamily={fonts.regular}
                  />

                  <Text12 text={'Exclude'} color={colors.theme} />
                </View>
              </View>
              //#endregion
            }

            {
              //#region notes
              <View
                style={{
                  paddingHorizontal: commonPadding,
                  backgroundColor: '#e3f3ff',
                  paddingVertical: moderateScale(15),
                  borderWidth: 0.5,
                  borderColor: colors.borderC,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: moderateScale(10),
                    color: colors.theme,
                  }}>
                  Note <Text style={{fontFamily: fonts.bold}}>Excluded</Text>{' '}
                  <Text>
                    Tax,  State Tax, Driver Allowance & Parking will paid by
                  </Text>
                  <Text style={{fontFamily: fonts.bold}}>  Customer</Text> &{' '}
                  <Text style={{fontFamily: fonts.bold}}>  Include</Text>
                  <Text>
                    Tax, State Tax, Driver Allowance & Parking will paid by
                  </Text>
                  <Text style={{fontFamily: fonts.bold}}>  Driver</Text>
                </Text>
              </View>
              //#endregion
            }

            {
              //#region Amnities
              <View
                style={{
                  paddingHorizontal: commonPadding,
                  paddingVertical: moderateScale(10),
                  borderBottomWidth: 1,
                  borderColor: colors.borderC,
                }}>
                <Text12
                  fontFamily={fonts.semibold}
                  color={colors.theme}
                  text={'Amenities'}
                />
                <View
                  style={{flexDirection: 'row', marginTop: moderateScale(10)}}>
                  {['Water Bottle', 'Wifi', 'Tissues', 'Newspaper'].map(
                    (ele, ind) => {
                      return (
                        <TouchableOpacity
                          style={{
                            marginRight: moderateScale(10),
                            backgroundColor: '#f6f6f6',
                            padding: moderateScale(8),
                            borderRadius: 4,
                          }}>
                          <Text12 text={ele} mt={1} color={colors.gray} />
                        </TouchableOpacity>
                      );
                    },
                  )}
                </View>
              </View>
              //#endregion
            }

            {
              //#region  Vechicle Image

              <View
                style={{
                  paddingHorizontal: commonPadding,
                  paddingVertical: moderateScale(15),
                  borderBottomWidth: 1,
                  borderColor: colors.borderC,
                }}>
                <Text12
                  fontFamily={fonts.semibold}
                  color={colors.theme}
                  text={'Vehicle Images'}
                />

                <View
                  style={{flexDirection: 'row', marginTop: moderateScale(10)}}>
                  {['Water Bottle', 'Wifi', 'Tissues', 'Newspaper'].map(
                    (ele, ind) => {
                      return (
                        <View
                          style={{
                            height: moderateScale(60),
                            width: moderateScale(60),
                            overflow: 'hidden',
                            marginRight: moderateScale(10),
                            borderRadius: 8,
                            marginTop: moderateScale(5),
                          }}>
                          <Image
                            style={CommonStyle.img}
                            source={{
                              uri: 'https://img.freepik.com/free-vector/car-interior-dark_1284-5362.jpg',
                            }}
                          />
                        </View>
                      );
                    },
                  )}
                </View>

                <View style={{marginTop: moderateScale(10)}}>
                  <Text style={{fontFamily: fonts.regular, fontSize: 10}}>
                    Luggage will be depends on vehicle type check our luggage
                    details
                  </Text>
                  <Text
                    style={{
                      color: colors.yellow,
                      fontFamily: fonts.semibold,
                      fontSize: 10,
                    }}>
                    click here
                  </Text>
                </View>
              </View>
              //#endregion
            }

            {
              //#region amount
              <View
                style={{
                  paddingHorizontal: commonPadding,
                  paddingVertical: moderateScale(15),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text14 text={'Total Amount'} fontFamily={fonts.regular} />
                  <Text24
                    fontFamily={fonts.bold}
                    color={colors.black}
                    text={'₹3150'}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{height: 20, width: 20}}>
                      <Image
                        style={CommonStyle.img}
                        source={!true ? icon.circle : icon.currentLocation}
                      />
                    </View>
                    <View style={{marginLeft: moderateScale(5)}}>
                      <Text16
                        color={colors.theme}
                        text={'Make part payment now'}
                      />
                      <Text12
                        color={colors.theme}
                        fontFamily={fonts.regular}
                        text={'Pay the rest to the driver'}
                      />
                    </View>
                  </View>
                  <View>
                    <Text18 text={'₹350'} />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: moderateScale(10),
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{height: 15, width: 15}}>
                      <Image
                        style={CommonStyle.img}
                        source={true ? icon.circle : icon.currentLocation}
                      />
                    </View>
                    <View style={{marginLeft: moderateScale(5)}}>
                      <Text16
                        color={colors.theme}
                        text={'Make full payment now'}
                      />
                    </View>
                  </View>
                  <View>
                    <Text18 text={'₹350'} />
                  </View>
                </View>
              </View>
              //#endregion
            }
          </View>
          //#endregion
        }
      </ScrollView>
      <View
        style={{
          backgroundColor: colors.white,
          paddingVertical: moderateScale(10),
        }}>
        <Button onPress={() => handlePayment()} text={'Book Ride'} />
      </View>

      <RegestrationCompleted
        requestStatus={requestStatus}
        setRequestStatus={setRequestStatus}
        navigation={navigation}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(26),
    backgroundColor: colors.theme,
    paddingHorizontal: scale(10),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  offerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScale(7),
  },
});

export default BidDetails;

const RegestrationCompleted = ({
  requestStatus,
  setRequestStatus,
  navigation,
}) => {
  return (
    <Modal visible={requestStatus}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: moderateScale(20),
        }}
        source={require('../../../assets/RegestrationCom.png')}>
        <Button
          onPress={() => {
            setRequestStatus(false);
            setTimeout(() => {
              navigation.navigate('My Ride');
            }, 100);
          }}
          text={'Go to My Ride'}
          backgroundColor={colors.white}
        />
      </ImageBackground>
    </Modal>
  );
};
