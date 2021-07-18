import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#333',
    fontWeight: '400',
  },
  card: {
    width: '100%',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  userInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
  status: {
    fontSize: 14,
    color: '#333333',
  },
});

export default styles;