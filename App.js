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

export default function App() {
  const {stackName}=useSelector((state)=>state.ChangeStackReducer)
  const [modalVisible, setModalVisible] = useState(false);
  const [active,setActive]=useState(null)
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
      {/* <MyProfile/> */}
      {/* <CustomMapView
      Marker={true}
      mapStyle={{
       
          flex: 2,
          position: 'absolute',
          top: moderateScale(16),
          left: 0,
          right: 0,
          bottom: '0%',
          zIndex: -1
        
      }}
      /> */}

      {/* <Wallet/> */}
      {/* <AddMoney/> */}
     </NavigationContainer> 

      {/* <Modal transparent>
        <View style={{flex:1,backgroundColor:'rgba(126,126,126,0.55)',justifyContent:'flex-end',}}>
            <View style={{width:width,backgroundColor:colors.white,height:'auto',justifyContent:'end',paddingHorizontal:scale(15),paddingVertical:moderateScale(10)}}>
                <View>
                  <Text16 fontFamily={fonts.bold}  text={'Cancel Ride'}/>
                </View>

                {
                   [
                    'Driver denied to go to destination',
                    'Driver denied to come to pickup',
                    'Expected a shorter wait time',
                    'Unable to contact driver',
                    'My reason is not listed',
                   ].map((ele,ind)=>{
                    return(
                      <TouchableOpacity  onPress={()=>setActive(ind)} style={{flexDirection:"row",alignItems:"center",marginVertical:moderateScale(10)}}>
                        <View>
                          <Image style={{height:active==ind?22:15,width:active==ind?22:15}} resizeMode='cover' source={active==ind?icon.currentLocation:icon.circle}/>
                        </View>
                          <Text14 mt={1} color={colors.theme} text={`  ${ele}`}/>
                      </TouchableOpacity>
                    )
                   })
                }

                {
                  active==4&&
                  <View style={{borderWidth:1,height:moderateScale(80),borderColor:colors.placeholderColor,borderRadius:8,padding:8}}>
                    <TextInput style={{textAlignVertical:'top'}} placeholder='Write your reason'/>
                  </View>
                }

                <Button mt={10} width={'100%'} text={'Cancel Ride'}/>
            </View>
        </View>
      </Modal> */}
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