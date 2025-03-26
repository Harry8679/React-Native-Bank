import { View, Text, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function WalletRecap() {
  const { wallet, name } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo */}
      <Image 
        source={require("../../assets/gimac2.png")} 
        style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }} 
      />

      {/* ✅ Message de confirmation */}
      <Text style={{ fontSize: 22, textAlign: "center", marginBottom: 30, color: "#2E7D32" }}>
        Le numéro Wallet {wallet} a été enregistré avec succès
      </Text>

      <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 30 }}>
        Nom : {name}
      </Text>

      {/* ✅ Bouton OK */}
      <TouchableOpacity
        style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 8 }}
        onPress={() => router.push("/sodec")}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}
