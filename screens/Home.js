import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import { primary, white } from "../constants/colors";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 35,
        backgroundColor: white,
      }}
    >
      <Image
        source={require("../assets/icon.png")}
        style={{ width: 80, height: 80, marginBottom: 30 }}
      />
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
    </SafeAreaView>
  );
}

function ProductCard({}) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#f6f6f6",
        padding: 20,
        borderRadius: 5,
      }}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        style={{
          width: 60,
          height: 60,
          marginRight: 10,
          borderRadius: 10,
        }}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            color: primary,
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 3,
          }}
        >
          Products
        </Text>
        <Text>Expiry Date</Text>
      </View>
    </View>
  );
}
