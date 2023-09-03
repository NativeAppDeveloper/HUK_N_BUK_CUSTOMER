import { Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

export const { width, height } = Dimensions.get('window');


console.log(height, width);

export const iphone8 = height < 670 ? true : false


export const commonPadding=scale(15)