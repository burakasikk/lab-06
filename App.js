import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        <ProfileCard
          name="Mauro Icardi"
          role="Forvet"
          imageSource={require('./assets/icardi.png')}
        />
        
        <ProfileCard
          name="Victor Osimhen"
          role="Forvet"
          imageSource={require('./assets/osimhen.png')}
        />
        
        <ProfileCard
          name="Pocikerim"
          role="Stoper"
          imageSource={require('./assets/apo.png')}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  scrollView: {
    padding: 20,
  },
});