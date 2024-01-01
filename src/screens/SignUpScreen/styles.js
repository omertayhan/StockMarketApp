import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    color: "white",
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  signUpButton: {
    backgroundColor: "#4169E1",
    padding: 15,
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
