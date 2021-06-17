import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { AppState } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import LoginNavigator, {
  MainStackNavigator,
} from "./navigation/LoginNavigator";
import { NavigationContainer } from "@react-navigation/native";

import Amplify, { Analytics } from "aws-amplify";
import { getUser } from "./graphqlCustom/queries";
import { createUser } from "./src/graphql/mutations";
import { useDispatch, useSelector } from "react-redux";
import { AuthDetails } from "./store/actions/auth-actions";

import config from "./src/aws-exports";

import { Cache } from "aws-amplify";
import AddProfilePhoto from "./screens/Personal/Shared/AddProfilePhoto";

Amplify.configure(config);

function Index() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();

  const currentState = useSelector((state) => state.currentUserInfo);


  useEffect(() => {
    let unmounted = false;
    if (!currentState.isAuth) {
      dispatch(AuthDetails());
    }
    return () => { unmounted = true };

  }, [dispatch]);




  if (!isLoadingComplete) {
    return null;
  } else if (currentState.isAuth) {
      return (
        <SafeAreaProvider>
          <NavigationContainer>
            <MainStackNavigator colorScheme={colorScheme} />
          </NavigationContainer>
          <StatusBar />
        </SafeAreaProvider>
      );
    
  } else {
    Analytics.record("MainChatScreen Visit");

    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        <NavigationContainer>
          <LoginNavigator colorScheme={colorScheme} />
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default Index;
