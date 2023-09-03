import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Text16 from '../customText/Text16';
import {width} from '../../utils/Helper';
import {colors, fonts} from '../../utils/Styles';
import {icon} from '../../utils/Image';
import {moderateScale, scale} from 'react-native-size-matters';
import Text14 from '../customText/Text14';
import Button from '../customButton/Button';
import CancelModal from './CancelModal';

const RideCancelModal = ({cancel, setCancelRide}) => {
  const [active, setActive] = useState(null);
  const [cancelStatus, setCancelStatus] = useState(false);
  return (
    <Modal visible={cancel} transparent>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(126,126,126,0.55)',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: width,
            backgroundColor: colors.white,
            height: 'auto',
            justifyContent: 'end',
            paddingHorizontal: scale(15),
            paddingVertical: moderateScale(10),
          }}>
          <View>
            <Text16 fontFamily={fonts.bold} text={'Cancel Ride'} />
          </View>

          {[
            'Driver denied to go to destination',
            'Driver denied to come to pickup',
            'Expected a shorter wait time',
            'Unable to contact driver',
            'My reason is not listed',
          ].map((ele, ind) => {
            return (
              <TouchableOpacity
                key={ind}
                onPress={() => setActive(ind)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: moderateScale(10),
                }}>
                <View>
                  <Image
                    style={{
                      height: active == ind ? 22 : 15,
                      width: active == ind ? 22 : 15,
                    }}
                    resizeMode="cover"
                    source={active == ind ? icon.currentLocation : icon.circle}
                  />
                </View>
                <Text14 mt={1} color={colors.theme} text={`  ${ele}`} />
              </TouchableOpacity>
            );
          })}

          {active == 4 && (
            <View
              style={{
                borderWidth: 1,
                height: moderateScale(80),
                borderColor: colors.placeholderColor,
                borderRadius: 8,
                paddingHorizontal: scale(10),
              }}>
              <TextInput
                style={{
                  textAlignVertical: 'top',
                  borderBottomColor: '#ffff', // Add this to specify bottom border color
                  borderBottomWidth: 0,
                }}
                placeholder="Write your reason"
              />
            </View>
          )}

          <Button
            onPress={() => setCancelStatus(true)}
            mt={10}
            width={'100%'}
            text={'Cancel Ride'}
          />
        </View>
      </View>
      <CancelModal
        cancelStatus={cancelStatus}
        setCancelRide={setCancelRide}
        setCancelStatus={setCancelStatus}
      />
    </Modal>
  );
};

export default RideCancelModal;
