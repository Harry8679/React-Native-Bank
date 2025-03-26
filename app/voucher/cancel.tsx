import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function CancelVoucherScreen() {
  const router = useRouter();
  const [voucherCode, setVoucherCode] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo */}
      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }} />

      {/* ✅ Titre */}
      <Text style={{ fontSize: 24, color: "#2E7D32", textAlign: "center", marginBottom: 30 }}>
        ANNULATION DE CODE VOUCHER
      </Text>

      {/* ✅ Champ saisie code */}
      <Text style={{ marginBottom: 10 }}>Saisissez le code voucher à annuler</Text>
      <TextInput
        placeholder="Ex: 1234567890"
        value={voucherCode}
        onChangeText={setVoucherCode}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 15,
          borderRadius: 5,
          marginBottom: 20
        }}
      />

      {/* ✅ Bouton Valider */}
      <TouchableOpacity
        style={{
          backgroundColor: "#2E7D32",
          padding: 15,
          borderRadius: 5
        }}
        onPress={() => router.push({ pathname: "/voucher/cancel-details", params: { voucherCode } })}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}
