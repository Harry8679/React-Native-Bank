import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function InternationalError() {
  const router = useRouter();
  const {
    name, amount, numero, institution, terminaison, solde = "200 000 FCFA"
  } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 */}
      <TouchableOpacity onPress={() => router.replace("/sodec")} style={{ marginTop: 40 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 20, color: "red" }}>
        ❌ Échec du Transfert
      </Text>

      <Text style={{ fontSize: 18, lineHeight: 30 }}>
        Transfert de <Text style={{ fontWeight: "bold" }}>{amount} FCFA</Text> à{" "}
        <Text style={{ fontWeight: "bold" }}>{name}</Text>, sur <Text style={{ fontWeight: "bold" }}>{terminaison}</Text>, de{" "}
        <Text style={{ fontWeight: "bold" }}>{institution}</Text> Numéro:{" "}
        <Text style={{ fontWeight: "bold" }}>{numero}</Text>. Motif : Échec de l’authentification.
        {"\n"}Votre solde, <Text style={{ fontWeight: "bold" }}>{solde}</Text>
      </Text>

      <TouchableOpacity
        onPress={() => router.replace("/sodec")}
        style={{ backgroundColor: "#C62828", padding: 15, borderRadius: 8, marginTop: 40 }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}
