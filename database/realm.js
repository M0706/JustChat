import Realm from "realm";
//models
import { ChatRoom, UserData } from "./models";

export default new Realm({
  schema: [ChatRoom, UserData],
  schemaVersion: 3, //add a version number
  migration: (oldRealm, newRealm) => {},
});
