import { StyleSheet, View } from 'react-native';

import Navbar from '../components/common/Navbar';
import Main from '../components/home-screen/Main';
import GradientBackground from '../components/common/GradientBackground';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <GradientBackground />
      <Navbar/>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
