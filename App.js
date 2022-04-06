import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import routes from './resources/routes';

import store from './redux/store';

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
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false
            }}
            initialRouteName="home">
            <Stack.Screen name={routes.HOME} component={HomeScreen} />
            <Stack.Screen name={routes.FAVORITES} component={FavoritesScreen} />
            <Stack.Screen name={routes.WORD_DETAIL} component={WordDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TouchableWithoutFeedback>
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
