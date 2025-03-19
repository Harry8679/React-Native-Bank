import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SendScreen() {
  const router = useRouter();
  const navigation = useNavigation(); // ✅ Gestion de la navigation

  const options = [
    { name: "IBAN", route: "/wallet/iban-wallet-menu" },
    // { name: "IBAN", route: "/send/iban" },
    { name: "IBAN DE BASE", route: "/send/iban" },
    { name: "WALLET", route: "/wallet/wallet-intermediaire" },
    { name: "INTERNATIONAL", route: "/send/international" },
    { name: "CARD", route: "/send/card" },
  ] as const;

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center" }}>
      
      {/* ✅ Bouton Retour en haut */}
      <TouchableOpacity 
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack(); // 🔥 Revenir en arrière si possible
          } else {
            router.replace("/sodec"); // 🔥 Sinon, aller à /sodec
          }
        }}
        style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
      >
        <Ionicons name="arrow-back" size={60} color="black" />
      </TouchableOpacity>

      {/* Logo */}
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
              backgroundColor: index === 0 ? "#2E7D32" : "white",
              padding: 15,
              borderRadius: 5,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "#ccc",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: index === 0 ? "white" : "black" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}