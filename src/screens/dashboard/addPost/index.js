// import {Button, Alert, Image} from 'react-native';
// import React, {useState} from 'react';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import { vh,vw } from '../../../utils/dimension';

// const Search = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   console.log(selectedImage);

//   const handleImagePicker = () => {
//     Alert.alert(
//       'Select Image',
//       'Choose an option:',
//       [
//         {
//           text: 'Open Camera',
//           onPress: () => openCamera(),
//         },
//         {
//           text: 'Open Image Library',
//           onPress: () => openImageLibrary(),
//         },
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//       ],
//       {cancelable: true},
//     );
//   };

//   const openCamera = () => {
//     const options = {
//       mediaType: 'photo',
//       maxWidth: 300,
//       maxHeight: 300,
//       quality: 1,
//     };

//     launchCamera(options, handleImageResponse);
//   };

//   const openImageLibrary = () => {
//     const options = {
//       mediaType: 'photo',
//       maxWidth: 300,
//       maxHeight: 300,
//       quality: 1,
//     };

//     launchImageLibrary(options, handleImageResponse);
//   };

//   const handleImageResponse = response => {
//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     } else if (response.uri) {
//       setSelectedImage(response.uri);
//     }
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       {selectedImage && (
//         <Image
//           source={{uri: selectedImage}}
//           style={{width: vw(200), height: vh(200)}}
//         />
//       )}
//       <Button title="Select Image" onPress={handleImagePicker} />
//     </SafeAreaView>
//   );
// };

// export default Search;





// import React, {useState} from 'react';
// import {Button, Image, FlatList, TouchableOpacity, View, Text} from 'react-native';
// import {launchImageLibrary} from 'react-native-image-picker';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {vh, vw} from '../../../utils/dimension';

// const AddPost = () => {
//   const [galleryPhotos, setGalleryPhotos] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Function to open image picker and select multiple images from the gallery
//   const openImagePicker = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo',
//         selectionLimit: 20, // Limit to selecting 20 images at a time
//       },
//       (response) => {
//         if (response.assets && response.assets.length > 0) {
//           const selectedUris = response.assets.map((asset) => asset.uri); // Extract URIs from response
//           setGalleryPhotos(selectedUris);
//           setSelectedImage(selectedUris[0]); // Set the first image as selected by default
//         }
//       }
//     );
//   };

//   // Function to handle image selection from the grid
//   const handleImageSelect = (imageUri) => {
//     setSelectedImage(imageUri);
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       {/* Top Half - Display last clicked/downloaded image */}
//       <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
//         {selectedImage ? (
//           <Image
//             source={{uri: selectedImage}}
//             style={{width: '100%', height: '100%'}}
//             resizeMode="contain"
//           />
//         ) : (
//           <Text style={{fontSize: 16, color: 'grey'}}>No image selected</Text>
//         )}
//       </View>

//       {/* Bottom Half - Gallery photos displayed in a grid */}
//       <View style={{flex: 0.5}}>
//         <FlatList
//           data={galleryPhotos}
//           numColumns={4}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({item}) => (
//             <TouchableOpacity onPress={() => handleImageSelect(item)}>
//               <Image
//                 source={{uri: item}}
//                 style={{width: vw(91.4), height: vh(120), margin: vw(1)}}
//                 resizeMode="cover"
//               />
//             </TouchableOpacity>
//           )}
//         />
//       </View>

//       {/* Button to open image picker */}
//       <Button title="Open Gallery" onPress={openImagePicker} />
//     </SafeAreaView>
//   );
// };

// export default AddPost;






import React, {useState, useEffect} from 'react';
import {Button, Image, FlatList, TouchableOpacity, View, Text, Platform, PermissionsAndroid, Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vh, vw} from '../../../utils/dimension';

const AddPost = () => {
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
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission Denied', 'Storage permission is required to access photos.');
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
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const selectedUris = response.assets.map((asset) => asset.uri);
          setGalleryPhotos(selectedUris);
          setSelectedImage(selectedUris[0]);
        }
      }
    );
  };

  const handleImageSelect = (imageUri) => {
    setSelectedImage(imageUri);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        {selectedImage ? (
          <Image
            source={{uri: selectedImage}}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        ) : (
          <Text style={{fontSize: 16, color: 'grey'}}>No image selected</Text>
        )}
      </View>

      {/* Bottom Half - Gallery photos displayed in a grid */}
      <View style={{flex: 0.5}}>
        <FlatList
          data={galleryPhotos}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleImageSelect(item)}>
              <Image
                source={{uri: item}}
                style={{width: vw(91.4), height: vh(120), margin: vw(1)}}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Button to open image picker */}
      <Button title="Open Gallery" onPress={openImagePicker} />
    </SafeAreaView>
  );
};

export default AddPost;
