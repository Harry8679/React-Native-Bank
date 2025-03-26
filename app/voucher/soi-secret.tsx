// voucher/soi-secret.tsx
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SoiSecretScreen() {
  const router = useRouter();
  const { amount } = useLocalSearchParams();
  const [pin, setPin] = useState("");

  const reference = "0124578002357";
  const destinataire = "237699955555";

  const handleValidation = () => {
    if (pin === "123456") {
      router.push({
        pathname: "/voucher/soi-result",
        params: { amount, reference, destinataire }
      });
    } else {
      Alert.alert("Erreur", "Le code secret est incorrect.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 50, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }} />

      <Text style={{ fontSize: 22, color: "#2E7D32", textAlign: "center", marginBottom: 30 }}>
        GÉNÉRATION DE CODE VOUCHER{"\n"}MISE À DISPOSITION POUR UN TIER
      </Text>

      <Text>Référence: {reference}</Text>
      <Text>Montant: FCFA {amount}</Text>
      <Text>Numéro du destinataire: {destinataire}</Text>

      <TextInput
        placeholder="Code secret"
        secureTextEntry
        style={styles.input}
        value={pin}
        onChangeText={setPin}
      />

      <TouchableOpacity onPress={handleValidation} style={styles.btn}>
        <Text style={styles.btnText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  input: { borderWidth: 1, borderColor: "#ccc", padding: 15, borderRadius: 5, marginVertical: 20 },
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5 },
  btnText: { color: "white", textAlign: "center", fontSize: 18 }
};