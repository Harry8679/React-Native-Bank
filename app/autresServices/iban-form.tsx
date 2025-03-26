import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function IbanForm() {
  const [iban, setIban] = useState("");
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>Numéro IBAN</Text>

      <TextInput
        placeholder="Ex: CM12345678901234567890"
        value={iban}
        onChangeText={setIban}
        style={{ borderWidth: 1, padding: 15, borderRadius: 8, marginBottom: 30 }}
      />

      <TouchableOpacity
        style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 8 }}
        onPress={() => router.push({ pathname: "/autresServices/iban-nom", params: { iban } })}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}