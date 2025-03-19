import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function MesIbansScreen() {
  const router = useRouter();

  // 🔥 Simulation de données IBAN
  const ibans = [
    { iban: "CM123456789012345678901", name: "Jean Dupont" },
    { iban: "CM987654321098765432109", name: "Marie Claire" },
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
          Liste de mes IBANs
        </Text>

        {/* ✅ Liste des IBANs */}
        {ibans.map((item, index) => (
          <View key={index} style={{ padding: 15, backgroundColor: "#f5f5f5", borderRadius: 8, marginBottom: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#2E7D32" }}>{item.name}</Text>
            <Text style={{ color: "gray", marginTop: 5 }}>{item.iban}</Text>
          </View>
        ))}

        {ibans.length === 0 && (
          <Text style={{ textAlign: "center", color: "gray", marginTop: 50 }}>Aucun IBAN enregistré.</Text>
        )}
      </ScrollView>
    </View>
  );
}