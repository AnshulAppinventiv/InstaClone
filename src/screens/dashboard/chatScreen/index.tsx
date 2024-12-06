/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GiftedChat, InputToolbar, Message} from 'react-native-gifted-chat';
import RBSheet from 'react-native-raw-bottom-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from './styles.ts';

const ChatScreen = ({route, navigation}: any) => {
  const user = route.params.UserData;
  const chatId = route.params.UserData.id;
  const [messages, setMessages]: any = useState([{}]);
  const [inputText, setinputText] = useState('');
  const [imageUri, setImageUri]: any = useState();

  const handleTakePhoto = () => {
    console.log('launch camera');
    launchCamera({mediaType: 'photo', quality: 1}, (response: any) => {
      console.log('launch camera');

      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri);
      }
    });
  };
  const openGallery = () => {
    console.log('gallery');
    launchImageLibrary({mediaType: 'photo', quality: 1}, (response: any) => {
      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri);
      }
    });
  };
  useEffect(() => {
    const loadMessages = async () => {
      const storedMessages = await AsyncStorage.getItem(`messages_${chatId}`);
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      } else {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
            },
          },
        ]);
      }
    };
    loadMessages();
  }, [chatId]);

  const onSend = async (message: Message[] = []) => {
    setMessages(previousMessages => {
      const updatedMessages = GiftedChat.append(previousMessages, message);
      AsyncStorage.setItem(
        `messages_${chatId}`,
        JSON.stringify(updatedMessages),
      );
      return updatedMessages;
    });
    setinputText('');
  };
  const renderActions = () => {
    return (
      <TouchableOpacity style={styles.actionButton} onPress={handleTakePhoto}>
        <Image
          source={require('../../../assets/icon/camera2.png')}
          style={styles.actionIcon}
        />
      </TouchableOpacity>
    );
  };
  const renderMessage = (props: any) => {
    const {currentMessage} = props;
    const isUserMessage = currentMessage.user._id === 1;
    const messageTime = new Date(currentMessage.createdAt).toLocaleTimeString(
      [],
      {
        hour: '2-digit',
        minute: '2-digit',
      },
    );
    return (
      <View style={{marginHorizontal: 10}}>
        <TouchableOpacity
          style={[
            styles.messageView,
            {
              alignSelf: isUserMessage ? 'flex-end' : 'flex-start',
              backgroundColor: isUserMessage ? '#0084ff' : '#f0f0f0',
            },
          ]}>
          <Text
            style={[
              styles.messageText,
              {color: isUserMessage ? 'white' : 'black'},
            ]}>
            {currentMessage.text}
          </Text>
          {currentMessage.reaction && (
            <View
              style={[
                styles.reactionView,
                {
                  right: isUserMessage ? 0 : 'auto',
                  top: isUserMessage ? '100%' : '100%',
                },
              ]}>
              <Text style={{color: isUserMessage ? 'white' : 'black'}}>
                {currentMessage.reaction}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <Text
          style={[
            styles.timeTextView,
            {textAlign: isUserMessage ? 'right' : 'left'},
          ]}>
          {messageTime}
        </Text>
      </View>
    );
  };
  const renderSend = (props: any) => {
    return (
      <>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            const messageText = inputText.trim();
            if (messageText && messageText.trim()) {
              onSend([
                {
                  _id: Math.floor(Math.random() * 100000),
                  text: inputText,
                  createdAt: new Date(),
                  user: {
                    _id: 1,
                    name: 'Current User',
                  },
                },
              ]);
            }
          }}>
          <Image
            source={require('../../../assets/icon/share.png')}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginRight: 10}}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/icon/mic.png')}
              style={styles.sendIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openGallery}>
            <Image
              source={require('../../../assets/icon/gallery.png')}
              style={styles.sendIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/icon/options.png')}
              style={styles.sendIcon}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/icon/back.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1.0} style={styles.profileContainer}>
            <Image source={user.profile} style={styles.profileImg} />
          </TouchableOpacity>
          <View style={styles.userInfoTextContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.userName}>{user.username}</Text>
          </View>
        </View>
        <View style={styles.headerIconContainer}>
          <TouchableOpacity activeOpacity={1.0}>
            <Image
              source={require('../../../assets/icon/telephone.png')}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1.0}>
            <Image
              source={require('../../../assets/icon/video.png')}
              style={styles.videoIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{_id: 1, name: 'Current User'}}
        placeholder="Message..."
        alignTop={true}
        onInputTextChanged={setinputText}
        text={inputText}
        renderInputToolbar={props => (
          <InputToolbar containerStyle={styles.inputToolbar} {...props} />
        )}
        renderActions={renderActions}
        renderMessage={renderMessage}
        renderSend={renderSend}
      />
    </SafeAreaView>
  );
};
export default ChatScreen;
