import { Character } from "@/models/character";
import { RootNavigationProp } from "@/models/root-stack-param-list";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  data: Character[];
}

export const Slytherin: React.FC<Props> = ({ data }: Props) => {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <>
      <TouchableOpacity
        className="h-1/6 bg-slytherin-green w-[150px] bottom-20 left-10 absolute rounded-[999px] mx-auto"
        onPress={() => navigation.navigate("SlytherinScreen", { data: data })}>
        <Text className="text-center text-xlarge mx-auto my-auto text-whiter">
          Characters
        </Text>
      </TouchableOpacity>
    </>
  );
};
