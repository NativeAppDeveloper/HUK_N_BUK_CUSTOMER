import { Dimensions } from "react-native";
import { scale } from "react-native-size-matters";
import toastShow from "./Toast";
import { colors } from "./Styles";

export const { width, height } = Dimensions.get('window');


console.log(height, width);

export const iphone8 = height < 670 ? true : false


export const commonPadding=scale(15)


export const errorTost= (msg)=>{
  return  toastShow(msg,colors.red)
}

export const sucessTost= (msg)=>{
  return  toastShow(msg,colors.green)
}


export const showLoader={
  type:'LOADER_STATUS',
  payload:true
}

export const closeLoader={
  type:'LOADER_STATUS',
  payload:false
}