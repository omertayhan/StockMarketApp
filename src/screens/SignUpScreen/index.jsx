import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import firebase from "../../../firebaseConfig"; // Firebase yapılandırma dosyasını içe aktarın
import { styles } from "./styles"; // Stil dosyasından stilleri içe aktarın

const Logo = require("../../../assets/ota.png");

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      // Kayıt başarılıysa, kullanıcı bilgileri userCredential.user içinde olacak
      console.log("Kayıt başarılı:", userCredential.user);
    } catch (error) {
      console.error("Kayıt hatası:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
