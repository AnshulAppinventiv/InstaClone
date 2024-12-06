import {StyleSheet} from 'react-native';
import {vw, vh, SCREEN_WIDTH} from '../../../utils/dimension';

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: vh(10),
  },
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
  bottomArrowImg: {
    width: vw(12),
    height: vw(18),
    resizeMode: 'contain',
    marginLeft: vw(6),
  },
  itemContainer: {
    marginBottom: vh(20),
  },
  postHeader: {
    paddingVertical: vh(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(10),
    marginBottom: vh(8),
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 4,
  },
  profileImg: {
    width: vw(30),
    height: vw(30),
    borderRadius: 50,
    resizeMode: 'cover',
  },
  name: {
    marginLeft: vw(10),
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  moreImg: {
    width: vw(18),
    height: vw(18),
  },
  postImg: {
    height: vh(460),
    width: SCREEN_WIDTH,
    resizeMode: 'cover',
  },
  iconContainer: {
    paddingHorizontal: vw(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vh(10),
  },
  likeImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  likes: {
    marginLeft: vw(4),
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  commentImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    marginLeft: vw(15),
  },
  shareImg: {
    width: vw(24),
    height: vw(24),
    marginLeft: vw(15),
    resizeMode: 'contain',
  },
  captionContainer: {
    marginTop: vh(10),
    flexDirection: 'row',
    paddingHorizontal: vw(12),
    alignItems: 'center',
  },
  nameInCaption: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  saveImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
});
