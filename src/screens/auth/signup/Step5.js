import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import Text24 from '../../../component/customText/Text24'
import Text14 from '../../../component/customText/Text14'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import Input from '../../../component/customInput/Input'
import Button from '../../../component/customButton/Button'
import { icon } from '../../../utils/Image'
import SignupSeteps from '../../../component/common/SignupSeteps'
import { useNavigation } from '@react-navigation/core'
import Validator from '../../../utils/Validator'
import { errorTost } from '../../../utils/Helper'

const Step5 = () => {
    const [step, setStep] = useState(1)
    const navigation = useNavigation()
    const [mobileNo,setMobileNo]=useState('')


    const nextHandler=()=>{
        navigation.navigate('MobileOptVerify',{flow:'phone',value:mobileNo})
return
     if(mobileNo==''){
        errorTost('Please enter mobile number')
        return
     }
     if(mobileNo.length<10){
        errorTost('Please enter valid mobile number')
        return
     }
     else{
        navigation.navigate('Otp',{flow:'phone',value:mobileNo})
     }

    }
    return (
        <SafeAreaView>
            <View style={{ width: "90%", alignSelf: 'center' }}>
                {
                    //#region header
                    <SignupSeteps

                        step={'Step 5/5'} />
                    //#endregion
                }

                {
                    //#region  headet text
                    <View style={{ marginTop: moderateVerticalScale(20) }} >
                        <Text24 text={'Enter Your Mobile No.'} />
                        {/* <Text14
                            fontFamily={fonts.regular}
                            color={colors.gray} text={`Please provide your complete name `} /> */}
                    </View>
                    //#endregion
                }


                <View style={{ alignSelf: 'center', width: '100%' }}>
                    {
                        //#region Name Components
                        <View style={{ width: '100%' }}>
                            <Input
                            maxLength={10}
                            onChangeText={(val)=>setMobileNo(val)}
                            value={mobileNo}
                            keyboardType={'numeric'}
                                placeHolder={'Enter Mobile No.'}
                                mt={moderateVerticalScale(30)}
                            />

                        </View>
                        //#endregion
                    }

                    {
                        //#region  Next Button
                        <View>
                            <Button
                                onPress={() => nextHandler()}
                                width={'100%'}
                                mt={moderateVerticalScale(20)}
                                text={'Submit'}
                            />
                        </View>
                        //#region 
                    }


                    <View style={{ marginTop: moderateScale(30) }}>
                        <Text14 textAlign='center' color={colors.gray} fontFamily={fonts.regular} text={`By regestering, you are agreeing to Mobox’s `} />
                        <Text style={{ textAlign: 'center', color: "black", fontFamily: fonts.regular }}>Terms & Conditions <Text14 color={colors.gray} text={' and '} /> Privacy and Polcies</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Step5



