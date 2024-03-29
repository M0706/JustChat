import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
      buttonTakePic: {
        alignSelf: 'center',
        marginVertical: 10,
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'black',
      },
  buttonRecord: {
    alignSelf: 'center',
    marginVertical: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff4343',
  },
  buttonStop: {
    alignSelf: 'center',
    marginVertical: 20,
    height: 30,
    width: 30,
    borderRadius: 3,
    backgroundColor: '#ff4343',
  },
});

export default styles;