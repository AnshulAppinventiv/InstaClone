import {StyleSheet} from 'react-native';
import {vw, vh, SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../utils/dimension';

export const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: vw(10),
    alignItems: 'flex-end',
  },
  reelsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  cameraImg: {
    width: vw(24),
    height: vw(24),
    tintColor: 'white',
    resizeMode: 'contain',
  },
});
