import { GlobalStyles } from "@/style/global.style";
import React from "react";
import { Text, View } from "react-native";

export default function IndexHome() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Home</Text>
    </View>
  );
}
