import { Platform } from 'react-native';
import Toast from 'react-native-root-toast';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from './Styles';

const toastShow=(message,type,color)=>{
    Toast.show(message, {
        
        position:Platform.OS =='ios'? 80 :50,
        shadow: true,
        animation: true,
        hideOnPress: true,
        textColor:color == "" ? "#FFFFFF" : color ,
        delay: 0,
        textStyle:{
            fontSize:moderateScale(14),
            fontFamily:fonts.medium
        },
        
        backgroundColor:type,
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        }
    });
}

export default toastShow