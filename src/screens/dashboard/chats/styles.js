import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: vw(16),
    paddingTop: vh(10),
  },
  backImg: {
    width: vw(28),
    height: vw(24),
  },
  idContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: vw(16),
  },
  id: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  bottomArrowImg: {
    width: vw(12),
    height: vw(18),
    resizeMode: 'contain',
    marginLeft: vw(6),
  },
  newMsg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  inputText: {
    borderWidth: 1,
    width: vw(343),
    height: vh(40),
    marginTop: vh(26),
    borderColor: '#F4F4F4',
    backgroundColor: '#F4F4F4',
    borderRadius: vw(20),
    paddingHorizontal: vw(10),
    fontSize: 19,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(20),
    paddingHorizontal: vw(16),
    justifyContent: 'space-between',
  },
  msgText: {
    fontSize: 18,
    fontWeight: '500',
  },
  RequestText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3797EF',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: vw(12),
  },
  profilePic: {
    width: vw(55),
    height: vw(55),
    borderRadius: vw(45),
  },
  chatDetails: {
    marginLeft: vw(15),
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  userDetails: {
    fontSize: vw(14),
    color: '#888',
    marginTop: vh(2),
  },
  cameraImg: {
    width: vw(30),
    height: vw(30),
    resizeMode: 'contain',
  },
  listContainer:{
    marginTop:vh(10),
  }
});