import React from "react";
import { Text, View } from "react-native";
//components
import { Button } from "@/kommon/button";
import Dropdown from "@/kommon/dropdown";
import Input from "@/kommon/input";
//packages
import { RootNavigationProp } from "@/models/root-stack-param-list";
import { useNavigation } from "@react-navigation/native";

export const LoginForm: React.FC = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [name, setName] = React.useState<string>("");
  const [themedHouse, setThemedHouse] = React.useState<string>("");

  return (
    <View className="flex justify-center items-center h-3/4">
      <Text className="text-center text-xl mb-5">Welcome</Text>
      <Input setName={setName} name={name} />
      <Dropdown setThemedHouse={setThemedHouse} />
      <Button
        text="Let's go"
        handlePress={() =>
          navigation.navigate("HomeScreen", { name: name, house: themedHouse })
        }
      />
    </View>
  );
};
