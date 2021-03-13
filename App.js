import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "./src/assets/logo.png";

export default function App() {
  const [lenghtPassword, setLenghtPassword] = useState(0);
  const [password, setPassword] = useState("");
  const generatePassword = () => {
    const characteres =
      "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    for (let i = 0, n = characteres.length; i < lenghtPassword; i++) {
      pass += characteres.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  };
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ marginBottom: 60 }} />
      <Text style={styles.label}>{`${lenghtPassword} characters`}</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={20}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000"
          onValueChange={(value) => setLenghtPassword(parseInt(value))}
        />
      </View>
      <TouchableOpacity onPress={generatePassword}>
        <Text style={styles.btnGenerate}>Generate</Text>
      </TouchableOpacity>

      <Text style={styles.messageYouPassword}>Your password is:</Text>
      <View style={styles.passwordArea}>
        <Text style={styles.password}>{password}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3ff",
  },
  label: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#010101",
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#FFF",
    width: "90%",
    borderRadius: 7,
  },
  btnGenerate: {
    fontSize: 25,
    backgroundColor: "#f2b61d",
    borderRadius: 15,
    color: "#FFFF",
    paddingHorizontal: 100,
    marginTop: 20,
  },
  password: {
    fontSize: 25,
  },
  passwordArea: {
    width: "80%",
    height: 70,
    borderRadius: 7,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  messageYouPassword: {
    marginTop: 40,
    fontSize: 15,
  },
});
