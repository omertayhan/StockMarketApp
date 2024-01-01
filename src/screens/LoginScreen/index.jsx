import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import firebase from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { UserScreenStyles } from "./styles"; // Stil dosyasından stilleri içe aktarın

const Logo = require("../../../assets/ota.png");

const UserScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(username, password);
      console.log("Giriş başarılı:", userCredential.user);
      // Başarılı giriş sonrası, istediğiniz ek işlemleri burada gerçekleştirebilirsiniz
    } catch (error) {
      console.error("Giriş hatası:", error);
      // Giriş hatalıysa burada bir hata mesajı gösterebilirsiniz
    }
  };
  
  const handleSignUpNavigation = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={UserScreenStyles.container}>
      <Image source={Logo} style={UserScreenStyles.logo} />
      <Text style={UserScreenStyles.title}>User Login</Text>
      <View style={UserScreenStyles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
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
      <TouchableOpacity onPress={handleLogin} style={UserScreenStyles.loginButton}>
        <Text style={UserScreenStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={UserScreenStyles.signUpButton} onPress={handleSignUpNavigation}>
        <Text style={UserScreenStyles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserScreen;
