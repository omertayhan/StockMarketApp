import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bitcoinImg: {
    height: 30,
    width: 30,
    marginRight: 10,
    alignSelf: "center",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    color: "white",
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
    justifyContent: "space-between",
  },
  rank: {
    fontWeight: "bold",
    color: "white",
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
});
export default styles;
