import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { InnerApp } from "@/navigation/inner-app";

export default function App() {
  return (
    <NavigationContainer>
      <InnerApp />
    </NavigationContainer>
  );
}
