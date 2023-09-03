import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    Modal,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { AirbnbRating, Rating } from 'react-native-ratings';


import {
    moderateScale,
    moderateVerticalScale,
    scale,
} from 'react-native-size-matters';
import Text18 from '../customText/Text18';
import Text24 from '../customText/Text24';
import Text12 from '../customText/Text12';
import { icon } from '../../utils/Image';
import { colors, fonts } from '../../utils/Styles';
import Button from '../customButton/Button';

const RatingModal = ({ratingModal, setRatingModal}) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
const [rating,setRating]=useState(0)
  return (
    <Modal
      animationType="slide"
      visible={ratingModal}
      statusBarTranslucent
      transparent>
      <View style={styles.overlay}>
        <View style={styles.carContainer}>
          <View
            style={{
              backgroundColor: 'green',
              height: moderateScale(90),
              width: moderateScale(90),
              borderRadius: moderateScale(90),
              marginTop: -50,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={styles.imageNameInner}
              source={icon.dummy}
            />
          </View>

          <View style={{marginTop: moderateVerticalScale(5)}}>
            <Text18
              color={colors.black}
              textAlign={'center'}
              text={'Gregory'}
              fontFamily={fonts.semibold}
            />
            <Text24
                fontFamily={fonts.bold}
              color={colors.theme}
              mt={25}
              textAlign={'center'}
              text={'Rate Your Passenger'}
            />
            <Text18
              fontFamily={fonts.regular}
              color={colors.gray}
              textAlign={'center'}
              text={'Your feedback will help improve Riding experience'}
            />
          </View>

          <AirbnbRating
            size={moderateScale(28)}
            count={5}
            reviews={[]}
            ratingContainerStyle={{marginVertical: moderateScale(10)}}
            defaultRating={3}
            starContainerStyle={{position: 'absolute'}}
          />

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '90%',
              alignSelf: 'center',
              //   justifyContent: 'space-around',
              //   alignContent: 'space-around',

              //    borderColor: colors.black,
              //     borderWidth: moderateScale(1),
              //     rigth:5
            }}>
            {['Very Professional', 'Arrive On Time', 'Safe Drivve', 'Polite Behavior', 'Lorem Ipsum'].map((item, ind) => {
              return (
                <TouchableOpacity
                  key={ind}
                  style={{
                    // width: moderateScale(120),
                    // height: moderateScale(40),
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',

                    borderRadius: moderateVerticalScale(6),
                    borderColor: ind==0?colors.theme:colors.secondry,
                    borderWidth: moderateScale(1),
                    marginRight: moderateScale(15),
                    paddingHorizontal: scale(5),
                    marginTop: moderateScale(10),
                    paddingVertical:moderateScale(5)
                  }}>
                  <Text12 mt={1} color={ind==0?colors.theme:colors.secondry} text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={{
              //   position: 'absolute',
              width: '100%',

              bottom: moderateVerticalScale(20),
            }}>
            <Button
              onPress={() => {
                setRatingModal(false);
                navigation.navigate('Home')
              }}
              width={'90%'}
              mt={moderateVerticalScale(40)}
              text={'Submit Review'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RatingModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  carContainer: {
    width: '100%',
    alignContent: 'center',
    backgroundColor: colors.white,
  },
  imageNameInner: {
    height: moderateScale(90),
    width: moderateScale(90),
    marginRight: moderateScale(10),
    borderRadius: moderateScale(90),
    // overflow: 'hidden',
  },
});