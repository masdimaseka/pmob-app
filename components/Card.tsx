import {
  Alert,
  Button,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Card({
  image,
  title,
}: {
  image: ImageSourcePropType;
  title: string;
}) {
  const showAlert = () => {
    Alert.alert("Perhatian", "Primakara Luar Biasa", [
      { text: "Cancel" },
      { text: "OK" },
    ]);
  };

  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={image} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Pressable style={styles.cardBtn} onPress={showAlert}>
        <Text style={styles.cardBtnText}>Show Alert</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "semibold",
    marginTop: 8,
  },
  cardImage: {
    width: 150,
    height: 100,
    borderRadius: 6,
  },
  cardBtn: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#003764",
  },
  cardBtnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "semibold",
  },
});
