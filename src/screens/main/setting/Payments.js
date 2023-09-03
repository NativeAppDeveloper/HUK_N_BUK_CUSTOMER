import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import BackHandler from '../../../component/BackHandler'
import { icon } from '../../../utils/Image'
import { moderateScale, scale } from 'react-native-size-matters'
import Text16 from '../../../component/customText/Text16'
import Text14 from '../../../component/customText/Text14'
import { CheckIcon, ChevronRightIcon, TrashIcon } from 'react-native-heroicons/solid'
import Text12 from '../../../component/customText/Text12'
import { useNavigation } from '@react-navigation/native'
import Text18 from '../../../component/customText/Text18'
import Input from '../../../component/customInput/Input'
import Button from '../../../component/customButton/Button'

const Payments = () => {
    const { navigate } = useNavigation()
    const [active, setActiveTab] = useState(0)
    const [cardModal,setCardModal]=useState(false)
    const [upiModal,setUpiModal]=useState(false)
    const [upiImgae,setUpiImage]=useState(null)

    // console.log(upiImgae);
    const [notifactionData, setNotifactionData] = useState(
        [
            {
                img: icon.googlePay,
                color: colors.theme,
                heading: 'Google Pay',
                name: ''
            },
            {
                img: icon.PhonePe,
                color: colors.yellow,
                heading: 'PhonePe',
                name: 'Hindi'
            },

            {
                img: icon.paytm,
                color: colors.yellow,
                heading: 'Paytm',
                name: 'Hindi'
            },
        ]
    )
    return (
        <View style={[CommonStyle.container, { backgroundColor: '#f6f6f6' }]}>
            <BackHandler name={'Payment'} />
            <View style={{ width: '90%', alignSelf: 'center', paddingVertical: moderateScale(10) }}>
                {
                    //#region  wallet 
                    <View>
                        <Text14
                            text={'Wallet'}
                        />

                        <TouchableOpacity
                            // onPress={() => setUpiModal(true)}
                            style={[styles.cardContainer,{paddingVertical:moderateScale(15)}]}>


                            {<View style={{ paddingLeft: moderateScale(10) }}>
                                <Text14 lineHeight={moderateScale(13)} text={'₹ 400'} fontFamily={fonts.medium} color={colors.theme} />
                            </View>}
                            <View style={{ position: 'absolute', right: 10, flexDirection: 'row', alignItems: 'center', }}>
                                <Text12 text={'Default'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    //#endregion 
                }

                {
                    //#region  UPI Container
                    <View>
                        <Text14
                            text={'UPI'}
                        />

                        {notifactionData.map((item, ind) => {
                            return (
                                <TouchableOpacity
                                    key={ind}
                                    onPress={() => {
                                        // setUpiImage(item.img)
                                        setActiveTab(ind)
                                        setUpiModal(true)
                                    }}
                                    style={[styles.cardContainer,]}>
                                    <View style={{ paddingLeft: moderateScale(10), flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ height: moderateScale(30), width: moderateScale(30), marginRight: 10 }} source={item.img} />
                                        <Text14 mt={2} lineHeight={moderateScale(13)} text={item.heading} fontFamily={fonts.medium} color={colors.theme} />
                                    </View>
                                    <View style={{ position: 'absolute', right: 10, flexDirection: 'row', alignItems: 'center', }}>
                                        <Text12 color={ind !== 2 ? colors.yellow : colors.black} text={ind == 2 ? 'Set as Default' : 'Link'} />
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    //#endregion
                }

                {
                    //#region  credit Card
                    <View>
                        <Text14
                            text={'Credit /Debit Card'}
                        />


                        <TouchableOpacity
                            onPress={() => setCardModal(true)}
                            style={[styles.cardContainer, { paddingVertical: moderateScale(17) }]}>
                            <View style={{ paddingLeft: moderateScale(10), flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ height: moderateScale(10), width: moderateScale(10), marginRight: 10 }} source={icon.plus} />
                                <Text14 mt={2} lineHeight={moderateScale(13)} text={'Add Credit/Debit Card'} fontFamily={fonts.medium} color={colors.theme} />
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity
                            // onPress={() => setActiveTab(ind)}
                            style={[styles.cardContainer, { paddingVertical: moderateScale(17) }]}>
                            <View style={{ paddingLeft: moderateScale(10), flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ height: moderateScale(30), width: moderateScale(30), marginRight: 10 }} source={icon.visa} />
                                <View>
                                    <Text14 mt={2} lineHeight={moderateScale(13)} text={'BOI'} fontFamily={fonts.medium} color={colors.theme} />
                                    <Text12 text={'************1234'} />
                                </View>
                            </View>

                            <View style={{ position: 'absolute', right: 10, flexDirection: 'row', alignItems: 'center', }}>
                                <Text12 color={colors.yellow} text={'Link'} />
                            </View>
                        </TouchableOpacity>



                    </View>
                    //#endregion
                }

                <AddUpi setUpiModal={setUpiModal} upiModal={upiModal} active={active} />
                <AddCard cardModal={cardModal} setCardModal={setCardModal}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        paddingVertical: moderateScale(12),
        paddingHorizontal: scale(10),
        borderColor: colors.placeholderColor,
        alignItems: 'center',
        backgroundColor: colors.white,
        width: '100%',
        alignSelf: 'center',
        marginVertical: moderateScale(9),
        borderRadius: moderateScale(7)
    },
    cardContainer2: {
        flexDirection: "row",
        paddingVertical: moderateScale(17),
        paddingHorizontal: scale(10),
        borderColor: colors.placeholderColor,
        alignItems: 'center',
        backgroundColor: colors.white,
        width: '90%',
        alignSelf: 'center',
        marginVertical: moderateScale(9),
        borderRadius: moderateScale(7),
        position: 'absolute',
        bottom: moderateScale(20)
    }
})



export default Payments


const AddUpi = ({upiModal,setUpiModal,active}) => {
    return (
        <Modal visible={upiModal} transparent>
            <View style={{ backgroundColor: 'rgba(126,126,126,0.55)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: moderateScale(300), width: '90%', backgroundColor: colors.white, borderRadius: moderateScale(10) }}>
                    <Text18 mt={moderateScale(20)} fontFamily={fonts.bold} textAlign={'center'} text={'Add UPI'} />

                    <Image resizeMode='contain' style={{
                        height: moderateScale(100),
                        width: moderateScale(100),
                        marginRight: 10,
                        alignSelf: "center"
                    }} source={active==0?icon.googlePay:active==1?icon.PhonePe:icon.paytm} />
                    <View style={{borderWidth:1,width:'90%',alignSelf:'center',overflow:'hidden',borderRadius:moderateScale(8),borderColor:colors.placeholderColor}}>
                        <Input placeHolder={'Ex- 9898989898@ybl'} />
                    </View>

                    <Button onPress={()=>setUpiModal(false)} mt={moderateScale(20)} text={'Add UPI'} />
                </View>
            </View>
        </Modal>
    )
}

const AddCard=({setCardModal,cardModal})=>{
    return(
        <Modal visible={cardModal} transparent>
        <View style={{ backgroundColor: 'rgba(126,126,126,0.55)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: moderateScale(330), width: '90%', backgroundColor: colors.white, borderRadius: moderateScale(10) }}>
                <Text18 mt={moderateScale(20)} fontFamily={fonts.bold} textAlign={'center'} text={'Credit / Debit Card'} />

     
                <View style={{borderWidth:1,width:'90%',alignSelf:'center',overflow:'hidden',borderRadius:moderateScale(8),borderColor:colors.placeholderColor,marginTop:moderateScale(15)}}>
                    <Input fontSize={moderateScale(12)}  placeHolder={'Card Number'} />
                </View>


                <View style={{flexDirection:'row',width:'90%',justifyContent:"space-between",alignSelf:'center'}}>
                <View style={{borderWidth:1,width:'65%',alignSelf:'center',overflow:'hidden',borderRadius:moderateScale(8),borderColor:colors.placeholderColor,marginTop:moderateScale(15)}}>
                    <Input fontSize={12}  placeHolder={'Valid Through (MM/YY)'} />
                </View>
                <View style={{borderWidth:1,width:'30%',alignSelf:'center',overflow:'hidden',borderRadius:moderateScale(8),borderColor:colors.placeholderColor,marginTop:moderateScale(15)}}>
                    <Input keyboardType={1} fontSize={12}  placeHolder={'CVV'} />
                </View>
                </View>

                <View style={{borderWidth:1,width:'90%',alignSelf:'center',overflow:'hidden',borderRadius:moderateScale(8),borderColor:colors.placeholderColor,marginTop:moderateScale(15)}}>
                    <Input fontSize={12}  placeHolder={'Name On Card'} />
                </View>

                <Button onPress={()=>{setCardModal(false)}} mt={moderateScale(20)} text={'Add Card'} />
            </View>
        </View>
    </Modal>
    )
}