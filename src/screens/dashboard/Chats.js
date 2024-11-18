import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {UserData} from '../../utils/UserData';
import {vw, vh} from '../../utils/dimension';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputBox from '../../components/InputBox';

const ChatScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={item.profile} style={styles.profilePic} />
      <View style={styles.chatDetails}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userDetails}>
          Sent a reel by @{item.username} • {item.post.time}
        </Text>
      </View>
      <TouchableOpacity>
        <Image
        source={require('../../assets/icon/camera.png')}
        style={styles.cameraImg}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../assets/icon/back.png')}
            style={styles.backImg}
          />
        </TouchableOpacity>
        <View style={styles.idContainer}>
          <Text style={styles.id}>singh_anshulpratap</Text>
          <Image
            source={require('../../assets/icon/bottomArrow.png')}
            style={styles.bottomArrowImg}
          />
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icon/newMsg.png')}
            style={styles.newMsg}
          />
        </TouchableOpacity>
      </View>
      <InputBox
        placeholder={'Ask Meta AI or Search'}
        style={styles.inputText}
      />
      <View style={styles.subContainer}>
        <Text style={styles.msgText}>Messages</Text>
        <TouchableOpacity>
          <Text style={styles.RequestText}>Requests</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={UserData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: vw(16),
    paddingTop: vh(16),
  },
  backImg: {
    width: vw(28),
    height: vw(24),
  },
  idContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: vw(16),
  },
  id: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  bottomArrowImg: {
    width: vw(12),
    height: vw(18),
    resizeMode: 'contain',
    marginLeft: vw(6),
  },
  newMsg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  inputText: {
    borderWidth: 1,
    width: vw(343),
    height: vh(45),
    marginTop: vh(12),
    borderColor: '#F4F4F4',
    backgroundColor: '#F4F4F4',
    borderRadius: vw(20),
    paddingHorizontal: vw(10),
    fontSize: 19,
    alignSelf:'center',
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:vh(20),
    paddingHorizontal: vw(16),
    justifyContent: 'space-between',
  },
  msgText: {
    fontSize: 18,
    fontWeight: '500',
  },
  RequestText:{
    fontSize: 18,
    fontWeight: '600',
    color:'#3797EF',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: vw(12),
  },
  profilePic: {
    width: vw(55),
    height: vw(55),
    borderRadius: vw(45),
  },
  chatDetails: {
    marginLeft: vw(15),
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  userDetails: {
    fontSize: 14,
    color: '#888',
    marginTop: vh(2),
  },
  cameraImg:{
    width:vw(30),
    height:vw(30),
    resizeMode:'contain',
  },
});

export default ChatScreen;
