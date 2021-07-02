import React from "react";

import Amplify from "aws-amplify";

import config from "./src/aws-exports";
import Index from "./index";
import { Provider } from "react-redux";
import store from "./store";
import 'react-native-gesture-handler'

Amplify.configure(config);

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
