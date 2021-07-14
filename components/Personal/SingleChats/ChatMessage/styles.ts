import { StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // flexDirection:'row',
  },
  messageBox: {
    elevation: 1,
    shadowOpacity: 1,
    borderRadius: 20,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'

  },
  name: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  time: {
    alignSelf: 'flex-end',
    marginRight: 10,
    textAlign: 'right',
    fontSize: 13
  },
  myTexts: {
    color: "white"
  },
  recieverTexts: {
    color: "black"
  },

  replyText: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#687fa6",
    opacity: 0.7,
    borderLeftColor: "black",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 10,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    marginBottom: 4
  },
  messageTitle: {
    fontWeight: "bold",
  }
});

export default styles;