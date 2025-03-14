import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Card from "@/components/Card";
import InputName from "@/components/InputName";
import globalStyles from "@/styles/globalStyles";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={[globalStyles.container, { flex: 1 }]}>
      <ScrollView>
        <Text style={globalStyles.title}>Welcome to Primakara</Text>
        <View style={{ marginTop: 16 }}>
          <Text style={globalStyles.subTitle}>What's your name?</Text>
          <InputName />
        </View>

        <View>
          <ScrollView
            horizontal={true}
            style={{ marginTop: 16, paddingBottom: 16 }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 16,
              }}
            >
              <Card
                image={require("../assets/images/banners/general.jpg")}
                title="General 1"
              />
              <Card
                image={require("../assets/images/banners/programming.jpg")}
                title="General 2"
              />
              <Card
                image={require("../assets/images/banners/general.jpg")}
                title="General 3"
              />
            </View>
          </ScrollView>
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={globalStyles.title}>Galleries</Text>
          <Pressable
            style={globalStyles.inputBtn}
            onPress={() => router.push("/galleries")}
          >
            <Text style={globalStyles.inputBtnText}>Get Albums</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
