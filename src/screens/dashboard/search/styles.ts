import {StyleSheet} from 'react-native';
import {vw, vh} from '../../../utils/dimension';

const styles = StyleSheet.create({
  grid: {
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  inputText: {
    borderWidth: 1,
    width: vw(343),
    height: vh(44),
    marginBottom:vh(10),
    borderColor: '#F4F4F4',
    backgroundColor: '#F3F3F3',
    borderRadius: vh(18),
    paddingHorizontal: vw(14),
    alignSelf: 'center',
  },
});

export default styles;
