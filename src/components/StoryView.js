import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vw, vh} from '../utils/dimension';

const StoryView = ({route}) => {
  console.log(route.params);
  const selectedItem = route.params.item;
  const navigation = useNavigation();
  const currentTime = new Date();
  const currentHr = currentTime.getHours();
  const storyTime = currentHr - selectedItem.story.time;
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.goBack();
    }, 1000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Image style={styles.profileImg} source={selectedItem.profile} />
        <Text style={{fontSize: 18, fontWeight: 700, color: 'white'}}>
          {selectedItem.name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 600,
            marginLeft: 10,
            color: 'white',
          }}>
          {storyTime}hr
        </Text>
      </View>
      <View style={{position: 'absolute'}}>
        <Image
          source={selectedItem.story.image}
          style={{
            height: screenHeight - 100,
            width: screenWidth,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        />
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'white',
              width: 300,
              paddingHorizontal: 15,
              color: 'white',
              borderRadius: 30,
              marginHorizontal: 30,
            }}
            placeholder="Message"
            placeholderTextColor={'white'}
          />
          <TouchableOpacity>
            <Image
              style={{tintColor: 'white', marginRight: 10}}
              source={require('../assets/icon/share.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    paddingTop: vh(12),
    paddingLeft: vw(12),
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});
