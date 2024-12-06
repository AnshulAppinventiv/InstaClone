import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {UserData} from '../utils/UserData';
import {SCREEN_WIDTH, vh, vw} from '../utils/dimension';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const Stories = ({navigation}) => {
  const renderItem = ({item,index}) => {
    return (
      <View style={styles.storyContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StoryView', {index})}>
          <MaskedView
            style={styles.maskedView}
            maskElement={<View style={styles.storyView} />}>
            <LinearGradient
              colors={['#ff6a00', '#ee0979', 'yellow']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.gradient}
            />
          </MaskedView>

          <View style={styles.innerCircle}>
            <Image style={styles.storyImage} source={item.profile} />
          </View>
        </TouchableOpacity>

        <Text style={styles.userName}>{item.username}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={UserData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingVertical: vh(3),
    marginLeft: vw(5),
  },
  storyContainer: {
    paddingVertical: vh(3),
    // borderWidth:1,
    paddingHorizontal: vw(6),
  },
  maskedView: {
    width: SCREEN_WIDTH / 4.5,
    height: SCREEN_WIDTH / 4.5,
  },
  storyView: {
    flex: 1,
    borderRadius: SCREEN_WIDTH / 9,
    borderWidth: vw(3),
  },
  gradient: {
    flex: 1,
    borderRadius: SCREEN_WIDTH / 9,
  },
  innerCircle: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: SCREEN_WIDTH / 5,
    height: SCREEN_WIDTH / 5,
    borderRadius: SCREEN_WIDTH / 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    resizeMode: 'cover',
  },
  userName: {
    textAlign: 'center',
    color: 'black',
    marginTop: 5,
  },
});
