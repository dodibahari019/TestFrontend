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
      <ScrollView style={{ marginTop:'8%', borderWidth:0, width:'60%' }}>
        <View style={{ flexDirection:'row', padding:10, justifyContent:'space-between', alignItems:'center', width:'100%' }}>
          <View>
            <Image
              source={require('./assets/test2.png')}
              style={{ width: 200, height: 60 , elevation:20, resizeMode: 'contain',}}
            />
          </View>
          <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', }}>
            <TextInput style={{ borderWidth:1, padding:5, width:299, height:8, marginRight:10 }} />
            <TouchableOpacity style={{ backgroundColor:'#ff9a1b', marginLeft:10, paddingHorizontal:20, paddingVertical:8}}>
              <Text style={{ color:'#fff' }}>Cart (1)</Text>
            </TouchableOpacity>
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
