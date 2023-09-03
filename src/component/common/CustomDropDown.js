import { View, Text ,StyleSheet, TextInput,Image, Platform} from 'react-native';
import React, { useState,useContext } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { moderateScale } from 'react-native-size-matters';
import { colors, fonts } from '../../utils/Styles';
// import { colorConstants } from '../utils/constants';
// import { scaleToDeviceHeight } from '../utils/responsive';
const CustomDropDown = (props) => {
 
    const data1 = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' }
      ];
  return (

          <Dropdown
            showsVerticalScrollIndicator={false}
              data={props.dropDownData ? props.dropDownData : data1 }
              labelField={props.labelField ? props.labelField : "label"}
              valueField={props.valueField ? props.valueField : "value"}
              maxHeight={300}
              onChange={props.onChange}
              autoScroll={props.autoScroll}
              dropdownPosition="bottom"
              disable={props.disable}
              selectedTextStyle={{
                color:colors.black,
                marginLeft:10,
                fontFamily:fonts.medium
              }}
              value={props.value}
              containerStyle={{
                // borderColor:colorConstants.placeholder,
                borderWidth:0.8,
                borderRadius:10,
                backgroundColor:"#F3F7F9",
                // color:colorConstants.black
                // 
              }}
              style={{
                width: props.width ? props.width : "90%",
                alignSelf:"center",
                height:moderateScale(50),
                borderWidth:props.borderWidth?props.borderWidth:1,
                borderColor: props.borderColor ? props.borderColor:colors.placeholderColor,
                borderRadius: props.borderRadius ? props.borderRadius:8,
                // paddingHorizontal:8,
                marginTop:props.marginTop ? props.marginTop:15,
                marginBottom:props.marginBottom,
                marginVertical:props.marginVertical,
                fontFamily:fonts.medium,
                color:colors.black
                // color:colorConstants.black,
                // backgroundColor:colorConstants.white
              }}
              iconStyle={{
                //   tintColor: colorConstants.black,
              }}
              activeColor={{
                  color: "blue"
              }}
              placeholder={props.placeholder ? props.placeholder :"--Select --"}
              placeholderStyle={{ 
                  fontSize:14, 
                  color:colors.gray,
                   marginLeft:10
                }}
                itemTextStyle={{
                    fontSize:12,
                    color:'#727272',
                    fontFamily:fonts.medium
                }}
               
          />

  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
    img:{
        width:20,
        height:20,
    },
    img1:{
        width:24,
        height:18
    },
    placeholderStyle:{

    }
})