import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>CARTRIDGE KINGS</Text>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <Text style={styles.title}>FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER</Text>
        <View style={styles.dropdownContainer}>
          <TextInput style={styles.dropdown} placeholder="1. Printer Brand" />
          <TextInput style={styles.dropdown} placeholder="2. Printer Series" />
          <TextInput style={styles.dropdown} placeholder="3. Printer Model" />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.buttonText}>FIND CARTRIDGES</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Featured Products */}
      <ScrollView style={styles.featuredSection} horizontal>
        <View style={styles.productCard}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>HP 62 Black Ink Cartridge</Text>
          <Text style={styles.productPrice}>$9.49</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productCard}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>Canon MF-3110 Toner</Text>
          <Text style={styles.productPrice}>$36.45</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchSection: {
    backgroundColor: '#f3f3f3',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  dropdownContainer: {
    width: '100%',
    alignItems: 'center',
  },
  dropdown: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  featuredSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  productCard: {
    width: width * 0.6,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
