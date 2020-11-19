import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import CreateProfileScreen from "./src/screens/CreateProfileScreen";
import UserDashboard from "./src/screens/UserDashboard";
import UserInvitationScreen from "./src/screens/UserInvitationScreen";
import TrackingScreen from "./src/screens/TrackingScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
        <Stack.Screen name="UserInvitation" component={UserInvitationScreen} />
        <Stack.Screen name="Tracking" component={TrackingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
