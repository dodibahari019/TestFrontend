import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

cont [width, hei] = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <View style={{ width:'100%', position:'absolute', top:0, backgroundColor:'#eeeeee' }}>
        <Text>Hello World</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
