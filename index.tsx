import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import LoginNavigator, {
  MainStackNavigator,
} from "./navigation/LoginNavigator";
import { NavigationContainer } from "@react-navigation/native";

import Amplify, { Auth, API, graphqlOperation, Hub } from "aws-amplify";
import { getUser } from "./graphqlCustom/queries";
import { createUser } from "./src/graphql/mutations";
import { useDispatch } from "react-redux";
import config from "./aws-exports";

import { Cache } from "aws-amplify";

Amplify.configure(config);

function Index() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [isAuth, setIsAuth] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: false,
      });
      if (userInfo) {
        setIsAuth(true);
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );

        await Cache.setItem("UserID", userInfo.attributes.sub);

        if (userData.data.getUser) {
          console.log("User registered");
          return;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg",
          status: "Hey, Im a tree",
        };

        await API.graphql(graphqlOperation(createUser, { input: newUser }));
      }

      setLoadingAuth(true);
    };

    fetchUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else if (isAuth) {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <MainStackNavigator colorScheme={colorScheme} />
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    );
  } else {
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
