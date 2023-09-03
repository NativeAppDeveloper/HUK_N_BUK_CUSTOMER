import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import BackHandler from '../../../component/BackHandler'
import { icon } from '../../../utils/Image'
import { moderateScale, scale } from 'react-native-size-matters'
import Text16 from '../../../component/customText/Text16'
import Text14 from '../../../component/customText/Text14'
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/solid'

const Faq = () => {

    const [notifactionData,setNotifactionData]=useState(
        [
            {
                img:icon.Shape1,
                color:colors.theme,
                heading:'What is Huk n Buk?',
                desc:'Booking #1234 has been success...'
            },
            {
                img:icon.promo,
                color:colors.yellow,
                heading:'How does Huk n Buk work?',
                desc:'Invite friends - Get 3 coupons each!'
            },
            {
                img:icon.Shape2,
                color:colors.green,
                heading:`What type of photography services are available on the app?
                `,
                desc:'Booking #1234 has been success...'
            },
            {
                img:icon.Shape1,
                color:colors.orange,
                heading:`How do I book a photographer on the app?
                `,
                desc:'Booking #1234 has been success...'
            },
            {
                img:icon.Shape1,
                color:colors.blue,
                heading:`How do I book a photographer on the app?
                `,
                desc:'Booking #1234 has been success...'
            },


        ]
    )
    return (
        <View style={CommonStyle.container}>
            <BackHandler name={'FAQ’s'} />

            {
                <FlatList 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{}}
                data={notifactionData}
                renderItem={(({item,index})=>{
                    return(
                        <View style={{borderBottomWidth:1,flexDirection:"row",paddingVertical:moderateScale(20),paddingHorizontal:scale(10),borderColor:colors.placeholderColor}}>
                            <View style={{height:50,width:50,backgroundColor:colors.theme,borderRadius:50,alignItems:"center",justifyContent:"center"}}>
                                <ArrowRightIcon color={colors.white} size={moderateScale(20)}/>
                            </View>

                            <View style={{paddingLeft:moderateScale(10),width:'90%'}}>
                                <Text16  text={item.heading} fontFamily={fonts.semibold} />
                                {/* <Text style={{fontSize:16,fontFamily:fonts.bold}}>{item.heading}</Text> */}
                                <Text14  text={item.desc} fontFamily={fonts.regular} color={colors.gray}/>
                            </View>
                        </View>
                    )
                })}/>
            }
        </View>
    )
}

export default Faq