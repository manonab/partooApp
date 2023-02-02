import React from "react";
import { KeyboardAvoidingView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/models/root-stack-param-list";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export const HomeScreen: React.FC<Props> = ({ route }: Props) => {
  const { name, house } = route.params;
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Text>
          {name}, {house}
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
