import { Alert } from "react-native/types";

export default Validator = {
    isEmail: (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    isEmpty: (string) => {
        return string.trim() === ""
    },
    isName: (string) => {
        const re = /^[a-zA-Z ]+$/
        return re.test(string)
    },
    isphoneNumber: (string) => {
        console.log("number", string);
        // let reg =  /^\d{13}$/g.test(+string);
        // console.log("reg",reg);
        return string.length > 7 && string.length < 14 ? false : true
    },
    isAlphabet: (string) => {
        const re = /^[a-zA-Z() ]+$/
        return re.test(string)
    },
    isFormattedNumberEmpty: (string) => {
        console.log(string.length)
        return string.length < 2 ? false : true
    },
    isFormattedNumber: (string) => {
        return string.length == 13 ? false : true
    }
}