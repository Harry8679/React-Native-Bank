import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CancelRecapScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }} />

      <Text style={{ fontSize: 22, color: "#2E7D32", textAlign: "center", marginBottom: 20 }}>
        Annulation du code voucher
      </Text>

      <View style={{ padding: 15, borderWidth: 1, borderRadius: 10, borderColor: "#ccc", backgroundColor: "#f9f9f9" }}>
        <Text>Référence: 0124578002357</Text>
        <Text>Montant: FCFA 10 000</Text>
        <Text>Numéro de téléphone associé: 237699955555</Text>
        <Text>Un SMS de confirmation sera envoyé à 237699955555</Text>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/sodec")}
        style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 5, marginTop: 30 }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}