import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import SearchableDropDown from "react-native-searchable-dropdown";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const AddNewAssetScreen = () => {
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState("");
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <SearchableDropDown
        onItemSelect={(item) => console.log(item)}
        containerStyle={styles.containerStyle}
        itemStyle={styles.itemStyle}
        itemTextStyle={{ color: "white" }}
        items={[]}
        resetValue={false}
        placeholder={"Select a coin.."}
        placeholderTextColor="white"
        textInputProps={{
          underlineColorAndroid: "transparent",
          style: styles.textInputProps,
        }}
      />
      <View style={styles.boughtQuantitiyContainer}>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{ color: "white", fontSize: 90 }}
            value={boughtAssetQuantity}
            placeholder="0"
            keyboardType="numeric"
            onChangeText={setBoughtAssetQuantity}
          />
          <Text style={styles.ticker}>BTC</Text>
        </View>
        <Text style={styles.pricePerCoin}>$40000 per coin</Text>
      </View>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("AddNewAssetScreen")}
      >
        <Text style={styles.buttonText}>Add New Asset</Text>
      </Pressable>
    </View>
  );
};

export default AddNewAssetScreen;
