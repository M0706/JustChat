import Realm from "realm";
//models
import { ChatRoom } from "./models";

export default new Realm({
  schema: [ChatRoom],
  schemaVersion: 1, //add a version number
  migration: (oldRealm, newRealm) => {},
});
