import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import WordDetailScreen from './screens/WordDetailScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  /*
      <View style={styles.container}>
        <GradientBackground />
        <FavoritesScreen />
      </View>
  */

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="home">
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="favorites" component={FavoritesScreen} />
          <Stack.Screen name="worddetail" component={WordDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
