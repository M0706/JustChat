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

  embeddedMessage: {
    display: "flex",
    // alignItems: "center",
    // font-size: .875rem,
    // lineHeight: 20,
    //margin:"0 -.25rem .0625rem",
    // marginTop:0,
    // marginRight:".25",
    // marginLeft:".25",
    // marginBottom:"0.625",
    // paddingTop: ".1875",
    // paddingRight:".25", 
    // paddingBottom:".1875",
    // paddingLeft:".4375",
    // borderRadius: 20,
    // position: "relative",
    // overflow: "hidden",
    // cursor: pointer,
    // direction: ltr,
  },
  innerText: {
    // overflow: "hidden",
    // marginInlineStart: ".5rem",
    display: "flex",
    flexDirection: "column-reverse",
  },
  messageTitle:{

  }
});

export default styles;