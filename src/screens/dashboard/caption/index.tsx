/* eslint-disable no-alert */
import React, { useState } from 'react';
import { TextInput, Button, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CaptionScreen = () => {
  const [caption, setCaption] = useState('');
  const route = useRoute();
  const navigation = useNavigation();
  const { imageUri } = route.params;

  const handlePost = () => {
    if (caption) {
      navigation.navigate('UserProfile', {
        newPost: { image: imageUri, caption: caption },
      });
    } else {
      alert('Please add a caption');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <TextInput
        placeholder="Write a caption..."
        style={styles.captionInput}
        value={caption}
        onChangeText={text => setCaption(text)}
      />
      <Button title="Post" onPress={handlePost} />
    </SafeAreaView>
  );
};

export default CaptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  captionInput: {
    height: 50,
    borderColor: '#ccc',
    fontSize:18,
    marginBottom: 16,
    padding: 8,
  },
});
