import React from 'react';
import {StyleSheet, View} from 'react-native';
import ImagePickerExample from "./ImagePickerExample";

export default function App() {
  return (
    <View style={styles.container}>
      <ImagePickerExample />
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
