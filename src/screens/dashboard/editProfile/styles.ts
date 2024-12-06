import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimension';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  profileSection: {
    alignItems: 'center',
    marginBottom: vh(20),
  },
  profileImage: {
    width: vw(80),
    height: vw(80),
    borderRadius: 50,
    marginBottom: vh(8),
  },
  editPicture: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: '500',
  },
  inputGroup: {
    marginBottom: vh(20),
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: vh(8),
    marginHorizontal: vw(20),
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: vw(7),
    fontSize: 16,
    marginBottom: vh(16),
    marginHorizontal: vw(20),
  },
  bioInput: {
    height: vh(60),
    textAlignVertical: 'top',
  },
  profileInfoSection: {
    marginTop: vh(20),
    marginHorizontal: vw(20),
  },
  infoHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: vh(12),
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vh(16),
  },
  infoLabel: {
    fontSize: 16,
    color: '#555',
  },
  infoValue: {
    fontSize: 16,
    color: '#1E90FF',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: vw(15),
    marginVertical: vw(10),
  },
  bgColor: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  marginSide: {
    marginHorizontal: vw(20),
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    height: vw(27),
    width: vw(27),
  },
  iconImageSize: {
    height: vw(26),
    width: vw(30),
    resizeMode: 'contain',
    borderRadius: 15,
    marginHorizontal: vw(10),
  },
  textArrange: {
    justifyContent: 'center',
  },
  name: {
    marginEnd: vh(10),
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  comments: {
    marginEnd: vh(10),
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  time: {
    fontSize: 16,
    fontWeight: '500',
    color: '#DCDCDC',
  },
});
