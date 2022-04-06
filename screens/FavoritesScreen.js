import { StyleSheet, View } from 'react-native';
import Navbar from '../components/common/Navbar';
import GradientBackground from '../components/common/GradientBackground';
import FavoritesList from '../components/favorites/FavoritesList';

export default function FavoritesScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <GradientBackground />
      <Navbar navigation={navigation} route={route}/>
      <FavoritesList navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      color: '#1976d2',
      marginBottom: 30,
      fontSize: 35
  },
  accordion: {
    flexDirection: 'column',
    width: '90%',
    backgroundColor: 'red'
  },
  override: {
    
  }
});
