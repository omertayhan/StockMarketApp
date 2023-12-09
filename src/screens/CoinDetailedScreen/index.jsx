import react from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Coin from "../../../assets/data/crypto.json";

const CoinDetailedScreen = () => {
  const {
    image: { small },
  } = Coin;
  return (
    <View>
      <Ionicons name="chevron-back" size={30} color="white" />
      <Image source={{ uri: small }} />
    </View>
  );
};

export default CoinDetailedScreen;
