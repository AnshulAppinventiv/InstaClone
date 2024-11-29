/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {UserData} from '../../../utils/UserData';
import React, {useState} from 'react';
import {vw} from '../../../utils/dimension';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const ProfilePosts = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState(
    UserData.map(item => ({
      id: item.id,
      liked: false,
      likeCount: item.post.like,
      isSaved: false,
    })),
  );
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

  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContainer}>
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
        {UserData.map(item => {
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
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePosts;
