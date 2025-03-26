import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function WalletNom() {
  const router = useRouter();
  const { wallet } = useLocalSearchParams();
  const [name, setName] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }} />
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>Enregistrement Wallet</Text>

      <TextInput value={wallet as string} editable={false} style={{ borderWidth: 1, padding: 15, borderRadius: 8, marginBottom: 20 }} />

      <TextInput
        placeholder="Nom à enregistrer"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 15, borderRadius: 8, marginBottom: 30 }}
      />

      <TouchableOpacity
        style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 8 }}
        onPress={() => router.push({ pathname: "/autresServices/wallet-recap", params: { wallet, name } })}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}
