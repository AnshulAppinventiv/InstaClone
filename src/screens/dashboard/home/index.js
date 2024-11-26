import {ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import Stories from '../../../components/Stories';
import Post from '../../../components/Post';
import {styles} from './styles';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Header />
        <Stories />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
