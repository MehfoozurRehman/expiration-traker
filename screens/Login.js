import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { black, primary, white } from "../constants/colors";

export default function Login({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: white,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image
        source={require("../assets/icon.png")}
        style={{ width: 100, height: 100, marginBottom: 30 }}
      />
      <Text
        style={{
          color: black,
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 50,
        }}
      >
        Lets <Text style={{ color: primary }}>Get Started</Text>
      </Text>
      <TextInput
        placeholder="Phone Number"
        style={{
          backgroundColor: white,
          borderWidth: 1,
          borderColor: primary,
          height: 45,
          width: "100%",
          paddingHorizontal: 15,
          borderRadius: 5,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: primary,
          height: 45,
          marginTop: 30,
          width: "100%",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={{ color: white }}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
