import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import BackHandler from '../../../component/BackHandler'
import Text18 from '../../../component/customText/Text18'
import { moderateScale } from 'react-native-size-matters'
import Text14 from '../../../component/customText/Text14'

const AboutApp = ({ route }) => {
    const paramData = route?.params?.screen
    let dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
    .`

    const title = () => {
        if (paramData == 'About') {
            return 'About Huk n Buk'
        }
        else if (paramData == 'Term & Conditions') {
            return 'Terms'
        }
        else if (paramData == "Privacy Policy") {
            return "Privacy Policy"
        }
        else {
            return "Refund Policy"
        }
    }

    const title2 = () => {
        if (paramData == 'About') {
            return 'Lorem ipsum dolor sit amet'
        }
        else if (paramData == 'Term & Conditions') {
            return 'Changes to the Service and/or Terms:'
        }
        else if (paramData == "Privacy Policy") {
            return "Lorem ipsum dolor sit amet"
        }
        else {
            return "Return"
        }
    }
    return (
        <View style={[CommonStyle.container]}>
            <BackHandler name={paramData=="About"?'About Us':paramData} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: moderateScale(10) }}>
                    {
                        //#region  content

                        <View>
                            <Text18 fontFamily={fonts.bold} text={title()} />
                            <View style={{ marginTop: moderateScale(10) }}>
                                <Text14 fontFamily={fonts.regular} color={colors.gray} text={dummyText} />
                                <Text14 mt={10} fontFamily={fonts.regular} color={colors.gray} text={dummyText} />
                            </View>
                        </View>
                        //#endregion
                    }

                    {
                        //#region other conten
                        <View>
                            <Text18 fontFamily={fonts.bold} text={title2()} />
                            <View style={{ marginTop: moderateScale(10) }}>
                                <Text14 fontFamily={fonts.regular} color={colors.gray} text={dummyText} />
                                <Text14 mt={10} fontFamily={fonts.regular} color={colors.gray} text={dummyText} />
                            </View>
                        </View>
                        //#endregion
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default AboutApp