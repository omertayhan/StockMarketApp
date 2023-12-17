import React, { useEffect, useState } from "react";
import CoinItem from "../../components/CoinItem";
import { FlatList, RefreshControl } from "react-native";
import { getMarketData } from "../../services/requests";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins(coinsData);
    setLoading(false);
  };

  const reFetchCoins = async () => {
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins((existingCoins) => [...existingCoins, ...coinsData]); // birden fazla array olusturulmuyor tek bir array içerisine yeni gelen veriler aktarılmıs oluyor 3 nokta ile
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      onEndReached={() => fetchCoins(coins.length / 50 + 1)}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor={"white"}
          onRefresh={reFetchCoins}
        />
      }
    />
  );
};

export default HomeScreen;
