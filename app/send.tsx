import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function SendScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* Logo en haut */}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image source={require("../assets/logo.png")} style={{ width: 150, height: 50 }} resizeMode="contain" />
      </View>

      {/* Liste des options */}
      {[
        { name: "IBAN", route: "/send/iban" },
        { name: "WALLET", route: "/send/wallet" },
        { name: "INTERNATIONAL", route: "/send/international" },
        { name: "CARD", route: "/send/card" },
      ].map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => router.push(item.route)}
          style={{
            backgroundColor: index === 1 ? "#2E7D32" : "white", // WALLET en vert
            padding: 15,
            borderRadius: 5,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", color: index === 1 ? "white" : "black" }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
