import 'react-native-gesture-handler';
import { Image, LogBox, Modal, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainRoutes from './src/routes/MainRoutes'
import Onboarding from './src/screens/onboarding/Onboarding';
import AuthRoutes from './src/routes/AuthRoutes';
import { useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { requestLocationPermission } from './src/utils/Permission';
import Loader from './src/component/modal/Loader';

export default function App() {
  const {stackName}=useSelector((state)=>state.ChangeStackReducer)
  const [modalVisible, setModalVisible] = useState(false);
  const [active,setActive]=useState(null)
  const {modalStatus} = useSelector(state => state.modalReducer);
  const carouselData = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ];


  useEffect(() => {
    SplashScreen.hide()
    requestLocationPermission()
  }, [])
  
  LogBox.ignoreAllLogs()
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'dark-content'} />
    <NavigationContainer>
      {stackName=="MAIN"&&<MainRoutes/>}
      {stackName=="ONBOARDING"&&<Onboarding/>}
      {stackName=="AUTH"&&<AuthRoutes/>}
      {modalStatus && <Loader />}
     </NavigationContainer> 
    </>
  )
}

const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: "pink"
  },
  modalView: {
    width:"100%",
    flex:1,
    position:"absolute",
    bottom:30,
    margin: 20,
    backgroundColor: 'white',
    // borderTopLeftRadius:18,
    // borderTopRightRadius:18,
    padding: 35,
    // height:"40%",
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    // textAlign: 'center',
  },
})