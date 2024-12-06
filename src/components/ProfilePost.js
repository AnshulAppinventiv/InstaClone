/* eslint-disable react-native/no-inline-styles */
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {typeData} from '../utils/UserData';
import {MyData} from '../utils/MyData';
import {vw, vh} from '../utils/dimension';
import {useNavigation} from '@react-navigation/native';

const ProfilePost = ({newPost}) => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState(MyData);
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    if (newPost) {
      const newPostEntry = {
        id: Date.now(),
        post: newPost,
      };

      setPosts(prevPosts => {
        return [newPostEntry,...prevPosts];
      });
    }
  }, [newPost]);

  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfilePosts', {index: item.index})}
        activeOpacity={0.8}
        style={styles.postContainer}>
        <Image style={styles.postImg} source={{uri: item.item.post.image}} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        {typeData.map(item => {
          return (
            <View
              key={item.id}
              style={{
                width: vw(196.36),
                paddingBottom: vh(15),
                borderBottomWidth: selected === item.id ? 1 : 0,
              }}>
              <TouchableOpacity onPress={() => setSelected(item.id)}>
                <Image style={styles.icon} source={item.image} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      {selected === 1 && (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ProfilePost;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: vh(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: vw(24),
    height: vw(24),
    tintColor: 'black',
    alignSelf: 'center',
  },
  postContainer: {
    marginTop: vh(2),
    backgroundColor: 'red',
    marginRight: vw(2),
  },
  postImg: {
    height: vw(124),
    width: vw(124),
  },
});
