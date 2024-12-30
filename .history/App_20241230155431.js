import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [selectedValue, setSelectedValue] = useState("HP");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Printer Brand:</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="HP" value="HP" />
        <Picker.Item label="Canon" value="Canon" />
        <Picker.Item label="Epson" value="Epson" />
      </Picker>
      <Text style={styles.result}>Selected: {selectedValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 200,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
});
