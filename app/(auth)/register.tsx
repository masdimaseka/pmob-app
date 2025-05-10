import BtnPrimary from "@/components/BtnPrimary";
import { FIREBASE_AUTH } from "@/firebaseconfig";
import { GlobalStyles } from "@/style/global.style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered:", user);
      alert(
        "User registered successfully, please check your email for verification"
      );
    } catch (error: any) {
      console.error("Error registering:", error);
      alert("Register failed failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Register</Text>
      <TextInput
        style={styles.formInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.formInput}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <BtnPrimary text="Login" onPress={signUp} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  formInput: {
    backgroundColor: "white",
    marginBottom: 12,
    borderRadius: 8,
  },
});
