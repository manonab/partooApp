import { shadow } from "@/helpers/shadow";
import { Character } from "@/models/character";
import { RootNavigationProp } from "@/models/root-stack-param-list";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  data: Character[];
}

export const Hufflepuff: React.FC<Props> = ({ data }: Props) => {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <>
      <TouchableOpacity
        className="h-1/6 bg-hufflepuff-canary rounded-s w-[150px] rounded-[999px] mx-auto bottom-20 left-10 absolute"
        style={shadow.md}
        onPress={() => navigation.navigate("HufflepuffScreen", { data: data })}>
        <Text className="text-center  text-xlarge mx-auto my-auto text-whiter">
          Characters
        </Text>
      </TouchableOpacity>
    </>
  );
};
