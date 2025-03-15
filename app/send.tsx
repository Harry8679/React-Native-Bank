import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function SendScreen() {
  const router = useRouter();

  const options = [
    { name: "IBAN", route: "/send/iban" },
    { name: "WALLET", route: "/wallet/wallet" },
    { name: "INTERNATIONAL", route: "/send/international" },
    { name: "CARD", route: "/send/card" },
  ] as const;

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center" }}>
      {/* Logo en haut */}
      <View style={{ alignItems: "center", marginBottom: 40, marginTop: -50 }}> {/* Descendre le logo */}
        <Image 
          source={require("../assets/logo.png")} 
          style={{ width: 200, height: 70 }} // Agrandir le logo
          resizeMode="contain" 
        />
      </View>

      {/* Liste des options */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(item.route)}
            style={{
              width: "80%", // Rendre les boutons plus larges
              backgroundColor: index === 1 ? "#2E7D32" : "white", // WALLET en vert
              padding: 15,
              borderRadius: 5,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "#ccc",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: index === 1 ? "white" : "black" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}