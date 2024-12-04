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
    width: SCREEN_WIDTH / 4,
    flexDirection: 'row',
    padding: vh(10),
    justifyContent: 'space-between',
  },
  notificationIcon: {
    width: vw(25),
    height: vw(25),
    // marginLeft: 15,
  },
  messageView: {
    padding: 10,
    borderRadius: 20,
    marginBottom: 5,
    flexDirection: 'row',
  },
  messageText: {
    fontSize: 16,
  },
  timeTextView: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
    // marginHorizontal:5
  },
  reactionView: {
    marginTop: 5,
    padding: 5,
  },
  sendButton: {
    padding: 6,
    alignSelf: 'center',
    // backgroundColor:'#F4F4F4'
  },
  sendIcon: {
    width: vw(25),
    height: vw(25),
    marginLeft: 10,
    // alignSelf:'center'
  },
  RBContainer: {
    padding: 20,
  },
  RBContainerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  RBtext: {
    marginLeft: 10,
    fontSize: 16,
  },
  eyeIcon: {
    width: 25,
    height: 25,
  },
  pinIcon: {
    width: 25,
    height: 25,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  bottomSheetContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    padding: 20,
  },
  bottomSheetWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  inputToolbar: {
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
    marginHorizontal: 15,
    borderWidth: 0.2,
    bottom: 10,
    borderColor: 'grey',
    fontSize: 50,
  },
  actionButton: {
    marginLeft: 10,
    alignSelf: 'center',
    // backgroundColor:'#F4F4F4'
  },
  actionIcon: {
    width: 45,
    height: 45,
    // alignSelf:'center',
    // backgroundColor:'red',
    right: 10,
  },
});

export default styles;
