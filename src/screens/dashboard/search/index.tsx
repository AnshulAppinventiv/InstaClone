/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {MyData} from '../../../utils/MyData';
import styles from './styles';
import InputBox from '../../../components/InputBox';

const SearchScreen = () => {
  const renderGridItem = ({item}: any) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.gridItem}>
      <Image source={{uri: item.post.image}} style={styles.image} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <InputBox
          placeholder={'Ask Meta AI or Search'}
          style={styles.inputText}
        />
        <FlatList
          data={MyData}
          renderItem={renderGridItem}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.grid}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
