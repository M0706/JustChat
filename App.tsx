// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * Generated with the TypeScript template
//  * https://github.com/react-native-community/react-native-template-typescript
//  *
//  * @format
//  */

//  import React from 'react';
//  import {
//    SafeAreaView,
//    ScrollView,
//    StatusBar,
//    StyleSheet,
//    Text,
//    useColorScheme,
//    View,
//  } from 'react-native';

//  import {
//    Colors,
//    DebugInstructions,
//    Header,
//    LearnMoreLinks,
//    ReloadInstructions,
//  } from 'react-native/Libraries/NewAppScreen';

//  const Section: React.FC<{
//    title: string;
//  }> = ({children, title}) => {
//    const isDarkMode = useColorScheme() === 'dark';
//    return (
//      <View style={styles.sectionContainer}>
//        <Text
//          style={[
//            styles.sectionTitle,
//            {
//              color: isDarkMode ? Colors.white : Colors.black,
//            },
//          ]}>
//          {title}
//        </Text>
//        <Text
//          style={[
//            styles.sectionDescription,
//            {
//              color: isDarkMode ? Colors.light : Colors.dark,
//            },
//          ]}>
//          {children}
//        </Text>
//      </View>
//    );
//  };

//  const App = () => {
//    const isDarkMode = useColorScheme() === 'dark';

//    const backgroundStyle = {
//      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//    };

//    return (
//      <SafeAreaView style={backgroundStyle}>
//        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//        <ScrollView
//          contentInsetAdjustmentBehavior="automatic"
//          style={backgroundStyle}>
//          <Header />
//          <View
//            style={{
//              backgroundColor: isDarkMode ? Colors.black : Colors.white,
//            }}>
//            <Section title="Step One">
//              Edit <Text style={styles.highlight}>App.js</Text> to change this
//              screen and then come back to see your edits.
//            </Section>
//            <Section title="See Your Changes">
//              <ReloadInstructions />
//            </Section>
//            <Section title="Debug">
//              <DebugInstructions />
//            </Section>
//            <Section title="Learn More">
//              Read the docs to discover what to do next:
//            </Section>
//            <LearnMoreLinks />
//          </View>
//        </ScrollView>
//      </SafeAreaView>
//    );
//  };

//  const styles = StyleSheet.create({
//    sectionContainer: {
//      marginTop: 32,
//      paddingHorizontal: 24,
//    },
//    sectionTitle: {
//      fontSize: 24,
//      fontWeight: '600',
//    },
//    sectionDescription: {
//      marginTop: 8,
//      fontSize: 18,
//      fontWeight: '400',
//    },
//    highlight: {
//      fontWeight: '700',
//    },
//  });

//  export default App;



// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { AppState, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import LoginNavigator, {
  MainStackNavigator,
} from "./navigation/LoginNavigator";
import { NavigationContainer } from "@react-navigation/native";

import Amplify, { Analytics } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import { AuthDetails } from "./store/actions/auth-actions";

import config from "./src/aws-exports";

import { Cache } from "aws-amplify";
import AddProfilePhoto from "./screens/Personal/Shared/AddProfilePhoto";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

Amplify.configure(config);

function App() {
  // const isLoadingComplete = useCachedResources();
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




  // if (!isLoadingComplete) {
  //   return null;
  // }
  // else
  if (currentState.isAuth) {
      return (
        <SafeAreaProvider>
          
          <NavigationContainer>
            <MainStackNavigator colorScheme={colorScheme} />
          </NavigationContainer>
          <StatusBar />
        </SafeAreaProvider>
      );
    
  } else {
   // Analytics.record("MainChatScreen Visit");

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

export default App;
