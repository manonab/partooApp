import { NavigationProp } from "@react-navigation/native";
import { Character } from "./character";

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: { house: string };
  GryffindorScreen: { data: Partial<Character[]> };
  RavenclawScreen: { data: Partial<Character[]> };
  HufflepuffScreen: { data: Partial<Character[]> };
  SlytherinScreen: { data: Partial<Character[]> };
  CharacterScreen: {
    name: string | undefined;
    id: string | undefined;
    image: string | undefined;
    house: string | undefined;
    species: string | undefined;
    hogwartsStudent: boolean | undefined;
    hogwartsStaff: boolean | undefined;
  };
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;
