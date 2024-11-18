import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Stories from '../../components/Stories';
import Post from '../../components/Post';

const Dashboard = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
