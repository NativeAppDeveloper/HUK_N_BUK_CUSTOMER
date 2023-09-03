import {
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';

import CustomMapView from '../../../component/CustomMapView';
import { moderateScale, scale } from 'react-native-size-matters';
import { CommonStyle, colors, fonts } from '../../../utils/Styles';
import { icon, images } from '../../../utils/Image';
import { width } from '../../../utils/Helper';
import {
    ChevronRightIcon,
    MagnifyingGlassIcon,
    MapPinIcon,
    XMarkIcon,
} from 'react-native-heroicons/solid';
import Button from '../../../component/customButton/Button';
import Text16 from '../../../component/customText/Text16';
import { homeFlow } from '../../../utils/localVariable';
import LocationText from '../../../component/common/LocationText';

export default function BookRide() {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState(0);
    const [offerModal, SetOfferModal] = useState(false);
    const [slectedIndex, setSetlectedIndex] = useState(0);
    const data = [
        {
            carName: 'Hatchback',
            desc: 'Comfy,Economical cars',
            price: '₹300-400',
            icon: icon.car1,
        },
        {
            carName: 'Sedan',
            desc: 'Spacious Sedan ,Top Drivers',
            price: '₹400-600',
            icon: icon.car3,
        },
        {
            carName: 'SUV',
            desc: 'Luxury Compfort,more Space',
            price: '₹400-600',
            icon: icon.omini,
        },
    ];


    console.log(homeFlow?.flow, 'yess');

    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <CustomMapView Marker={true} mapStyle={styles.mapStyle} />
            <LocationText />
            <View
                style={{
                    // height: '55%',
                    backgroundColor: colors.white,
                    paddingBottom: moderateScale(10),
                }}>
                {!offerModal && <ScrollView>
                    <View style={{ paddingHorizontal: moderateScale(15), marginTop: 10 }}>
                        <Text16 mt={15} text={'Recommended for you'} />

                        {
                            //#region car map
                            <>
                                {data.map((ele, ind) => {
                                    return (
                                        <View
                                            key={ind}
                                            style={{
                                                marginVertical: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: moderateScale(15),
                                            }}>
                                            <View
                                                style={{
                                                    height: moderateScale(55),
                                                    borderWidth: 0.5,
                                                    width: moderateScale(55),
                                                    borderColor: colors.placeholderColor,
                                                    borderRadius: 8,
                                                    padding: 3,
                                                }}>
                                                <Image
                                                    resizeMode="contain"
                                                    style={CommonStyle.img}
                                                    source={ele.icon}
                                                />
                                            </View>

                                            <TouchableOpacity
                                                onPress={() => setSetlectedIndex(ind)}
                                                style={{
                                                    borderWidth: 1,
                                                    width: '80%',
                                                    borderRadius: 8,
                                                    paddingHorizontal: scale(10),
                                                    borderColor:
                                                        slectedIndex == ind ? colors.theme : colors.gray,
                                                    backgroundColor:
                                                        slectedIndex == ind ? '#e6ebfa' : colors.white,
                                                }}>
                                                <View style={{}}>
                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'space-between',
                                                        }}>
                                                        <Text14
                                                            fontFamily={fonts.semibold}
                                                            text={ele.carName}
                                                        />

                                                        <Text14
                                                            fontFamily={fonts.semibold}
                                                            text={'₹300-400'}
                                                        />
                                                    </View>

                                                    <Text12
                                                        fontFamily={fonts.extraLight}
                                                        color={colors.placeholderColor}
                                                        text={ele.desc}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                })}

                                <TouchableOpacity
                                    onPress={() => SetOfferModal(true)}
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: scale(20),
                                        borderColor: colors.placeholderColor,
                                        paddingBottom: moderateScale(15),
                                        borderBottomWidth: 1,
                                    }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            style={{
                                                height: moderateScale(28),
                                                width: moderateScale(28),
                                            }}
                                            resizeMode="contain"
                                            source={icon.discount}
                                        />
                                        <Text14
                                            text={' Apply Promo code'}
                                            color={colors.placeholderColor}
                                        />
                                    </View>

                                    <ChevronRightIcon color={colors.black} />
                                </TouchableOpacity>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: scale(20),
                                        borderColor: colors.placeholderColor,
                                        paddingBottom: moderateScale(15),
                                    }}>
                                    <TouchableOpacity
                                        // onPress={()=>SetOfferModal(true)}
                                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View
                                            style={{
                                                height: moderateScale(28),
                                                width: moderateScale(28),
                                                borderRadius: moderateScale(14),
                                                backgroundColor: colors.yellow,
                                                alignItems: 'center',
                                            }}
                                            resizeMode="contain">
                                            <Text16
                                                text={'₹'}
                                                color={colors.theme}
                                                fontFamily={fonts.extraBold}
                                            />
                                        </View>
                                        <Text14
                                            text={'  Cash payment'}
                                            color={colors.black}
                                        />
                                    </TouchableOpacity>

                                    <ChevronRightIcon color={colors.black} />
                                </View>
                            </>
                            //#endregion
                        }
                    </View>
                </ScrollView>}
                <Button
                    onPress={() => {
                        if (homeFlow?.flow == 2) {
                            navigation.navigate('SelectPassenger');
                        } else {
                            navigation.navigate('ConfirmRide');
                        }
                    }}
                    text={homeFlow?.flow == 0 ? 'Book Ride' : homeFlow?.flow == 1 ? 'Book Rental Ride' : 'Book Outstation Ride'}
                />
            </View>
            {/* {alert(JSON.stringify(homeFlow))} */}
            <AddPromoCode offerModal={offerModal} SetOfferModal={SetOfferModal} />
        </View>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        height: moderateScale(290),
        width: width,
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: 0,
    },
    imgContainer: {
        width: scale(80),
        height: moderateScale(80),
    },
    mapStyle: {
        flex: 2,
        position: 'absolute',
        top: moderateScale(16),
        left: 0,
        right: 0,
        bottom: '0%',
        zIndex: -1,
    },
    carContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: scale(20),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        backgroundColor: colors.white,
    },
    destination: {
        width: '100%',
        alignSelf: 'center',
        paddingVertical: moderateScale(10),

        backgroundColor: colors.white,
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15),
    },
    searchContainer: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#EDF1F7',
        paddingVertical: moderateScale(1),
        borderRadius: moderateScale(4),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(10),
    },
});

const AddPromoCode = ({ offerModal, SetOfferModal }) => {
    const data1 = [
        {
            carName: 'Get 10% on First Ride',
            desc: 'Valid Till 12/08/23',
            price: '₹300-400',
        },
        {
            carName: 'Get 50₹ on Fair Ride',
            desc: 'Valid Till 15/10/22',
            price: '₹400-600',
        },
        {
            carName: 'Get 100₹on Next Two',
            desc: 'Valid Till 12/08/23',
            price: '₹400-600',
        },
    ];
    return (
        <Modal visible={offerModal} transparent>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View
                    style={{
                        // height: '55%',
                        backgroundColor: colors.white,
                        paddingBottom: moderateScale(10),
                        paddingVertical: moderateScale(20)
                    }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View
                            style={{
                                paddingHorizontal: moderateScale(15),
                                marginTop: moderateScale(10),
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text16
                                        color={colors.theme}
                                        fontFamily={fonts.bold}
                                        text={'Add Promo Code'}
                                        mt={1}
                                    />
                                    <Image
                                        source={icon.discount}
                                        style={{
                                            height: moderateScale(20),
                                            width: moderateScale(20),
                                            marginHorizontal: scale(10),
                                        }}
                                    />
                                </View>
                                <TouchableOpacity onPress={() => SetOfferModal(false)}>
                                    <XMarkIcon color={colors.black} size={moderateScale(25)} />
                                </TouchableOpacity>
                            </View>
                            {
                                //#endregion enter coupon
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: moderateScale(15),
                                        marginBottom: moderateScale(10),
                                    }}>
                                    <View
                                        style={{
                                            borderWidth: 1,
                                            borderColor: colors.placeholderColor,
                                            width: '60%',
                                            borderRadius: 8,
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                        }}>
                                        <TextInput
                                            style={{ color: colors.black, fontFamily: fonts.regular }}
                                            placeholderTextColor={colors.gray}
                                            placeholder="Enter promo code"
                                        />
                                    </View>
                                    <Button text={'Apply'} width={'30%'} />
                                </View>
                                //#endregion
                            }
                            {
                                //#region car map
                                <>
                                    {data1.map((ele, ind) => {
                                        return (
                                            <View
                                                key={ind}
                                                style={{
                                                    marginVertical: 1,
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    marginTop: moderateScale(15),
                                                }}>
                                                <View
                                                    style={{
                                                        height: moderateScale(55),
                                                        borderWidth: 0.5,
                                                        width: moderateScale(55),
                                                        borderColor: colors.placeholderColor,
                                                        borderRadius: 8,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}>
                                                    <Image
                                                        resizeMode="contain"
                                                        style={{ height: '60%', width: '60%' }}
                                                        source={icon.discount}
                                                    />
                                                </View>

                                                <View
                                                    style={{
                                                        borderWidth: 1,
                                                        width: '80%',
                                                        borderRadius: 8,
                                                        paddingHorizontal: scale(10),
                                                    }}>
                                                    <View style={{}}>
                                                        <View
                                                            style={{
                                                                flexDirection: 'row',
                                                                justifyContent: 'space-between',
                                                            }}>
                                                            <Text14
                                                                fontFamily={fonts.semibold}
                                                                text={ele.carName}
                                                            />

                                                            {ind == 0 && (
                                                                <Image
                                                                    resizeMode="contain"
                                                                    style={{
                                                                        height: moderateScale(20),
                                                                        width: moderateScale(20),
                                                                        position: 'absolute',
                                                                        top: moderateScale(10),
                                                                        right: moderateScale(5),
                                                                    }}
                                                                    source={icon.checkbox}
                                                                />
                                                            )}
                                                        </View>

                                                        <Text12
                                                            fontFamily={fonts.extraLight}
                                                            color={colors.placeholderColor}
                                                            text={ele.desc}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        );
                                    })}
                                </>
                                //#endregion
                            }
                        </View>
                    </ScrollView>
                    <Button 
                    onPress={()=>SetOfferModal(false)}
                    mt={30} text={'Use Code'} />
                </View>
            </View>
        </Modal>
    );
};
