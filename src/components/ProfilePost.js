import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {UserData, typeData} from '../utils/UserData';
import { vw,vh } from '../utils/dimension';

const ProfilePost = () => {
  const [selected, setSelected] = useState(1);

  const renderItem = item => {
    return (
      <View style={styles.postContainer}>
        <Image style={styles.postImg} source={item.item.post.image} />
      </View>
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
          data={UserData}
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
    tintColor: 'black',
    alignSelf: 'center',
  },
  postContainer: {
    marginTop: vh(3),
  },
  postImg: {
    height: vw(130),
    width: vw(130),
    marginRight: vw(3),
  },
});
