import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 10
  },

  leftContainer: {
    flexDirection: 'row'
  },

  midContainer: {
    justifyContent: 'space-around',
  },

  userName: {
    fontWeight: 'bold',
    fontSize: 16
  },

  status: {
    fontSize: 16,
    color: 'grey'
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