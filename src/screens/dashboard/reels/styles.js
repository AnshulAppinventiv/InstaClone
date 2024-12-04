import {StyleSheet, Dimensions} from 'react-native';
import {vw, vh, SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../utils/dimension';

export const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
    backgroundColor: 'black',
  },
  header: {
    height: 80,
    width: Dimensions.get('window').width,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
  },
  reelsText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  cameraImg: {
    width: vw(30),
    height: vw(30),
    tintColor: 'white',
    resizeMode: 'contain',
  },
});
