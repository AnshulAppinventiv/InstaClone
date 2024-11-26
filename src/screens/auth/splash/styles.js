import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: vw(250),
    height: vh(250),
    resizeMode: 'contain',
  },
});
