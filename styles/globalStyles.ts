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
    fontWeight: "bold",
  },
  modalBg: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 8,
    borderColor: "lightgray",
    borderWidth: 0.5,
    marginTop: 8,
    marginBottom: 16,
  },
  inputBox: {
    backgroundColor: "#f7f7f7",
    paddingVertical: 4,
    borderRadius: 8,
    borderColor: "lightgray",
    borderWidth: 0.5,
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
  },
  inputTextBox: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: "#fff",
    height: 40,
  },
});

export default globalStyles;
