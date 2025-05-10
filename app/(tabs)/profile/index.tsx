import BtnPrimary from "@/components/BtnPrimary";
import { GlobalStyles } from "@/style/global.style";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function IndexProfile() {
  const router = useRouter();

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Profile</Text>
      <View style={{ gap: 12 }}>
        <BtnPrimary text="Login" onPress={() => router.push("/login")} />
        <BtnPrimary text="Register" onPress={() => router.push("/register")} />
      </View>
    </View>
  );
}
