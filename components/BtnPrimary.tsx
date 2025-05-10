import { Colors } from "@/constant/COLORS";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type BtnPrimaryProps = {
  text: string;
  onPress: () => void;
};

export default function BtnPrimary({ text, onPress }: BtnPrimaryProps) {
  return (
    <Pressable style={styles.btnPrimary} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "medium",
    fontSize: 16,
  },
});
