import axios from "axios";
// import firebaseGoogleSignInInstance from "./FirebaseServices";
import { getData } from "./AsyncServices";
import toastShow from "../utils/Toast";
import { colors } from "../utils/Styles";
axios.interceptors.request.use(
    async (config) => {
      try {
        // const token = await getData('token');
        // config.headers['x-auth-token'] = token;
        // console.log(token,'Token from axios')
        return config;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

  axios.interceptors.response.use(
    async function (response) {
      // Do something with successful response data
      return response;
    },
    async function (error) {
      // Do something with error response
      toastShow(error.response.data.message,colors.red)
      if (error.response.data.error.message == "Token has been expired. Kindly relogin!") {
        // call signout function here
      //  await firebaseGoogleSignInInstance.googleLogoutService()
      }
      return Promise.reject(error);
    }
  );
  

export default axios


  