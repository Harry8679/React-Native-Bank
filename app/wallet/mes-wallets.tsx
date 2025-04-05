import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function MesWalletsScreen() {
  const router = useRouter();

  // 🔥 Simulation de wallets enregistrés
  const wallets = [
    { operator: "MTN", phone: "677123456", name: 'MABICKA Saviola' },
    { operator: "Orange", phone: "699987654", name: 'AYINGONE Eléonore' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* 🔙 Retour */}
        <TouchableOpacity
          onPress={() => (router.canGoBack() ? router.back() : router.push("/sodec"))}
          style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
        >
          <Ionicons name="arrow-back" size={50} color="black" />
        </TouchableOpacity>

        {/* ✅ Logo */}
        <View style={{ alignItems: "center", marginTop: 80, marginBottom: 30 }}>
          <Image source={require("../../assets/logo.png")} style={{ width: 200, height: 70 }} resizeMode="contain" />
        </View>

        {/* ✅ Titre */}
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#2E7D32", textAlign: "center", marginBottom: 20 }}>
          Liste de mes Wallets
        </Text>

        {/* ✅ Liste des Wallets */}
        {wallets.map((item, index) => (
          <View key={index} style={{ padding: 15, backgroundColor: "#f5f5f5", borderRadius: 8, marginBottom: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#2E7D32" }}>{item.operator}</Text>
            <Text style={{ color: "gray", marginTop: 5 }}>Numéro: {item.phone}</Text>
            <Text style={{ color: "gray", marginTop: 5, fontWeight: 'bold' }}>{item.name}</Text>
          </View>
        ))}

        {wallets.length === 0 && (
          <Text style={{ textAlign: "center", color: "gray", marginTop: 50 }}>Aucun wallet enregistré.</Text>
        )}
      </ScrollView>
    </View>
  );
}