import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <View style={{ width:'100%', height:'8%', flexDirection:'row', justifyContent:'space-between', position:'absolute', top:0, backgroundColor:'#eeeeee', justifyContent:'center', alignItems:'center' }}>
        <View style={{ flexDirection:'row', justifyContent:'flex-start' }}>
          <TouchableOpacity style={{ marginHorizontal:20 }}>
            <Text style={{ color:'#000000' }}>Frenchise Opportunities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal:20 }}>
            <Text style={{ color:'#000000' }}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal:20 }}>
            <Text style={{ color:'#000000' }}>Feedback</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection:'row', justifyContent:'flex-end' }}>
          <TouchableOpacity style={{ marginHorizontal:20 }}>
            <Text style={{ color:'#000000' }}>Hello@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal:20 }}>
            <Text style={{ color:'#000000' }}>0800 022 2 022</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <ScrollView style={{ marginTop:'8%' }}>
        <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
          <View>
            <Image
              source={require('./assets/test2.png')}
              style={{ width: 200, height: 60 , elevation:20, resizeMode: 'contain',}}
            />
          </View>
          <View>
            <TextInput style={{ borderWidth:1 }} />
          </View>
          <View>
            <TouchableOpacity style={{ border }}></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
