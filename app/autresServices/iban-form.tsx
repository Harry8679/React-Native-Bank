import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function IbanForm() {
  const [iban, setIban] = useState("");
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Flèche de retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo */}
      <Image
        source={require("../../assets/gimac2.png")}
        style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }}
      />

      {/* ✅ Titre */}
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>Numéro IBAN</Text>

      {/* ✅ Champ IBAN */}
      <TextInput
        placeholder="Ex: CM12345678901234567890"
        value={iban}
        onChangeText={setIban}
        style={{ borderWidth: 1, padding: 15, borderRadius: 8, marginBottom: 30 }}
      />

      {/* ✅ Bouton Valider */}
      <TouchableOpacity
        style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 8 }}
        onPress={() => router.push({ pathname: "/autresServices/iban-nom", params: { iban } })}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}
