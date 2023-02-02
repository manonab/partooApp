import React from "react";
import { View, Text } from "react-native";

export const Home: React.FC = () => {
  return (
    <>
      <View className="mx-10 mt-20 bg-griffindor-darkRed rounded-xl items-center">
        <Text className="text-xl m-10 text-griffindor-gold">Griffindor</Text>
      </View>
      <View className="mx-10 mt-20 bg-slytherin-darkGreen rounded-xl items-center">
        <Text className="text-xl m-10 text-slytherin-lightSilver">
          Slytherin
        </Text>
      </View>
      <View className="mx-10 mt-20 bg-ravenclaw-darkBlue rounded-xl items-center">
        <Text className="text-xl m-10 text-ravenclaw-gold">Ravenclaw</Text>
      </View>
      <View className="mx-10 mt-20 bg-hufflepuff-canary rounded-xl items-center">
        <Text className="text-xl m-10 text-hufflepuff-darkBrown">
          Hufflepuff
        </Text>
      </View>
    </>
  );
};
