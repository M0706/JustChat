import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 10,
  },

  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
    paddingBottom: 25,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },

  midContainer: {
    width: "65%",
  },

  userName: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 8,
  },

  lastMessage: {
    fontSize: 16,
    color: "grey",
  },

  time: {
    fontSize: 14,
    color: "grey",
    paddingTop: 5,
    marginRight: 10,
  },

  avatar: {
    width: 60,
    height: 60,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 3,
    borderRadius: 60,
  },

  avataropen: {
    width: 200,
    height: 200,
    marginLeft: 80,
    marginRight: 500,
    marginTop: 200,
    marginBottom: 1000,
    borderRadius: 60,
  },
});
export default style;
