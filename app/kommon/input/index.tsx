import React from "react";
import { TextInput, View } from "react-native";

interface Props {
  name: string;
  setName: (text: string) => void | undefined;
}
const Input: React.FC<Props> = ({ setName, name }: Props) => {
  return (
    <View>
      <TextInput
        placeholder="Your name:"
        className="border border-slytherin-lightSilver rounded-lg mt-2 p-2 rounded-s w-[200px]"
        onChangeText={setName}
        value={name}
      />
    </View>
  );
};

export default Input;
