import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#E84C0E',
  },
  basicDataText: {
    fontSize: 22,
    color: 'white',
  },
  empty: {
    fontSize: 16,
    width: '70%',
    textAlign: 'center',
  },
  userInfo: {
    flexDirection: 'row',
  },
  donationOptions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    marginBottom: 15,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  defaultProfilePic: {
    minHeight: 150,
    minWidth: 150,
    margin: 10,
  },
  editIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  noDonationsIcon: {
    minHeight: 80,
    minWidth: 80,
    marginTop: 10,
  },
  buttonAdd: {
    width: 45,
    height: 45,
  },
});
