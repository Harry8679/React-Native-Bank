import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ErrorScreen() {
  const router = useRouter();
  const { amount, cardNumber } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20, backgroundColor: "white" }}>
      {/* Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ position: "absolute", top: 50, left: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Text style={{ fontSize: 24, color: "#B00020", textAlign: "center", fontWeight: "bold", marginBottom: 30 }}>
        ❌ ÉCHEC
      </Text>

      <View style={{ padding: 20, backgroundColor: "#F5F5F5", borderRadius: 10 }}>
        <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 10 }}>
          Échec au dépôt de : {amount} FCFA
        </Text>
        <Text style={{ fontSize: 18, textAlign: "center" }}>
          sur la carte numéro : {"\n"}
          <Text style={{ fontWeight: "bold" }}>{cardNumber}</Text>
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/sodec")}
        style={{ marginTop: 30, backgroundColor: "#B00020", padding: 15, borderRadius: 8 }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}