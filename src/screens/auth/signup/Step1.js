import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateVerticalScale, scale } from 'react-native-size-matters'
import Text24 from '../../../component/customText/Text24'
import Text14 from '../../../component/customText/Text14'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import Input from '../../../component/customInput/Input'
import Button from '../../../component/customButton/Button'
import { icon } from '../../../utils/Image'
import SignupSeteps from '../../../component/common/SignupSeteps'
import { useNavigation } from '@react-navigation/core'

const Step1 = () => {
    const [step,setStep]=useState(1)
    const navigation=useNavigation()
    return (
        <SafeAreaView>
            <View style={{width:"90%",alignSelf:'center'}}>
            {
                //#region header
                <SignupSeteps 
                
                step={'Step 1/5'}/>
                //#endregion
            }

            {
                //#region  headet text
                <View style={{marginTop:moderateVerticalScale(20)}} >
                <Text24 color={colors.theme} text={'Enter Your Name'}/>
                <Text14 
                fontFamily={fonts.regular}
                color={colors.secondry} text={`Please provide your complete name `}/>
                </View>
                //#endregion
            }

            
            <View style={{alignSelf: 'center',width:'100%' }}>
                {
                    //#region Name Components
                    <View style={{width:'100%'}}>
                        <Input 
                        placeHolder={'First Name'}
                        mt={moderateVerticalScale(30)}

                        />
                        <Input 
                        placeHolder={'Last Name'}
                        mt={moderateVerticalScale(20)}
                        />

                    </View>
                    //#endregion
                }

                {
                    //#region  Next Button
                    <View>
                        <Button 
                        onPress={()=>navigation.navigate('Step2')}
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

export default Step1



