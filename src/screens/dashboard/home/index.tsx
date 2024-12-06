import {ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import Stories from '../../../components/Stories';
import Post from '../../../components/Post';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Header />
        <Stories navigation={navigation}/>
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
