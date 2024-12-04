/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {UserData} from '../../../utils/UserData';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {vw} from '../../../utils/dimension';
const ProfilePosts = ({route}) => {
  const selectedIndex = route.params.index;
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  const [posts, setPosts] = useState(
    UserData.map(item => ({
      id: item.id,
      liked: false,
      likeCount: item.post.like,
      isSaved: false,
    })),
  );

  useEffect(() => {
    if (selectedIndex !== null && flatListRef.current) {
      setTimeout(() => {
        flatListRef.current.scrollToIndex({
          index: selectedIndex,
          animated: false,
        });
      }, 100);
    }
  }, [selectedIndex]);

  const handleLikePress = postId => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1,
            }
          : post,
      ),
    );
  };

  const handleSavePress = postId => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              isSaved: !post.isSaved,
            }
          : post,
      ),
    );
  };

  const renderItem = ({item}) => {
    const currentPost = posts.find(post => post.id === item.id);

    return (
      <View key={item.id} style={styles.itemContainer}>
        <View style={styles.postHeader}>
          <View style={styles.profileContainer}>
            <Image style={styles.profileImg} source={item.profile} />
            <Text style={styles.name}>{item.username}</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/icon/more.png')}
              style={styles.moreImg}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Image style={styles.postImg} source={item.post.image} />
        </View>

        <View style={styles.iconContainer}>
          <View
            style={{
              padding: vw(2),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => handleLikePress(item.id)}>
              <Image
                style={styles.likeImg}
                source={
                  currentPost.liked
                    ? require('../../../assets/icon/Liked.png')
                    : require('../../../assets/icon/Like.png')
                }
              />
            </TouchableOpacity>
            <Text style={styles.likes}>{currentPost.likeCount}</Text>

            <TouchableOpacity>
              <Image
                style={styles.commentImg}
                source={require('../../../assets/icon/Comment.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.shareImg}
                source={require('../../../assets/icon/share.png')}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => handleSavePress(item.id)}>
            <Image
              source={
                currentPost.isSaved
                  ? require('../../../assets/icon/saved.png')
                  : require('../../../assets/icon/save.png')
              }
              style={styles.saveImg}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.captionContainer}>
          <Text style={styles.nameInCaption}>{item.username} </Text>
          <Text>{item.post.caption}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../../assets/icon/back.png')}
            style={styles.backImg}
          />
        </TouchableOpacity>
        <View style={styles.idContainer}>
          <Text style={styles.id}>Posts</Text>
        </View>
      </View>
      <FlatList
        ref={flatListRef}
        data={UserData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.mainContainer}
      />
    </SafeAreaView>
  );
};

export default ProfilePosts;
