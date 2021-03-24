import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Onboard from './screens/Onboard'
import Login from './screens/Login'

const AppStack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf')
  });
  const [showOnboard, setshowOnboard] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setshowOnboard(true);
      }
      else {
        setshowOnboard(false);
      }
    });
  }, [])
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">

          {showOnboard && <AppStack.Screen component={Onboard} name="Onboard" />}
          <AppStack.Screen component={Login} name="Login" />
        </AppStack.Navigator>
      </NavigationContainer>
    )
  }
}

