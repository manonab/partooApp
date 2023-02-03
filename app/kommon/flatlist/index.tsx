import React from "react";
import { Character } from "@/models/character";
import { RootNavigationProp } from "@/models/root-stack-param-list";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  data: Character[];
  setIsValues: (id: Partial<Character["id"]>) => void;
}

export const FlatlistItems: React.FC<Props> = ({
  data,
  setIsValues,
}: Props) => {
  const navigation = useNavigation<RootNavigationProp>();
  const [itemSelected, setItemSelected] = React.useState<Character["id"][]>([]);
  const [addValues, setAddValues] = React.useState<boolean>(false);

  const handleSelected = (id: Character["id"]) => {
    if (itemSelected.includes(id)) {
      const filter = itemSelected.filter(item => item !== id);
      setItemSelected(filter);
    } else {
      setItemSelected([...itemSelected, id]);
    }
    setAddValues(true);
  };

  const handleCLick = () => {
    if (itemSelected.length) {
      const filteredArray = data.filter(value =>
        itemSelected.includes(value.id),
      );
      setIsValues(filteredArray);
    }
  };
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
      onLongPress={() => handleSelected(id)}
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
            className={`w-40 h-40 rounded-xl mx-2 my-2 ${
              itemSelected.includes(id) && "border-griffindor-gold border"
            }`}
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
      {addValues && (
        <TouchableOpacity onPress={handleCLick}>
          <Text className="text-whiter text-center pb-10">
            ADD CHARACTER TO MY LIST
          </Text>
        </TouchableOpacity>
      )}
      <FlatList
        contentContainerStyle={{
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        data={data}
        renderItem={({ item }) => (
          <>
            <Item
              image={item.image}
              name={item.name}
              id={item.id}
              house={item.house}
              species={item.species}
              hogwartsStudent={item.hogwartsStudent}
              hogwartsStaff={item.hogwartsStaff}
            />
          </>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
