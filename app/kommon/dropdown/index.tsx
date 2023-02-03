import { mockHarryPotter } from "@/data/mocks";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

interface Props {
  setThemedHouse: (house: string) => void | undefined;
}
const Dropdown: React.FC<Props> = ({ setThemedHouse }: Props) => {
  return (
    <SelectDropdown
      data={mockHarryPotter.map(item => item.house)}
      onSelect={selectedItem => {
        setThemedHouse(selectedItem);
      }}
      defaultButtonText={"Select your house"}
      buttonTextAfterSelection={selectedItem => {
        return selectedItem;
      }}
      onChangeSearchInputText={item => console.log(item)}
      rowTextForSelection={item => {
        return item;
      }}
    />
  );
};

export default Dropdown;
