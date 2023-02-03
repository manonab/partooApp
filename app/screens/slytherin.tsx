import { useList } from "@/hooks/useList";
import { FlatlistItems } from "@/kommon/flatlist";
import { Character } from "@/models/character";
import {
  RootNavigationProp,
  RootStackParamList,
} from "@/models/root-stack-param-list";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "SlytherinScreen">;

export const Slytherin: React.FC<Props> = ({ route }: Props) => {
  const { data } = route.params;
  const [values, setIsValues] = React.useState<Character[]>([]);
  const navigation = useNavigation<RootNavigationProp>();
  const { addingValues } = useList();
  return (
    <SafeAreaView className="bg-slytherin-darkGreen h-full">
      <TouchableOpacity
        className="bg-[#000] w-20 rounded-[999px] h-20 top-1 absolute right-5"
        onPress={() =>
          navigation.navigate("UserListScreen", {
            values: values,
          })
        }>
        <Text className="text-center my-auto text-whiter text-m">List</Text>
      </TouchableOpacity>
      <FlatlistItems
        data={data}
        setIsValues={setIsValues}
        values={values}
        addingValues={addingValues}
      />
    </SafeAreaView>
  );
};
