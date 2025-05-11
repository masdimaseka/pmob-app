import BtnPrimary from "@/components/BtnPrimary";
import { FIREBASE_AUTH } from "@/firebase.config";
import { GlobalStyles } from "@/style/global.style";
import { Link } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
    <View style={[GlobalStyles.container]}>
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
        <Text style={[GlobalStyles.title, { textAlign: "center" }]}>Login</Text>
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
          <BtnPrimary text="Login" onPress={singIn} />
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
        <Link style={{ color: Colors.primary }} href="/register">
          Register Here
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
