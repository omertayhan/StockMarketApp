import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, TextInput } from "react-native";
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

  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(current_price.usd.toString());

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  const screenWidth = Dimensions.get("window").width;

  const formatCurrency = ({ value }) => {
    "worklet";
    if (value === "") {
      if (current_price.usd < 1) {
        return `$${current_price.usd}`;
      }
      return `$${current_price.usd.toFixed(2)}`;
    }
    if (current_price.usd < 1) {
      return `$${parseFloat(value)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setUsdValue((floatValue * current_price.usd).toString());
  };

  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setCoinValue((floatValue / current_price.usd).toString());
  };

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <GestureHandlerRootView>
        <LineChart.Provider
          data={prices.map(([timestamp, value]) => ({ timestamp, value }))}
        >
          <CoinDetailedHeader
            image={small}
            symbol={symbol}
            market_cap_rank={market_cap_rank}
          />
          <View style={styles.priceContainer}>
            <View>
              <Text style={styles.name}> {name} </Text>
              <LineChart.PriceText
                format={formatCurrency}
                style={styles.currentPrice}
              />
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
          <LineChart height={screenWidth / 2} width={screenWidth * 0.9}>
            <LineChart.Path color={percentageColor} />
            <LineChart.CursorCrosshair color={"red"}>
              {/* <LineChart.Tooltip textStyle={{ color: "white" }} /> */}
              <LineChart.Tooltip position="bottom" color={"white"}>
                <LineChart.DatetimeText style={{ color: "white" }} />
              </LineChart.Tooltip>
            </LineChart.CursorCrosshair>
          </LineChart>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text style={{ color: "white", alignSelf: "center" }}>
                {symbol.toUpperCase()}
              </Text>
              <TextInput
                style={styles.input}
                value={coinValue}
                keyboardType="numeric"
                onChangeText={changeCoinValue}
              />
            </View>

            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text style={{ color: "white", alignSelf: "center" }}> USD </Text>
              <TextInput
                style={styles.input}
                value={usdValue}
                keyboardType="numeric"
                onChangeText={changeUsdValue}
              />
            </View>
          </View>
        </LineChart.Provider>
      </GestureHandlerRootView>
    </View>
  );
};

export default CoinDetailedScreen;
