// import React, {useState, useEffect} from 'react';
// import {
//   Button,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   View,
//   Text,
//   Platform,
//   PermissionsAndroid,
//   Alert,
// } from 'react-native';
// import {launchImageLibrary} from 'react-native-image-picker';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {useNavigation} from '@react-navigation/native';
// import { styles } from './styles';

// const AddPost = () => {
//   const navigation = useNavigation();
//   const [galleryPhotos, setGalleryPhotos] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     requestStoragePermission();
//   }, []);

//   const requestStoragePermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//           {
//             title: 'Storage Permission Required',
//             message: 'This app needs access to your storage to access photos.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           },
//         );
//         if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//           Alert.alert(
//             'Permission Denied',
//             'Storage permission is required to access photos.',
//           );
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     }
//   };

//   const openImagePicker = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo',
//         selectionLimit: 20,
//       },
//       response => {
//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else if (response.errorMessage) {
//           console.log('ImagePicker Error: ', response.errorMessage);
//         } else if (response.assets && response.assets.length > 0) {
//           const selectedUris = response.assets.map(asset => asset.uri);
//           setGalleryPhotos(selectedUris);
//           setSelectedImage(selectedUris[0]);
//         }
//       },
//     );
//   };

//   const handleImageSelect = imageUri => {
//     setSelectedImage(imageUri);
//   };

//   return (
//     <SafeAreaView style={styles.mainContainer}>
//       <View style={styles.header}>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.goBack();
//           }}
//           style={styles.closeButton}>
//           <Image
//             source={require('../../../assets/icon/close.png')}
//             style={styles.closeImg}
//           />
//         </TouchableOpacity>
//         <View style={styles.newPostContainer}>
//           <Text style={styles.newPostText}>New post</Text>
//           <TouchableOpacity style={styles.nextButton}>
//             <Text style={styles.nextText}>Next</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.subContainer}>
//         {selectedImage ? (
//           <Image
//             source={{uri: selectedImage}}
//             style={styles.selectedImg}
//             resizeMode="contain"
//           />
//         ) : (
//           <Text style={styles.noImgText}>No image selected</Text>
//         )}
//       </View>

//       <View style={styles.bottomHalfContainer}>
//         <FlatList
//           data={galleryPhotos}
//           numColumns={4}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({item}) => (
//             <TouchableOpacity onPress={() => handleImageSelect(item)}>
//               <Image
//                 source={{uri: item}}
//                 style={styles.bottomImg}
//                 resizeMode="cover"
//               />
//             </TouchableOpacity>
//           )}
//         />
//       </View>

//       <Button title="Open Gallery" onPress={openImagePicker} />
//     </SafeAreaView>
//   );
// };

// export default AddPost;


import React, {useState, useEffect} from 'react';
import {
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const AddPost = () => {
  const navigation = useNavigation();
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    requestStoragePermission();
  }, []);

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'This app needs access to your storage to access photos.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert(
            'Permission Denied',
            'Storage permission is required to access photos.',
          );
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const openImagePicker = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 20,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const selectedUris = response.assets.map(asset => asset.uri);
          setGalleryPhotos(selectedUris);
          setSelectedImage(selectedUris[0]);
        }
      },
    );
  };

  const handleImageSelect = imageUri => {
    setSelectedImage(imageUri);
  };

  const goToCaptionScreen = () => {
    if (selectedImage) {
      navigation.navigate('CaptionScreen', { imageUri: selectedImage });
    } else {
      Alert.alert('No Image Selected', 'Please select an image to proceed.');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.closeButton}>
          <Image
            source={require('../../../assets/icon/close.png')}
            style={styles.closeImg}
          />
        </TouchableOpacity>
        <View style={styles.newPostContainer}>
          <Text style={styles.newPostText}>New post</Text>
          <TouchableOpacity style={styles.nextButton} onPress={goToCaptionScreen}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subContainer}>
        {selectedImage ? (
          <Image
            source={{uri: selectedImage}}
            style={styles.selectedImg}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.noImgText}>No image selected</Text>
        )}
      </View>

      <View style={styles.bottomHalfContainer}>
        <FlatList
          data={galleryPhotos}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleImageSelect(item)}>
              <Image
                source={{uri: item}}
                style={styles.bottomImg}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
        />
      </View>

      <Button title="Open Gallery" onPress={openImagePicker} />
    </SafeAreaView>
  );
};

export default AddPost;
