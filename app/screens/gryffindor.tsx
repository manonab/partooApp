import { FlatlistItems } from "@/kommon/flatlist";
import { RootStackParamList } from "@/models/root-stack-param-list";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "GryffindorScreen">;

export const Gryffindor: React.FC<Props> = ({ route }: Props) => {
  const { data } = route.params;
  return (
    <SafeAreaView className="bg-griffindor-darkRed h-full">
      <FlatlistItems data={data} />
    </SafeAreaView>
  );
};
