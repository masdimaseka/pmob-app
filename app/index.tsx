import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import globalStyles from "@/styles/globalStyles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

export default function HomeScreen() {
  const [textHello, setTextHello] = useState("");
  const [inputText, setInputText] = useState("");
  const [submitText, setSubmitText] = useState("");

  const handleSubmit = () => {
    setSubmitText(inputText);
    setInputText("");
  };

  return (
    <SafeAreaProvider style={[globalStyles.container, { flex: 1 }]}>
      <SafeAreaView>
        <ScrollView>
          <Text style={globalStyles.title}>1. Menampilkan Teks</Text>
          <View style={globalStyles.modalBg}>
            <View style={globalStyles.inputBox}>
              <Text style={[globalStyles.title, { color: "#1ab3f0" }]}>
                {textHello}
              </Text>
            </View>
            <Pressable
              style={globalStyles.inputBtn}
              onPress={
                !textHello
                  ? () => setTextHello("Hello World")
                  : () => setTextHello("")
              }
            >
              <Text style={globalStyles.inputBtnText}>
                {!textHello ? "Tampilkan" : "Sembunyikan"}
              </Text>
            </Pressable>
          </View>

          <Text style={globalStyles.title}>2. Menampilkan Teks Input</Text>
          <View style={globalStyles.modalBg}>
            <View style={globalStyles.inputBox}>
              <Text style={[globalStyles.title, { color: "#1ab3f0" }]}>
                {submitText}
              </Text>
            </View>
            <View>
              <TextInput
                placeholder="Masukkan teks"
                style={globalStyles.inputTextBox}
                onChangeText={setInputText}
                value={inputText}
              />
              <Pressable style={globalStyles.inputBtn} onPress={handleSubmit}>
                <Text style={globalStyles.inputBtnText}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
