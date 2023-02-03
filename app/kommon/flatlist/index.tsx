import { Character } from "@/models/character";
import { RootNavigationProp } from "@/models/root-stack-param-list";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  data: Character[];
}

export const FlatlistItems: React.FC<Props> = ({ data }: Props) => {
  const navigation = useNavigation<RootNavigationProp>();

  const Item = ({
    image,
    name,
    id,
    house,
    species,
    hogwartsStudent,
    hogwartsStaff,
  }: Partial<Character>) => (
    <TouchableOpacity
      className="relative left-10"
      onPress={() =>
        navigation.navigate("CharacterScreen", {
          name: name,
          id: id,
          image: image,
          house: house,
          species: species,
          hogwartsStudent: hogwartsStudent,
          hogwartsStaff: hogwartsStaff,
        })
      }>
      {image ? (
        <>
          <Text className="text-whiter text-center">{name}</Text>
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            className="w-40 h-40 rounded-xl mx-2 my-2"
          />
        </>
      ) : (
        <Text className="text-center relative rounded-xl mx-2 my-2 text-whiter text-l w-40 h-20 ">
          {name}
        </Text>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={{
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        data={data}
        renderItem={({ item }) => (
          <Item
            image={item.image}
            name={item.name}
            id={item.id}
            house={item.house}
            species={item.species}
            hogwartsStudent={item.hogwartsStudent}
            hogwartsStaff={item.hogwartsStaff}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
