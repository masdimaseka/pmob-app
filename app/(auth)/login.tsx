import BtnPrimary from "@/components/BtnPrimary";
import { FIREBASE_AUTH } from "@/firebaseconfig";
import { GlobalStyles } from "@/style/global.style";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const singIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
    } catch (error: any) {
      console.error("Error logging in:", error);
      alert("Error logging in: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Login</Text>
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
          <BtnPrimary text="Login" onPress={singIn} />
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
