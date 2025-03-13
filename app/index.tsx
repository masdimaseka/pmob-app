import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "@/components/Card";
import InputName from "@/components/InputName";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Primakara</Text>
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
        <Text style={styles.title}>What's your name?</Text>
        <InputName />
      </View>

      <View style={{ marginTop: 16 }}>
        <Text style={styles.title}>Galleries</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
