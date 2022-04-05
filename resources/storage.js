import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY = 'b7491528-688a-4d3e-a0fd-6ddb234b9575';


export const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(`@${STORAGE_KEY}_${key}`, JSON.stringify(value))
    } catch (e) {
      console.log(e);
      console.log('Error writing to storage');
    }
}


export const getData = async (key) => {
    try {
      return await AsyncStorage.getItem(`@${STORAGE_KEY}_${key}`);
    } catch (e) {
        console.log('Error reading from storage');
    }
    return null;
}