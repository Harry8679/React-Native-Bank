import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function CancelDetailsScreen() {
  const router = useRouter();
  const { voucherCode } = useLocalSearchParams();
  const [secret, setSecret] = useState("");

  // Simuler une référence attendue pour validation
  const validVoucher = "0123456789";
  const validSecret = "123456";

  // Données de la capture (exemple fixe)
  const reference = "0124578002357";
  const montant = "FCFA 10 000";
  const tel = "237699955555";

  const handleValidate = () => {
    if (voucherCode !== validVoucher) {
      Alert.alert("Erreur", "Le code voucher saisi est invalide.");
      return;
    }

    if (secret !== validSecret) {
      Alert.alert("Erreur", "Le code secret est incorrect.");
      return;
    }

    router.push("/voucher/cancel-recap");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }} />

      <Text style={{ fontSize: 22, color: "#2E7D32", textAlign: "center", marginBottom: 20 }}>
        ANNULATION DE CODE VOUCHER
      </Text>

      <Text style={{ marginBottom: 10, fontSize: 16 }}>Vous souhaitez annuler le Code voucher</Text>
      <Text>Référence: {reference}</Text>
      <Text>Montant: {montant}</Text>
      <Text>Numéro de téléphone associé: {tel}</Text>

      <TextInput
        placeholder="Code secret"
        secureTextEntry
        keyboardType="numeric"
        value={secret}
        onChangeText={setSecret}
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 15, borderRadius: 5, marginVertical: 20 }}
      />

      <TouchableOpacity
        style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 5 }}
        onPress={handleValidate}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}
