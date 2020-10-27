import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 40,
  },
  donations: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  donationOption: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E84C0E',
    height: 30,
    marginTop: 8,
  },
  donationInput: {
    marginBottom: 20,
  },
});
