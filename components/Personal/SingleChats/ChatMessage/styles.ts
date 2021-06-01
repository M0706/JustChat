import { StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  messageBox: {
    elevation: 1,
    shadowOpacity: 1,
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
  
  },
  name: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  time: {
    alignSelf: 'flex-end',
    color: 'grey'
  }
});

export default styles;