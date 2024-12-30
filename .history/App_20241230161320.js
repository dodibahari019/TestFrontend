import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const products = [
    { id: 1, name: 'HP 62 Black Ink Cartridge', price: '$9.49', image: require('./assets/hp.png') },
    { id: 2, name: 'Canon MF-3110 Toner', price: '$36.45', image: require('./assets/canon.png') },
    { id: 3, name: 'HP 62 Black Ink Cartridge', price: '$5.99', image: require('./assets/hp.png') },
  ];

  return (
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
            <Image
              source={product.image}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                marginBottom: 10,
              }}
            />

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
  );
}
