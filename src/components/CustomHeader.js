// CustomHeader.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { vw } from '../utils/dimension';

const CustomHeader = ({ image, text }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={image} style={styles.backImg} />
      </TouchableOpacity>
      <View style={styles.idContainer}>
        <Text style={styles.id}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems:'center',
        padding: vw(16),
      },
      backImg: {
        width: vw(26),
        height: vw(24),
      },
      idContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: vw(30),
      },
      id: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
      },
});

export default CustomHeader;

