import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { retrieveFavoritesFromStorage } from '../redux/actions/favorites';

import Navbar from '../components/common/Navbar';
import Main from '../components/home/Main';
import GradientBackground from '../components/common/GradientBackground';

export default function HomeScreen({ navigation, route }) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(retrieveFavoritesFromStorage());
  }, []);

  return (
    <View style={styles.container}>
      <GradientBackground />
      <Navbar navigation={navigation} route={route}/>
      <Main navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
