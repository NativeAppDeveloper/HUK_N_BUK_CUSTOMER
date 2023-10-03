const { default: AsyncStorage } = require("@react-native-async-storage/async-storage")


export const getData = async (key) => {
    try {
        let response = await AsyncStorage.getItem(key)
        return JSON.parse(response)
    } catch (error) {
        console.log('getData error');
    }
}

export const setData = async (key,value) => {
    try {
     await AsyncStorage.setItem(key,JSON.stringify(value))
    } catch (error) {
        console.log('getData error');
    }
}

export const deleteAllKeysFromAsyncStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      console.log('All keys have been deleted from AsyncStorage.');
    } catch (error) {
      console.log('Error deleting keys from AsyncStorage:', error);
    }
  };
  

// export const 

