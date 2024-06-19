import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "./components/screens/RegisterScreen";
import AccountRecoveryScreen from "./components/screens/AccountRecoveryScreen";
import LandingScreen from "./components/screens/LandingScreen";
import LoginScreen from "./components/screens/LoginScreen";
import Screen from "./components/screens/Screen";
import BookEvent from "./components/screens/BookEvent";  
import EventDetails from "./components/screens/EventDetails";
import Notification from "./components/screens/Notification";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccountRecoveryScreen"
            component={AccountRecoveryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Screen"
            component={Screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BookEvent"
            component={BookEvent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EventDetails"
            component={EventDetails}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
