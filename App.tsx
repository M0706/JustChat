import React from "react";

import Amplify from "aws-amplify";
import { Text, View } from "react-native";
import config from "./src/aws-exports";
import Index from "./index";
import { Provider } from "react-redux";
import store from "./store";
import "react-native-gesture-handler";
import { RecoilRoot } from "recoil";

Amplify.configure(config);

export default function App() {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <React.Suspense fallback={<View><Text>Loading...</Text></View>}>
          <Index />
        </React.Suspense>
      </RecoilRoot>
    </Provider>
  );
}
