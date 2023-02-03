import { RootStackParamList } from "@/models/root-stack-param-list";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { Image, Text, View } from "react-native";
import cx from "classnames";

type Props = NativeStackScreenProps<RootStackParamList, "CharacterScreen">;

export const CharacterScreen: React.FC<Props> = ({ route }: Props) => {
  const { name, image, hogwartsStaff, hogwartsStudent, house, species } =
    route.params;

  const themedHouse = useMemo(
    () =>
      cx({
        "text-griffindor-gold": house === "Gryffindor",
        "text-slytherin-lightSilver": house === "Slytherin",
        "text-ravenclaw-gold": house === "Ravenclaw",
        "text-hufflepuff-lightCanary": house === "Hufflepuff",
      }),
    [house],
  );
  const themedBackground = useMemo(
    () =>
      cx({
        "bg-griffindor-darkRed": house === "Gryffindor",
        "bg-slytherin-darkGreen": house === "Slytherin",
        "bg-ravenclaw-darkBlue": house === "Ravenclaw",
        "bg-hufflepuff-darkBrown": house === "Hufflepuff",
      }),
    [house],
  );
  return (
    <View className={`${themedBackground} h-full`}>
      <Text className={`${themedHouse} text-center mt-5 text-xl`}>{name}</Text>
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        className="w-2/4 h-2/4 rounded-xl mx-auto my-10"
      />
      {hogwartsStaff && (
        <Text className={`${themedHouse} text-xlarge text-center my-2 mx-10`}>
          Profesor
        </Text>
      )}
      {hogwartsStudent && (
        <Text className={`${themedHouse} text-xlarge text-center my-2 mx-10`}>
          Student
        </Text>
      )}
      <Text className={`${themedHouse} text-xlarge text-center my-2 mx-10`}>
        {species}
      </Text>
    </View>
  );
};
