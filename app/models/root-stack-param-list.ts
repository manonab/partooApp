import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: { name: string; house: string };
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;
