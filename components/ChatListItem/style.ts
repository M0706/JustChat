import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    padding: 10
  },

  leftContainer: {
    flexDirection: 'row'
  },

  midContainer: {
    justifyContent: 'space-around',
    width: '65%',
  },

  userName: {
    fontWeight: 'bold',
    fontSize: 16
  },

  lastMessage: {
    fontSize: 16,
    color: 'grey',
  },

  time: {
    fontSize: 14,
    color: 'grey',
    paddingTop: 5,
    marginRight: 10,
  },

  avatar: {
    width: 60,
    height: 60,
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 60
  }
});

export default style;