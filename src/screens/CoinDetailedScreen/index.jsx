import React from "react";
import { View, Text, Dimensions } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailedHeader from "./comnponents/CoinDetailedHeader";
import { AntDesign } from "@expo/vector-icons";
import { LineChart, CandlestickChart } from "react-native-wagmi-charts";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import styles from "./styles";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailedHeader
        image={small}
        symbol={symbol}
        market_cap_rank={market_cap_rank}
      />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}> {name} </Text>
          <Text style={styles.currentPrice}> ${current_price.usd} </Text>
        </View>
        <View
          style={{
            backgroundColor: percentageColor,
            paddingHorizontal: 3,
            paddingVertical: 8,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color={"white"}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.priceChange}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <GestureHandlerRootView>
        <LineChart.Provider
          data={prices.map(([timestamp, value]) => ({ timestamp, value }))}
        >
          <LineChart height={screenWidth / 2} width={screenWidth}>
            <LineChart.Path color={"white"} />
            <LineChart.CursorCrosshair color={"white"} />
          </LineChart>
          <LineChart.PriceText color={"white"} />
          <LineChart.DatetimeText color={"white"} />
        </LineChart.Provider>
      </GestureHandlerRootView>
    </View>
  );
};

export default CoinDetailedScreen;
