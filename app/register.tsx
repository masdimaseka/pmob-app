import BtnPrimary from "@/components/BtnPrimary";
import { Colors } from "@/constant/COLORS";
import { FIREBASE_AUTH } from "@/firebase.config";
import { GlobalStyles } from "@/style/global.style";
import { Link } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
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
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 64,
            height: 64,
            marginBottom: 24,
            borderRadius: 100,
          }}
          source={require("@/assets/images/rev.jpg")}
        />
      </View>
      <View style={{ marginVertical: 16 }}>
        <Text style={[GlobalStyles.title, { textAlign: "center" }]}>
          Register
        </Text>
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
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <BtnPrimary text="Register" onPress={signUp} />
        </>
      )}
      <View
        style={{
          gap: 4,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 12,
        }}
      >
        <Text>Already have an account?</Text>
        <Link style={{ color: Colors.primary }} href="/login">
          Login Here
        </Link>
      </View>
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
