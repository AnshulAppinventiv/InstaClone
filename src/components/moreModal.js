import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {UserData} from '../utils/UserData';
import {vh, vw, SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/dimension';
import {useState} from 'react';

const MoreModal = ({visible, onClose, data}) => {
  const [comments, setComments] = useState(
    UserData.map(item => ({
      id: item.id,
      liked: false,
    })),
  );

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.contentHeader}>
              <View style={styles.headerLine} />
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: vh(20),
    backgroundColor: 'white',
  },
  modalContent: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 1.05,
    borderWidth: 0.4,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  contentHeader: {
    height: vh(52),
    alignItems: 'center',
    borderColor: 'grey',
    borderBottomWidth: 0.2,
  },
  headerLine: {
    width: vw(36),
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'grey',
    marginTop: vh(10),
  },
  headerText: {
    fontSize: 15,
    marginTop: vh(10),
    fontWeight: '700',
  },
  listContainer: {
    marginTop: vh(10),
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: vh(15),
    paddingHorizontal: vw(12),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    fontWeight: '600',
  },
  commentText: {
    fontSize: 15,
    marginTop: vh(4),
  },
  replyText: {
    marginTop: vh(3),
    fontSize: 13,
    fontWeight: '700',
    color: 'grey',
  },
  likeImg: {
    width: vw(15),
    height: vw(15),
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: vh(20),
    padding: vw(10),
    justifyContent: 'flex-end',
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default MoreModal;
