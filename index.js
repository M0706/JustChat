/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from "react";
import Amplify from "aws-amplify";
import { Text, View } from "react-native";
import config from "./src/aws-exports";
import { Provider } from "react-redux";
import store from "./store";
import "react-native-gesture-handler";
import { RecoilRoot } from "recoil";
Amplify.configure(config);

function Index() {
    return (
      <Provider store={store}>
        <RecoilRoot>
          <React.Suspense fallback={<View><Text>Loading...</Text></View>}>
            <App />
          </React.Suspense>
        </RecoilRoot>
      </Provider>
    );
  }


AppRegistry.registerComponent(appName, () => Index);





