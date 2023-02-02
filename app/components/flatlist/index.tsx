import { Listing } from "@/models/listing";
import React from "react";
import { Text } from "react-native";
import { View } from "react-native";

export const FlatListItem: React.FC<Listing> = ({ house }: Listing) => {
  return (
    <View>
      <Text>{house}</Text>
    </View>
  );
};
