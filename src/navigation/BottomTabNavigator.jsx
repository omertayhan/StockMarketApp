import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import LoginScreen from "../screens/LoginScreen"
import { FontAwesome,Foundation } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: { backgroundColor: "#181818" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="home" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Foundation name="graph-pie" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchlistScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="star" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="user" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
