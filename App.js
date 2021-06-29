import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {Nav} from './src/utiles/navigationType'
import Home from './src/screens/home'
import Login from './src/screens/login'
import Region from './src/screens/region'
const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#139fca',
  
    accent: '#f1c40f',
    placeholder: '#c4c2c2', text: 'white',  
   
  },
  
};
enableScreens();

export default function App() {
  //  let [page,setPage]= React.useState({});


  const [loaded] = Font.useFonts({
    AvenirNextReg: require('./src/fonts/Metropolis-Regular.otf'),
    AvenirNextThin: require('./src/fonts/Metropolis-Thin.otf'),
    AvenirNextELight: require('./src/fonts/Metropolis-ExtraLight.otf'),
    AvenirNextBold: require('./src/fonts/Metropolis-Bold.otf'),
   
  });

  if (!loaded) {
    return null;
  }
  const Stack = createNativeStackNavigator();
Stack.Navigator.defaultProps = {
  headerMode: 'none',
};
  return (
<>
<StatusBar style="light" backgroundColor="#1d243e"/>
    <PaperProvider theme={theme}>
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown: false,}} initialRouteName={Nav.Login} >
          <Stack.Screen name={Nav.Login} component={Login} />
          <Stack.Screen name={Nav.Home} component={Home} />
          <Stack.Screen name={Nav.Region} component={Region} />
        </Stack.Navigator>          
        </NavigationContainer>

    </PaperProvider></>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
