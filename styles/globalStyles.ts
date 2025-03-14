import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fafbfc",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003764",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
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

export default globalStyles;
