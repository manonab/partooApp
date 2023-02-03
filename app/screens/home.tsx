import React from "react";
import { Text, ImageBackground, TouchableOpacity } from "react-native";
//packages
import { NativeStackScreenProps } from "@react-navigation/native-stack";
//utils
import { RootStackParamList } from "@/models/root-stack-param-list";
//components
import { Slytherin } from "@/components/slytherin";
import { Ravenclaw } from "@/components/ravenclaw";
import { Griffindor } from "@/components/griffindor";
import { Hufflepuff } from "@/components/hufflepuff";
import { useGetCharacter } from "@/hooks/useCharacter";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export const HomeScreen: React.FC<Props> = ({ route }: Props) => {
  const { house } = route.params;
  const { data } = useGetCharacter(house);

  return (
    <ImageBackground
      source={
        (house === "Hufflepuff" && require("../../assets/hufflepuff.jpeg")) ||
        (house === "Ravenclaw" && require("../../assets/ravenclaw.jpeg")) ||
        (house === "Slytherin" && require("../../assets/slytherin.jpeg")) ||
        (house === "Gryffindor" && require("../../assets/gryffindor.jpeg"))
      }
      resizeMode="cover"
      className="h-full">
      {house === "Slytherin" && <Slytherin data={data} />}
      {house === "Ravenclaw" && <Ravenclaw data={data} />}
      {house === "Gryffindor" && <Griffindor data={data} />}
      {house === "Hufflepuff" && <Hufflepuff data={data} />}
      <TouchableOpacity className="bg-whiter w-20 rounded-[999px] h-20 bottom-10 absolute right-10">
        <Text>Mes</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
