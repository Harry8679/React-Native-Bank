import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SodecScreen() {
  const router = useRouter();

  // Définir les icônes associées à chaque option
  const options = [
    { name: "Transfert", route: "/send", icon: "swap-horizontal" },
    { name: "Paiement", route: "/sodec/paiement", icon: "card" },
    { name: "Agency Banking", route: "/sodec/agency-banking", icon: "business" },
    { name: "Génération de voucher", route: "/sodec/voucher", icon: "document-text" },
    { name: "Autres services", route: "/sodec/autres-services", icon: "grid" },
  ] as const;

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center" }}>
      {/* Logo en haut */}
      {/* <View style={{ alignItems: "center", marginBottom: 40, marginTop: -50 }}>
        <Ionicons name="wallet" size={80} color="#2E7D32" /> 
      </View> */}
      <View style={{ alignItems: "center", marginBottom: 40, marginTop: -50 }}>
        <Image
          source={require("../assets/logo.png")} 
          style={{ width: 200, height: 70 }} 
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
              width: "80%",
              backgroundColor: index === 0 ? "#2E7D32" : "white", // Paiement en vert
              padding: 15,
              borderRadius: 5,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "#ccc",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {/* Icône associée */}
            <Ionicons name={item.icon} size={24} color={index === 0 ? "white" : "black"} style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: "bold", color: index === 0 ? "white" : "black" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}