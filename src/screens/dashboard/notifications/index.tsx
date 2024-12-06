import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import CustomHeader from '../../../components/CustomHeader';

const notifications = [
  {
    id: '1',
    user: 'yash._srivastava',
    time: '18h',
    action: 'liked your reel',
    image:
      'https://images.pexels.com/photos/13326697/pexels-photo-13326697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    user: 'vidit_chaudhary',
    time: '3d',
    action: 'liked your story',
    image:
      'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    user: 'its_aditi',
    time: '4d',
    action: 'posted a thread you might like',
    image:
      'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    user: 'aryan___.bisht',
    time: '6d',
    action: 'started following you',
    image:
      'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    followBack: true,
  },
  {
    id: '5',
    user: 'ayushi.sharma',
    time: '1w',
    action: 'liked your reel',
    image:
      'https://images.pexels.com/photos/4061435/pexels-photo-4061435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    user: 'sanjay.4567',
    time: '2w',
    action: ', who you might know is on Instagram',
    image:
      'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    follow: true,
  },
  {
    id: '7',
    user: 'ekkansh_singhal',
    time: '17d',
    action: 'liked your comment',
    image:
      'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '8',
    user: '___.vaibhav',
    time: '3w',
    action: 'started following you',
    image:
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    followBack: true,
  },
  {
    id: '9',
    user: 'chameleon__82987',
    time: '3w',
    action: 'requested to follow you',
    image:
      'https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    request: true,
  },
  {
    id: '10',
    user: 'andrew____..',
    time: '4w',
    action: 'who you might know is on Instagram',
    image:
      'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    follow: true,
  },
];

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        image={require('../../../assets/icon/back.png')}
        text={'Notifications'}
      />
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.notificationItem}>
            <Image source={{uri: item.image}} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.notificationText}>
                <Text style={styles.bold}>{item.user}</Text> {item.action}.
              </Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            {item.followBack && (
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.buttonText}>Follow Back</Text>
              </TouchableOpacity>
            )}
            {item.follow && (
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.buttonText}>Follow</Text>
              </TouchableOpacity>
            )}
            {item.request && (
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
