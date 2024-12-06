import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {vw, vh} from '../../../utils/dimension';
import {useSelector} from 'react-redux';
import {UserData} from '../../../utils/UserData';

const SavedPost = () => {
  const navigation = useNavigation();
  const savedPostIds = useSelector(state => state.savedPost.savedPostIds);
  const savedPosts = UserData.filter(user => savedPostIds.includes(user.id));
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
          <Text style={styles.id}>Saved</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={savedPosts}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={0.9} style={{marginBottom:2,marginRight:2}}>
              <Image
                source={item.post.image}
                style={{height: vw(124), width: vw(124)}}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SavedPost;

const styles = StyleSheet.create({
  header: {flexDirection: 'row', alignItems: 'center', padding: 16},
  backImg: {
    width: vw(26),
    height: vw(24),
  },
  idContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: vw(30),
  },
  id: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
});
