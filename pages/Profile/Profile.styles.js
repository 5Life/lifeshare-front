import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#E84C0E',
  },
  data: {
    fontSize: 25,
    color: 'white',
  },
  empty: {
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
  },
  basicData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
});
