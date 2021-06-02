import { StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    elevation: 1,
    shadowOpacity: 1,
    borderRadius: 20,
    padding: 10,
    display: 'flex',
    // maxWidth: "80%" ,
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
  image:{
    width: "100%", 
    height: 200,
    borderRadius: 2,
    
  }
});

export default styles;