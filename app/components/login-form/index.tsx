import React from "react";
import { Text, View } from "react-native";
//components
import { Button } from "@/kommon/button";
import Dropdown from "@/kommon/dropdown";
//packages
import { RootNavigationProp } from "@/models/root-stack-param-list";
import { useNavigation } from "@react-navigation/native";

export const LoginForm: React.FC = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [themedHouse, setThemedHouse] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  return (
    <View className="flex justify-center items-center h-3/4">
      <Text className="text-center text-xl mb-5">Welcome</Text>
      <Dropdown setThemedHouse={setThemedHouse} />
      {errorMessage && (
        <Text className="text-m text-griffindor-red">{errorMessage}</Text>
      )}
      <Button
        text="Let's go"
        handlePress={() => {
          if (themedHouse) {
            navigation.navigate("HomeScreen", { house: themedHouse });
          } else {
            setErrorMessage("You need to choose a house");
          }
        }}
      />
    </View>
  );
};
