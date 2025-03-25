import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function ConfirmationScreen() {
  const { client, amount, country, participant } = useLocalSearchParams();
  const router = useRouter();
  const [pin, setPin] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Flèche de retour */}
      <TouchableOpacity 
        onPress={() => router.back()} 
        style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
      >
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Image source={require("../../../assets/gimacpay.png")} style={{ width: 200, height: 70, alignSelf: "center" }} />
      <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 20 }}>ENVOI DE DÉPÔT</Text>

      <Text style={{ marginBottom: 20 }}>
        Un dépôt de: {amount} FCFA sera envoyé à:{"\n"}
        [Nom du destinataire]: {participant} {"\n"}
        [Pays]: {country} {"\n"}
        Numéro: {client}{"\n"}
        Pour valider, entrez votre PIN
      </Text>

      <TextInput
        placeholder="PIN"
        secureTextEntry
        style={{ borderWidth: 1, padding: 15, borderRadius: 5, marginBottom: 20 }}
        onChangeText={setPin}
        value={pin}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => router.back()} style={{ backgroundColor: "gray", padding: 15, borderRadius: 5 }}>
          <Text style={{ color: "white", fontSize: 18 }}>Annuler</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            pin === "123456"
              ? router.push("/agency/agency-success")
              : router.push("/agency/agency-error");
          }}
          style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 5 }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>VALIDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}