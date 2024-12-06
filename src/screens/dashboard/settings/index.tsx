import React from 'react';
import {View, Text, Image, TouchableOpacity, SectionList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import CustomHeader from '../../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SectionMenu = () => {
  const navigation = useNavigation();
  const sections = [
    {
      title: 'How to use Instagram',
      data: [
        {label: 'Saved', image: require('../../../assets/icon/save.png')},
        {label: 'Archive', image: require('../../../assets/icon/archive.png')},
        {
          label: 'Your Activity',
          image: require('../../../assets/icon/timeManagement.png'),
        },
        {
          label: 'Notifications',
          image: require('../../../assets/icon/notification.png'),
        },
        {
          label: 'Time management',
          image: require('../../../assets/icon/timeManagement.png'),
        },
      ],
    },
    {
      title: 'Who can see your content',
      data: [
        {
          label: 'Account Privacy',
          image: require('../../../assets/icon/save.png'),
        },
        {
          label: 'Close Friends',
          image: require('../../../assets/icon/save.png'),
        },
        {
          label: 'Crossposting',
          image: require('../../../assets/icon/save.png'),
        },
        {label: 'Blocked', image: require('../../../assets/icon/save.png')},
        {
          label: 'Hide Story and live',
          image: require('../../../assets/icon/save.png'),
        },
      ],
    },
    {
      title: 'More info and support',
      data: [
        {label: 'Help'},
        {label: 'Privacy Center'},
        {label: 'Account Status'},
        {label: 'About'},
      ],
    },
  ];

  const renderItem = ({item}: any) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.item} onPress={()=>navigation.navigate('SavedPost')}>
      <View style={{flexDirection: 'row'}}>
        <Image source={item.image} style={styles.listImage} />
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
      <Image
        source={require('../../../assets/icon/Right.png')}
        style={styles.rightIcon}
      />
    </TouchableOpacity>
  );

  const renderSectionHeader = ({section: {title}}: any) => (
    <View style={styles.listHeader}>
      <Text style={styles.listHeaderText}>{title}</Text>
    </View>
  );
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        image={require('../../../assets/icon/back.png')}
        text={'Settings and activity'}
      />
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.label + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.list}
      />
       <TouchableOpacity style={[styles.header,{marginHorizontal:15}]} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SectionMenu;
