import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useWatchlist } from "../../../../contexts/WatchlistContext";

const CoinDetailedHeader = (props) => {
  const { coinId, image, symbol, market_cap_rank } = props;
  const navigation = useNavigation();
  const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } =
    useWatchlist();

  const checkIfCoinIsWatchedListed = () => {
    return watchlistCoinIds.some((coinIdValue) => coinIdValue === coinId);
  };

  const handleWatchListCoin = () => { 
    if (checkIfCoinIsWatchedListed()) {
      return removeWatchlistCoinId(coinId);
    }
    return storeWatchlistCoinId(coinId);
  };

  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="chevron-back-sharp"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>#{market_cap_rank}</Text>
        </View>
      </View>
      <FontAwesome
        name={checkIfCoinIsWatchedListed() ? "star" : "star-o"}
        size={30}
        color={checkIfCoinIsWatchedListed() ? "#FFBF00" : "white"}
        onPress={handleWatchListCoin}
      />
    </View>
  );
};

export default CoinDetailedHeader;
