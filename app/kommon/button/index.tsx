import React from "react";
import { Text, TouchableOpacity } from "react-native";

export interface Props {
  text: string;
  handlePress: () => void;
}

export const Button: React.FC<Props> = ({
  handlePress,
  text = "Let's go",
}: Props) => {
  return (
    <TouchableOpacity
      className="mt-10 p-5 w-2/4 bg-oceanGreen rounded-2xl self-center"
      onPress={handlePress}
    >
      <Text className="text-whiter text-m text-center">{text}</Text>
    </TouchableOpacity>
  );
};
