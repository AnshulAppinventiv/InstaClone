import {StyleSheet} from 'react-native';
import {vw, vh, SCREEN_WIDTH} from '../../../utils/dimension';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: vw(10),
    paddingBottom: vh(16),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: vw(26),
    height: vw(26),
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    marginLeft: vw(28),
  },
  profileImg: {
    width: vw(30),
    height: vw(30),
    borderRadius: vw(45),
  },
  userInfoTextContainer: {
    marginLeft: vw(15),
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
  },
  headerIconContainer: {
    width: SCREEN_WIDTH / 3.8,
    flexDirection: 'row',
    padding: vh(10),
    justifyContent: 'space-between',
    alignItems:'center',
  },
  notificationIcon: {
    width: vw(23),
    height: vw(23),
    resizeMode:'contain',
  },
  videoIcon:{
    width:vw(30),
    height:vw(30),
    resizeMode:'contain'
  },
  messageView: {
    padding: vw(10),
    borderRadius: 20,
    marginBottom: vh(5),
    flexDirection: 'row',
  },
  messageText: {
    fontSize: 16,
  },
  timeTextView: {
    fontSize: 12,
    color: '#888',
    marginBottom: vh(10),
  },
  reactionView: {
    marginTop: vh(5),
    padding: vw(5),
  },
  sendButton: {
    padding: vw(6),
    alignSelf: 'center',
    // backgroundColor:'#F4F4F4'
  },
  sendIcon: {
    width: vw(22),
    height: vw(22),
    resizeMode:'contain',
    marginLeft: vw(10),
    // alignSelf:'center'
  },
  inputToolbar: {
    borderRadius: 30,
    marginHorizontal: 15,
    borderWidth: 0.2,
    bottom: 10,
    borderColor: 'grey',
  },
  actionButton: {
  },
  actionIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode:'contain',
    // alignSelf:'center',
    // backgroundColor:'red',
  },
});

export default styles;