import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';
import { Picker } from '@react-native-picker/picker';

const App = ({}) => {
  const [selectedValue, setSelectedValue] = useState("HP");
  const products = [
    { id: 1, name: 'HP 62 Black Ink Cartridge', price: '$9.49' },
    { id: 2, name: 'Canon MF-3110 Toner', price: '$36.45' },
    { id: 3, name: 'HP 62 Black Ink Cartridge', price: '$5.99' },
  ];
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
          style={{ flex:1, resizeMode:'cover', height:250, marginTop:10, padding:5}}
        >
        <View style={{ justifyContent:'center', marginTop:10}}>
            <Text style={{ color:'#fff', fontWeight:'bold', textAlign:'center', fontSize:20, }}>FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER</Text>
        </View>
        <View style={{ backgroundColor:'#fff', marginHorizontal:70, marginTop:10, padding:5, height:120 }}>
          <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%' }}>
            <TouchableOpacity style={{ width:'50%', paddingVertical:10, backgroundColor:'#1e88e5', }}>
              <Text style={{ textAlign:'center', fontWeight:'700', color:'#fff' }}>3-Step Easy Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width:'50%', paddingVertical:10, backgroundColor:'#eeeeee', }}>
              <Text style={{ textAlign:'center', fontWeight:'700', color:'#000' }}>3-Step Easy Search</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop:20, paddingHorizontal:5, width:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
            <View style={{ marginHorizontal:2, width:'25%' }}>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 35, width: 150, }}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="HP" value="HP" />
                <Picker.Item label="Canon" value="Canon" />
                <Picker.Item label="Epson" value="Epson" />
              </Picker>
            </View>
            <View style={{ width:'25%' }}>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 35, width: 150, }}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="HP" value="HP" />
                <Picker.Item label="Canon" value="Canon" />
                <Picker.Item label="Epson" value="Epson" />
              </Picker>
            </View>
            <View style={{ width:'25%' }}>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 35, width: 150, }}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="HP" value="HP" />
                <Picker.Item label="Canon" value="Canon" />
                <Picker.Item label="Epson" value="Epson" />
              </Picker>
            </View>
            <View style={{ justifyContent:'center', alignItems:'center' }}>
              <TouchableOpacity style={{ backgroundColor:'#ff9a1b', marginLeft:10, textAlign:'center', paddingHorizontal:20, paddingVertical:8}}>
              <Text style={{ color:'#fff' }}>FIND CARTRIDGES</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        </ImageBackground>

        {/* Bawah */}
        {/* <View style={{ marginTop:5, width:'100%', flex:1, top:180}}>
          <View style={{ justifyContent:'center', alignItems:'center' }}>
            <Text style={{ color:'#000000', textAlign:'center', fontWeight:'bold' }}>FEATURED PRODUCTS</Text>
          </View>
          <View>

          </View>
        </View> */}
        <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
      {/* Title */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 10,
          color: '#000',
        }}
      >
        FEATURED PRODUCTS
      </Text>

      {/* Horizontal ScrollView */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 5 }}
      >
        {products.map((product) => (
          <View
            key={product.id}
            style={{
              backgroundColor: '#f9f9f9',
              borderRadius: 10,
              width: 150,
              marginRight: 10,
              padding: 10,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            {/* Product Image */}
            {/* <Image
              source={product.image}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                marginBottom: 10,
              }}
            /> */}

            {/* Product Name */}
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 5,
                color: '#000',
              }}
            >
              {product.name}
            </Text>

            {/* Product Price */}
            <Text
              style={{
                fontSize: 14,
                color: '#ff9a1b',
                marginBottom: 10,
              }}
            >
              {product.price}
            </Text>

            {/* Add to Cart Button */}
            <TouchableOpacity
              style={{
                backgroundColor: '#ff9a1b',
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}
              >
                ADD TO CART
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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

export default App;
