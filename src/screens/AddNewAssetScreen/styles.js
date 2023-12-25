import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerStyle: {
    innerWidth: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  itemStyle: {
    padding: 10,
    marginTop: 2,
    backgroundColor: "#1e1e1e",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 5,
  },
  textInputProps: {
    padding: 12,
    borderWidth: 1.5,
    borderColor: "#444444",
    borderRadius: 5,
    backgroundColor: "#1e1e1e",
    color: "white",
  },
  ticker: {
    color: "grey",
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 25,
    marginLeft: 5,
  },
  boughtQuantitiyContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  buttonContainer: {
    backgroundColor: "#4169E1",
    padding: 10,
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  pricePerCoin: {
    color: "grey",
    fontWeight: "600",
    fontSize: 17,
    letterSpacing: 0.5,
  },
});

export default styles;
