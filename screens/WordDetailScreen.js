import { StyleSheet, View } from 'react-native';

import Navbar from '../components/common/Navbar';
import WordDetail from '../components/word-detail/WordDetail';
import GradientBackground from '../components/common/GradientBackground';

export default function WordDetailScreen ({ navigation, route }) {
  return (
    <View style={styles.container}>
      <GradientBackground />
      <Navbar navigation={navigation} route={route}/>
      <WordDetail navigation={navigation} route={route}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
