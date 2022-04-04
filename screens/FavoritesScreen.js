import { StyleSheet, View, Text } from 'react-native';

import Navbar from '../components/common/Navbar';
import GradientBackground from '../components/common/GradientBackground';
import Accordion from '../components/common/Accordion';
import FavoritesList from '../components/favorites-screen/FavoritesList';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <GradientBackground />
      <Navbar/>
      <FavoritesList />
      {/*
      <View style={styles.main}>
        <Text style={styles.title}>Favorites</Text>
        <Accordion title="wow" style={styles.accordion}>
          <Text style={styles.override}>yeah</Text>
        </Accordion>
      </View>
       */}
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
