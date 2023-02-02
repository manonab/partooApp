import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/models/root-stack-param-list";
import { LoginScreen } from "@/screens/login";
import { HomeScreen } from "@/screens/home";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const InnerApp: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={"LoginScreen"}
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#049372",
        },
        headerTitle: "",
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
