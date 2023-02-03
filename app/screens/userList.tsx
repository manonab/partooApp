import { FlatlistItems } from "@/kommon/flatlist";
import { RootStackParamList } from "@/models/root-stack-param-list";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "UserListScreen">;

export const UserList: React.FC<Props> = ({ route }: Props) => {
  const { values } = route.params;

  return (
    <View className="bg-[#000] h-full">
      <FlatlistItems data={values} />
    </View>
  );
};
