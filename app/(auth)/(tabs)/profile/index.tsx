import BtnPrimary from "@/components/BtnPrimary";
import { FIREBASE_AUTH } from "@/firebase.config";
import { GlobalStyles } from "@/style/global.style";
import React from "react";
import { Text, View } from "react-native";

export default function IndexProfile() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Profile</Text>
      <View style={{ gap: 12 }}>
        <BtnPrimary text="Log Out" onPress={() => FIREBASE_AUTH.signOut()} />
      </View>
    </View>
  );
}
