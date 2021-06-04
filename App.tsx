import React from "react";

import Amplify from "aws-amplify";

import config from "./aws-exports";
import Index from "./index";
import { Provider } from "react-redux";
import store from "./store";

Amplify.configure(config);

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
