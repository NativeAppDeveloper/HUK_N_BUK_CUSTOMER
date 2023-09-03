import { View, ScrollView, StyleSheet, Dimensions, Text, ImageBackground, Image } from 'react-native';

export const colors={
    theme:'#222E50',
    yellow:'#FCCB06',
    black:'black',
    white:'#ffff',
    placeholderColor:'#B2B5C4',
    gray:'gray',
    red:'red',
    green:'green',
    blue:'#70A6E8',
    orange:'#F7954A',
    bg:'#f6f6f6',
    secondry:'#8E92A8',
    borderC:'#E4E9F2'
}

export const fonts={
    // 800
    bold:'Inter-Bold',
    // 700
    extraBold:'Inter-ExtraBold',
    // 600
    semibold:'Inter-SemiBold',

    medium:'Inter-Medium',
    // 400
    regular:'Inter-Regular',
    // 300
    light:'Inter-Light',
    extraLight:'Inter-ExtraLight',
    thin:'Inter-Thin',

    // urbanExtraBold:'Urbanist-Medium',
    // urbanBold:'Urbanist-Bold',
    // urbanSemiBold:'Urbanist-SemiBold',
    // urbanMedium:'Urbanist-Medium',
    // urbanRegular:'Urbanist-Regular',
    // urbanLight:'Urbanist-Light'
}

export const CommonStyle = StyleSheet.create({
    img:{
        height:'100%',
        width:'100%'
    },
    alCenter:{
        alignItems:'center',
    },
    container:{
        flex:1,
        backgroundColor:colors.white
    }
})