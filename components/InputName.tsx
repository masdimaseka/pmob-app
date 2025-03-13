import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function InputName() {
  const [name, setName] = useState("");

  const showAlert = () => {
    Alert.alert(`Hello ${name}`, "Primakara Luar Biasa", [
      { text: "Cancel" },
      { text: "OK" },
    ]);
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
      }}
    >
      <TextInput
        style={[styles.inputBox, { flex: 6 }]}
        placeholder="Input Your Name Here!"
        onChangeText={(newName) => setName(newName)}
        defaultValue={name}
      />
      <Pressable style={[styles.inputBtn, { flex: 1 }]} onPress={showAlert}>
        <Text style={styles.inputBtnText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: "#fff",
    height: 40,
  },
  inputBtn: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#003764",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBtnText: {
    color: "#fff",
    fontWeight: "semibold",
  },
});
