import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text, ImageBackground, Image } from 'react-native';
import { images } from '../../utils/Image';
import { CommonStyle, colors, fonts } from '../../utils/Styles';
import { moderateScale, scale } from 'react-native-size-matters';
import Text24 from '../../component/customText/Text24';
import Text14 from '../../component/customText/Text14';
import Button from '../../component/customButton/Button';
import { useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('window');

const CustomCarousel = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch=useDispatch()
    const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        const page = Math.round(contentOffset.x / width);
        setCurrentPage(page);
    };

    const data = [
        {
            id: 1,
            text: 'Request Ride',
            img: images.On1,
            desc: 'Request a ride get picked up by a nearby community driver'
        },
        {
            id: 2,
            text: 'Confirm Your Driver',
            img: images.On2,
            desc: 'Huge drivers network helps you find comforable, safe and cheap ride'
        },
        {
            id: 3,
            text: 'Enjoy Your Ride',
            img: images.On3,
            desc: 'Enjoy your ride with huk & buk reliable service.'
        },
    ];

    const btnHandler=()=>{
        dispatch({
            type:'CHANGE_STACK',
            payload:'AUTH'
        })
    }

    return (
        <ImageBackground
            source={images.bg}
            style={{ flex: 1 }}
            resizeMode='cover'
        >
            <View style={{ flex: 1 }}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    contentContainerStyle={{ height: '65%' }}
                >
                    {data.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <View style={{ height: moderateScale(250), width: moderateScale(250) }}>
                                <Image resizeMode='contain' source={item.img} style={CommonStyle.img} />
                            </View>
                            <View style={{ width: '70%', alignItems: 'center' }}>
                                <Text24
                                    mt={moderateScale(20)}
                                    text={item.text}
                                    fontFamily={fonts.bold}
                                    textAlign={'center'}
                                />
                                <Text14
                                    mt={moderateScale(10)}
                                    text={item.desc}
                                    fontFamily={fonts.regular}
                                    textAlign={'center'}

                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.pagination}>
                    {data.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.paginationDot,
                                { backgroundColor: index === currentPage ? colors.yellow : colors.gray },
                            ]}
                        />
                    ))}
                </View>
            </View>

            <View style={{
                width: width,
                position: 'absolute',
                bottom: moderateScale(35)
            }}>
                <Button text={'Login'} onPress={()=>btnHandler()} />
                <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: moderateScale(15) }}>
                    <Text14 fontFamily={fonts.regular} color={colors.gray} text={'New user ? '} />
                    <Text14 text={' Register here'} />

                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: "center",
        top: '67%'
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});

export default CustomCarousel;
