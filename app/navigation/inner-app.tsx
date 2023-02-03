import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/models/root-stack-param-list";
import { LoginScreen } from "@/screens/login";
import { HomeScreen } from "@/screens/home";
import { SWRConfig } from "swr";
import { fetcher } from "@/helpers/fetcher";
//SCREENS
import { CharacterScreen } from "@/screens/character";
import { Gryffindor } from "@/screens/gryffindor";
import { Hufflepuff } from "@/screens/hufflepuff";
import { Ravenclaw } from "@/screens/ravenclaw";
import { Slytherin } from "@/screens/slytherin";
import { UserList } from "@/screens/userList";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const InnerApp: React.FC = () => {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <Stack.Navigator
        initialRouteName={"LoginScreen"}
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#049372",
          },
          headerTitle: "",
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="GryffindorScreen"
          component={Gryffindor}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="HufflepuffScreen"
          component={Hufflepuff}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="RavenclawScreen"
          component={Ravenclaw}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="SlytherinScreen"
          component={Slytherin}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="CharacterScreen"
          component={CharacterScreen}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="UserListScreen"
          component={UserList}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "black",
          }}
        />
      </Stack.Navigator>
    </SWRConfig>
  );
};
