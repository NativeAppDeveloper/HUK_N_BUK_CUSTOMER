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

const Step4 = () => {
    const [step, setStep] = useState(1)
    const [email,setEmail]=useState('')
    const navigation = useNavigation()

    const nextHandler=()=>{
        navigation.navigate('Otp',{flow:'email',value:email})
return
        Validator.isEmpty(email)?
        errorTost('Please enter email')
        :
        !Validator.isEmail(email)?
        errorTost('Please enter valid email')
        :
        // console.log(';yes')
        navigation.navigate('Otp',{flow:'email',value:email})

    }
    return (
        <SafeAreaView>
            <View style={{ width: "90%", alignSelf: 'center' }}>
                {
                    //#region header
                    <SignupSeteps

                        step={'Step 1/4'} />
                    //#endregion
                }

                {
                    //#region  headet text
                    <View style={{ marginTop: moderateVerticalScale(20) }} >
                        <Text24 text={'Enter Your Email'} />
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
                                value={email}
                                onChangeText={(val)=>setEmail(val)}
                                placeHolder={'Enter Email'}
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

export default Step4



