import Geolocation from 'react-native-geolocation-service';
import { GOOGLE_API_KEY } from './Urls';
// import { GOOGLE_API_KEY } from './Urls';


export const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            position => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            error => reject(error),
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
        );
    });
};



 export const getLocationFromCoordinates = async (latitude, longitude) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.status === 'OK') {
        // Extract relevant address components
        const { results } = data;
        const addressComponents = results[0].address_components;
        const formattedAddress = results[0].formatted_address; // Full address

        console.log(addressComponents,'here');
        // Find the locality and country
        // let locality = '';
        let country = '';
        let state = ''
        let pincode = '';
        let city=''

        for (let component of addressComponents) {
          if (component.types.includes('locality')) {
            city = component.long_name;
          }
          if (component.types.includes('country')) {
            country = component.long_name;
          }
          if (component.types.includes('postal_code')) {
            pincode = component.long_name;
          }
          if (component.types.includes('administrative_area_level_1') || component.types.includes('administrative_area_level_2')) {
            state = component.long_name;
          }
        }
  

        let objToSend = {
          Location: {
            coordinates: [longitude, latitude],
          },
          pincode: pincode,
          place: formattedAddress,
          city: city,
          country: country,
          state: state,
          latitude: latitude,
          longitude: longitude,
        };

        return objToSend
        // return { locality, country ,pincode,formattedAddress,state};
      } else {
        throw new Error('Unable to retrieve location');
      }
    } catch (error) {
      throw new Error('Error retrieving location: ' + error.message);
    }
  };
  