import { StyleSheet } from "react-native";

export const UserScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    color: "white",
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  loginButton: {
    fontWeight: "bold",
    backgroundColor: "#4169E1",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUpButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  signUpText: {
    color: "white",
  },
  email: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  appText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  logoutButton: {
    backgroundColor: "#818589",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
