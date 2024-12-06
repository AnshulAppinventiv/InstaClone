import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {UserData} from '../../../utils/UserData';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputBox from '../../../components/InputBox';
import {styles} from './styles';

const Chats = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = UserData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({item}) => (
    <View style={styles.listContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ChatScreen', {UserData: item});
        }}
        activeOpacity={0.7}
        style={styles.chatItem}>
        <Image source={item.profile} style={styles.profilePic} />
        <View style={styles.chatDetails}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userDetails}>
            Sent a reel by @{item.username} • {item.post.time}
          </Text>
        </View>
        <TouchableOpacity activeOpacity={1.0}>
          <Image
            source={require('../../../assets/icon/camera.png')}
            style={styles.cameraImg}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
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
          <Text style={styles.id}>singh_anshulpratap</Text>
          <Image
            source={require('../../../assets/icon/bottomArrow.png')}
            style={styles.bottomArrowImg}
          />
        </View>
        <TouchableOpacity activeOpacity={1.0}>
          <Image
            source={require('../../../assets/icon/newMsg.png')}
            style={styles.newMsg}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <View>
            <InputBox
              placeholder={'Ask Meta AI or Search'}
              style={styles.inputText}
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
            />
            <View style={styles.subContainer}>
              <Text style={styles.msgText}>Messages</Text>
              <TouchableOpacity activeOpacity={1.0}>
                <Text style={styles.RequestText}>Requests</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No chats found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Chats;
