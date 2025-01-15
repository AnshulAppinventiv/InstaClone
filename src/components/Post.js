/* eslint-disable react-native/no-inline-styles */
import {UserData} from '../utils/UserData';
import CustomModal from './CustomModal';
import MoreModal from './moreModal';
import {vw, vh, SCREEN_WIDTH} from '../utils/dimension';
import React, {useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addSavedPost, removeSavedPost} from '../redux/slices/savedPostSlice';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Post = () => {
  const dispatch = useDispatch();
  const savedPostIds = useSelector(state => state.savedPost.savedPostIds);

  const animatedScales = useRef({});
  const lastTaps = useRef({});
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);
  const [isMoreModalVisible, setIsMoreModalVisible] = useState(false);
  const [selectedPostComments, setSelectedPostComments] = useState([]);

  const [posts, setPosts] = useState(
    UserData.map(item => ({
      id: item.id,
      liked: false,
      likeCount: item.post.like,
      isSaved: savedPostIds.includes(item.id),
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
  const openMoreModal = () => {
    console.log('ModalOpen');
    setIsMoreModalVisible(true);
  };

  const openCommentModal = postComments => {
    setSelectedPostComments(postComments);
    setIsCommentModalVisible(true);
  };

  const handleSavePress = postId => {
    const isPostSaved = savedPostIds.includes(postId);

    if (isPostSaved) {
      dispatch(removeSavedPost(postId));
    } else {
      dispatch(addSavedPost(postId));
    }
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

  const handleDoubleTap = (postId, postLiked) => {
    if (!postLiked) {
      handleLikePress(postId);
    }
    triggerLikeAnimation(postId);
  };

  const handleImageTap = itemId => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;

    if (
      lastTaps.current[itemId] &&
      now - lastTaps.current[itemId] < DOUBLE_PRESS_DELAY
    ) {
      const currentPost = posts.find(post => post.id === itemId);
      handleDoubleTap(itemId, currentPost.liked);
    } else {
      lastTaps.current[itemId] = now;
    }
  };

  const initializeRefsForItem = itemId => {
    if (!animatedScales.current[itemId]) {
      animatedScales.current[itemId] = new Animated.Value(0);
    }
    if (!lastTaps.current[itemId]) {
      lastTaps.current[itemId] = null;
    }
  };

  const triggerLikeAnimation = itemId => {
    Animated.sequence([
      Animated.timing(animatedScales.current[itemId], {
        toValue: 1.5,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animatedScales.current[itemId], {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      <View style={styles.mainContainer}>
        {UserData.map(item => {
          const currentPost = posts.find(post => post.id === item.id);
          initializeRefsForItem(item.id);

          return (
            <View key={item.id} style={styles.itemContainer}>
              <View style={styles.postHeader}>
                <View style={styles.profileContainer}>
                  <Image style={styles.profileImg} source={item.profile} />
                  <Text style={styles.name}>{item.username}</Text>
                </View>
                <TouchableOpacity onPress={() => openMoreModal()}>
                  <Image
                    source={require('../assets/icon/more.png')}
                    style={styles.moreImg}
                  />
                </TouchableOpacity>
              </View>

              <TouchableWithoutFeedback onPress={() => handleImageTap(item.id)}>
                <View>
                  <Image style={styles.postImg} source={item.post.image} />

                  {currentPost.liked && (
                    <Animated.View
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: [
                          {translateX: -25},
                          {translateY: -25},
                          {scale: animatedScales.current[item.id]},
                        ],
                      }}>
                      <Image
                        source={require('../assets/icon/Liked.png')}
                        style={styles.animatedLikeImg}
                      />
                    </Animated.View>
                  )}
                </View>
              </TouchableWithoutFeedback>

              <View style={styles.iconContainer}>
                <View style={styles.leftIconContainer}>
                  <TouchableOpacity onPress={() => handleLikePress(item.id)}>
                    <Image
                      style={styles.likeImg}
                      source={
                        currentPost.liked
                          ? require('../assets/icon/Liked.png')
                          : require('../assets/icon/Like.png')
                      }
                    />
                  </TouchableOpacity>
                  <Text style={styles.likes}>{currentPost.likeCount}</Text>

                  <TouchableOpacity
                    onPress={() => openCommentModal(item.post.comments)}>
                    <Image
                      style={styles.commentImg}
                      source={require('../assets/icon/Comment.png')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={1.0}>
                    <Image
                      style={styles.shareImg}
                      source={require('../assets/icon/share.png')}
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => handleSavePress(item.id)}>
                  <Image
                    source={
                      currentPost.isSaved
                        ? require('../assets/icon/saved.png')
                        : require('../assets/icon/save.png')
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
      </View>
      <CustomModal
        visible={isCommentModalVisible}
        onClose={() => setIsCommentModalVisible(false)}
        data={selectedPostComments}
      />
      <MoreModal
        visible={isMoreModalVisible}
        onClose={() => setIsMoreModalVisible(false)}
      />
    </>
  );
};

export default Post;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: vh(10),
  },
  itemContainer: {
    marginBottom: vh(16),
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(10),
    marginBottom: vh(8),
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 4,
  },
  profileImg: {
    width: vw(30),
    height: vw(30),
    borderRadius: 50,
    resizeMode: 'cover',
  },
  name: {
    marginLeft: vw(10),
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  moreImg: {
    width: vw(18),
    height: vw(18),
  },
  postImg: {
    height: vh(433),
    width: SCREEN_WIDTH,
    resizeMode: 'cover',
  },
  animatedLikeImg: {
    width: vw(60),
    height: vw(60),
    tintColor: 'white',
  },
  iconContainer: {
    paddingHorizontal: vw(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vh(10),
  },
  leftIconContainer: {
    padding: vw(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  likes: {
    marginLeft: vw(4),
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  commentImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    marginLeft: vw(15),
  },
  shareImg: {
    width: vw(24),
    height: vw(24),
    marginLeft: vw(15),
    resizeMode: 'contain',
  },
  captionContainer: {
    marginTop: vh(10),
    flexDirection: 'row',
    paddingHorizontal: vw(12),
    alignItems: 'center',
  },
  nameInCaption: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  saveImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
});
