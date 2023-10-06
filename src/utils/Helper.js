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


export const compareLatLng=(lat1, lon1, lat2, lon2)=> {
  // Calculate the difference in latitude and longitude between the two points.
  const dlat = lat2 - lat1;
  const dlon = lon2 - lon1;

  // Calculate the distance between the two points using the Haversine formula.
  const distance = 6371.01 * Math.acos(
      Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(dlon));

  // Calculate the bearing between the two points.
  const bearing = Math.atan2(dlon, dlat);

  // Convert the bearing from radians to degrees.
  const bearingInDegrees = bearing * 180.0 / Math.PI;

  // Return the distance and bearing in degrees.

  return distance
  // return {
  //   distance: distance,
  //   bearing: bearingInDegrees
  // };
}


export function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  // Convert latitude and longitude from degrees to radians
  const lat1Rad = lat1 * (Math.PI / 180);
  const lon1Rad = lon1 * (Math.PI / 180);
  const lat2Rad = lat2 * (Math.PI / 180);
  const lon2Rad = lon2 * (Math.PI / 180);

  // Haversine formula
  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the distance
  const distance = earthRadius * c; // Distance in kilometers
  return distance;
}

// Example usage:
const distance = calculateDistance(52.5200, 13.4050, 48.8566, 2.3522); // Berlin to Paris
console.log(`Distance: ${distance.toFixed(2)} km`);




export const checkArray=(arr)=>{
  if(arr==undefined||arr==null){
      return false
  }
  if(arr.length==0){
      return false
  }
  return true
}


export const isValidObject=(obj)=> {
  if(obj!==null && obj!==undefined && Object.keys(obj).length>0){
      return true
  }
  else{
      return false
  }
}


export const LOG_COLORS = {
  green: "\x1b[38;5;2m",
  red:"\x1b[38;5;9m",
  yellow:"\x1b[38;5;11m",
  pink:"\x1b[38;5;13m",
  dark:"\x1b[38;5;1m",
  blue:"\x1b[38;5;21m"
}


export const calculatePrice=(distance,totalKm)=>{
  let price = distance * totalKm
  return price.toFixed(0)
}