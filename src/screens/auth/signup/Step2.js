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
import { CheckIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native'
import { errorTost } from '../../../utils/Helper'
import { signUpDetails } from '../../../utils/localVariable'

const Step2 = () => {
    const navigation=useNavigation()
    const [select, setSelectd] = useState(null)

    const nextHandler=()=>{

        if(select==null){
            errorTost('Please select gender')
            return
        }
        signUpDetails.gender=select
        navigation.navigate('Step3')
    }
    return (
        <SafeAreaView>
            <View style={{ width: "90%", alignSelf: 'center' }}>
                {
                    //#region header
                    <SignupSeteps step={'Step 2/5'} />
                    //#endregion
                }

                {
                    //#region  headet text
                    <View style={{ marginTop: moderateVerticalScale(20) }} >
                        <Text24 color={colors.theme} text={'Gender'} />
                        <Text14
                            fontFamily={fonts.regular}
                            color={colors.secondry} text={`Select Gender`} />
                    </View>
                    //#endregion
                }


                <View style={{ alignSelf: 'center', width: '100%' }}>
                    {
                        //#region Name Components
                        <View style={{ width: '100%' }}>
                            {
                                [{ lable: 'Male', value: 'male' }, { lable: 'Female', value: 'male' }, { lable: 'Other', value: 'male' }].map((data, ind) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => setSelectd(data.lable)}
                                            style={{ backgroundColor: colors.white, marginVertical: moderateVerticalScale(10), padding: moderateScale(10), borderRadius: moderateScale(6), borderWidth: 1, borderColor: select == data.lable ? colors.yellow : colors.white, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}
                                            key={ind}
                                        >
                                            <Text14
                                                color={colors.theme}
                                                text={data.lable} />
                                           {select==data.lable&& <CheckIcon size={moderateScale(20)} color={colors.theme} />}
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                        //#endregion
                    }

                    {
                        //#region  Next Button
                        <View>
                            <Button
                                onPress={() =>nextHandler()}
                                width={'100%'}
                                mt={moderateVerticalScale(20)}
                                text={'Next'}
                            />
                        </View>
                        //#region 
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Step2



