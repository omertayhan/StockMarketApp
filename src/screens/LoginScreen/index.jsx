import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { auth } from "../../services/firebase";
import { useNavigation } from "@react-navigation/native";
import { UserScreenStyles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

const Logo = require("../../../assets/ota.png");

const UserScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState(""); // Kullanıcının e-posta adresi
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    if (user) {
      setUserEmail(user.email); // Oturum açmış kullanıcının e-posta adresini al
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUserEmail(""); // Kullanıcı oturumunu kapatırken kullanıcı bilgisini temizle
      await AsyncStorage.removeItem("userEmail"); // AsyncStorage'den kullanıcı bilgisini kaldır
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      console.log("Successful login:", user);
      setUserEmail(user.email); // Oturum açmış kullanıcının e-posta adresini al
      await AsyncStorage.setItem("userEmail", user.email);
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(
        "Login Error",
        "Invalid email or password! Check Again Please!"
      );
    }
  };

  const handleSignUpNavigation = () => {
    navigation.navigate("SignUpScreen");
  };

  if (initializing) return null;

  if (!userEmail) {
    return (
      <View style={UserScreenStyles.container}>
        <Image source={Logo} style={UserScreenStyles.logo} />
        <Text style={UserScreenStyles.title}>User Login</Text>
        <View style={UserScreenStyles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={UserScreenStyles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={UserScreenStyles.input}
          />
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={UserScreenStyles.loginButton}
        >
          <Text style={UserScreenStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={UserScreenStyles.signUpButton}
          onPress={handleSignUpNavigation}
        >
          <Text style={UserScreenStyles.signUpText}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={UserScreenStyles.container}>
        <Image source={Logo} style={UserScreenStyles.logo} />
        <Text style={UserScreenStyles.email}>{userEmail}</Text>
        <Text style={UserScreenStyles.appText}>Welcome Stock Market App</Text>
        <TouchableOpacity
          onPress={handleLogout}
          style={UserScreenStyles.logoutButton}
        >
          <MaterialIcons name="logout" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
};

export default UserScreen;
