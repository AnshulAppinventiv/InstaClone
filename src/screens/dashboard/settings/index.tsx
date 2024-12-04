import React from 'react';
import {View, Text,Image, TouchableOpacity, SectionList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

const SectionMenu = () => {
  const sections = [
    {
      title: 'How to use Instagram',
      data: [
        { label: 'Saved', image: require('../../../assets/icon/save.png') },
        // { label: 'Archive',  },
        // { label: 'Your Activity', image: require('./assets/activity.png') },
        // { label: 'Notifications', image: require('./assets/notifications.png') },
        // { label: 'Time management', image: require('./assets/time_management.png') },
      ],
    },
    {
      title: 'Who can see your content',
      data: [
       {label:'Account Privacy'},
        // 'Close Friends',
        // 'Crossposting',
        // 'Blocked',
        // 'Hide Story and live',
      ],
    },
    // {
    //   title: 'More info and support',
    //   data: ['Help', 'Privacy Center', 'Account Status', 'About'],
    // },
  ];

  const renderItem = ({item}: any) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.item}>
      <View style={{flexDirection:'row'}}>
      <Image
      source={item.image}
      style={styles.listImage}
      />
      <Text style={styles.itemText}>{item.label}</Text>
      </View>
      <Image
      source={require('../../../assets/icon/Right.png')}
      style={styles.rightIcon}/>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({section: {title}}: any) => (
    <View style={styles.listHeader}>
      <Text style={styles.listHeaderText}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default SectionMenu;
