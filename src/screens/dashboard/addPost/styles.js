import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimension';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(14),
  },
  selectedImg: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: vh(10),
    paddingHorizontal: vw(15),
  },
  closeImg: {
    width: vw(22),
    height: vw(22),
  },
  newPostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: vw(38),
    width: vw(290),
    justifyContent: 'space-between',
  },
  newPostText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  nextText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#3797EF',
  },
  noImgText: {
    fontSize: 16,
    color: 'grey',
  },
  bottomHalfContainer: {
    flex: 0.5,
  },
  bottomImg: {
    width: vw(91.4),
    height: vh(120),
    margin: vw(1),
  },
});
