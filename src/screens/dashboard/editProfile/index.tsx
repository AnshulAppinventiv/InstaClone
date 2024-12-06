import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {styles} from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';

const EditProfile = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [imageUri, setImageUri] = useState('');

  const handleBack = () => {
    navigation.navigate('UserProfile', {name, userName, bio, imageUri});
  };
  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo', quality: 1}, (response: any) => {
      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri);
      }
    });
  };
  const handleTakePhoto = () => {
    launchCamera({mediaType: 'photo', quality: 1}, (response: any) => {
      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri);
      }
    });
  };
  const handleRemove = () => {
    setImageUri('');
  };
  const refRBSheet = useRef<any>();

  const handleMoreOption = () => {
    refRBSheet.current.open();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../../../assets/icon/back.png')}
            style={styles.backImg}
          />
        </TouchableOpacity>
        <View style={styles.idContainer}>
          <Text style={styles.id}>Edit Profile</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.profileSection}>
          <Image
            style={styles.profileImage}
            source={
              imageUri
                ? {uri: imageUri}
                : require('../../../assets/icon/profile.jpg')
            }
          />
          <TouchableOpacity onPress={handleMoreOption}>
            <Text style={styles.editPicture}>Edit picture or avatar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
          />

          <Text style={styles.label}>Pronouns</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={[styles.input, styles.bioInput]}
            multiline
            value={bio}
            onChangeText={setBio}
            defaultValue="..."
          />
          <Text style={styles.label}>Links</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Banners</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Gender</Text>
          <TextInput style={styles.input} defaultValue="Male" />
        </View>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask
        useNativeDriver={false}
        draggable={true}
        height={Dimensions.get('window').height / 3.5}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#E5E5E5',
            width: '12%',
          },
          container: {
            borderRadius: 20,
            marginTop: 'auto',
          },
        }}
        onClose={() => console.log('Bottom Sheet closed')}>
        <View>
          <TouchableOpacity style={styles.container2} onPress={openGallery}>
            <View style={styles.container1}>
              <Image
                source={require('../../../assets/icon/gallery2.png')}
                style={styles.iconImageSize}
              />
              <View style={styles.textArrange}>
                <Text style={styles.name}>Upload From Gallery</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container2} onPress={handleTakePhoto}>
            <View style={styles.container1}>
              <Image
                source={require('../../../assets/icon/camera.png')}
                style={styles.iconImageSize}
              />
              <View style={styles.textArrange}>
                <Text style={styles.name}>Open Camera</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container2} onPress={handleRemove}>
            <View style={styles.container1}>
              <Image
                source={require('../../../assets/icon/trash.png')}
                style={styles.iconImageSize}
              />
              <View style={styles.textArrange}>
                <Text style={styles.name}>Remove Icon</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};
export default EditProfile;
