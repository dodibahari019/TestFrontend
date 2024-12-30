import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';
import { Picker } from '@react-native-picker/picker';

const App = ({}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'HP', value: 'HP' },
    { label: 'Canon', value: 'Canon' },
    { label: 'Epson', value: 'Epson' },
  ]);
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
      <ScrollView style={{ marginTop:'4%', borderWidth:0, width:'60%' }}>
        <View style={{ flexDirection:'row', padding:10, justifyContent:'space-between', alignItems:'center', width:'100%' }}>
          <View>
            <Image
              source={require('./assets/test2.png')}
              style={{ width: 200, height: 60 , elevation:20, resizeMode: 'contain',}}
            />
          </View>
          <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', }}>
            <TextInput style={{ borderWidth:1, padding:5, width:300, height:35, marginRight:10 }} />
            <TouchableOpacity style={{ backgroundColor:'#ff9a1b', marginLeft:10, paddingHorizontal:20, paddingVertical:8}}>
              <Text style={{ color:'#fff' }}>Cart (1)</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tab */}
        <View style={{ marginTop:5, flexDirection:'row', width:'100%'}}>
          <TouchableOpacity style={{ backgroundColor:'#1e88e5', borderWidth:0.05, borderColor:'#FFF', width:'15%', paddingHorizontal:20, paddingVertical:8}}>
            <Text style={{ color:'#fff' }}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor:'#1e88e5', borderWidth:0.05, borderColor:'#FFF', width:'24%', paddingHorizontal:20, paddingVertical:8}}>
            <Text style={{ color:'#fff' }}>INK CATEGORI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor:'#1e88e5', borderWidth:0.05, borderColor:'#FFF', width:'24%', paddingHorizontal:20, paddingVertical:8}}>
            <Text style={{ color:'#fff' }}>TONER CARTRIDGES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor:'#1e88e5', borderWidth:0.05, borderColor:'#FFF', width:'17%', paddingHorizontal:20, paddingVertical:8}}>
            <Text style={{ color:'#fff' }}>CONTACT US</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor:'#1e88e5', borderWidth:0.05, borderColor:'#FFF', width:'20%', paddingHorizontal:20, paddingVertical:8}}>
            <Text style={{ color:'#fff' }}>LOGIN REGISTER</Text>
          </TouchableOpacity>
        </View>

        {/* GAMBAR */}
         <ImageBackground
          source={require('./assets/main.jpg')} // Ganti URL dengan gambar background yang Anda inginkan
          style={{ flex:1, resizeMode:'cover', height:300, marginTop:10, padding:5}}
        >
        <View style={{ justifyContent:'center', marginTop:10}}>
            <Text style={{ color:'#fff', fontWeight:'bold', textAlign:'center', fontSize:20, }}>FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER</Text>
        </View>
        <View style={{ backgroundColor:'#fff', marginHorizontal:70, marginTop:10, padding:5, height:150 }}>
          <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%' }}>
            <TouchableOpacity style={{ width:'50%', paddingVertical:10, backgroundColor:'#1e88e5', }}>
              <Text style={{ textAlign:'center', fontWeight:'700', color:'#fff' }}>3-Step Easy Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width:'50%', paddingVertical:10, backgroundColor:'#eeeeee', }}>
              <Text style={{ textAlign:'center', fontWeight:'700', color:'#000' }}>3-Step Easy Search</Text>
            </TouchableOpacity>
             <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Select Printer Brand"
                style={styles.dropdown}
                dropDownStyle={styles.dropdownList}
              />
          </View>
        </View>
        </ImageBackground>
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

export default App;
