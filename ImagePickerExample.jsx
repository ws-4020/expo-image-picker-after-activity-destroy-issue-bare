import React, {useCallback, useState} from 'react';
import {Button, Image, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [cameraImage, setCameraImage] = useState(null);
  const [libraryImage, setLibraryImage] = useState(null);

  const launchCamera = useCallback(async () => {
    // No permissions request is necessary for launching the cameraImage library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setCameraImage(result.uri);
    }
  }, []);

  const launchImageLibrary = useCallback(async () => {
    // No permissions request is necessary for launching the mediaLibrary library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setLibraryImage(result.uri);
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={launchCamera} />
      {cameraImage && <Image source={{ uri: cameraImage }} style={{ width: 100, height: 100 }} />}
      <View style={{height: 10}}/>
      <Button title="Pick an image from media library" onPress={launchImageLibrary} />
      {libraryImage && <Image source={{ uri: libraryImage }} style={{ width: 100, height: 100 }} />}
    </View>
  );
}