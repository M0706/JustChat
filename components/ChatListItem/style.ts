import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10
  },

  leftContainer: {
    flexDirection: 'row'
  },

  midContainer: {
    justifyContent: 'space-around'
  },

  userName: {
    fontWeight: 'bold',
    fontSize: 16
  },

  lastMessage: {
    fontSize: 16,
    color: 'grey'
  },

  time: {
    fontSize: 16,
    color: 'grey'
  },

  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 60
  }
});

export default style;