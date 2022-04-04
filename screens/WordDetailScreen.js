import { StyleSheet, View } from 'react-native';

import Navbar from '../components/common/Navbar';
import WordDetail from '../components/word-detail-screen/WordDetail';
import GradientBackground from '../components/common/GradientBackground';

export default function WordDetailScreen () {
  return (
    <View style={styles.container}>
      <GradientBackground />
      <Navbar/>
      <WordDetail />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
