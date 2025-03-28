// File: send/international/recap.tsx
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function RecapInternational() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const params = useLocalSearchParams();

  const {
    country,
    terminaison,
    institution,
    numero,
    amount,
    nom,
    prenom,
    sexe,
    adresse,
    telephone,
    motif,
  } = params;

  const handleSubmit = () => {
    if (!pin) return alert("Veuillez entrer le PIN");

    if (pin === "123456") {
      router.push({
        pathname: "/send/international/success",
        params: {
          country,
          terminaison,
          institution,
          numero,
          amount,
          nom,
          motif,
          solde: "250 000 FCFA",
          frais: "1 000 FCFA",
        },
      });
    } else {
      router.push({
        pathname: "/send/international/error",
        params: {
          country,
          terminaison,
          institution,
          numero,
          amount,
          nom,
          motif: "PIN incorrect",
          solde: "250 000 FCFA",
          frais: "1 000 FCFA",
        },
      });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Text style={{ fontSize: 22, marginVertical: 20, fontWeight: "bold" }}>
        Confirmation du Transfert
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        Transfert à <Text style={{ fontWeight: "bold" }}>{nom}</Text>, sur {terminaison}, de {institution}
        {"\n"}Numéro: {numero}
        {"\n"}Montant: {amount} FCFA, frais 1 000 FCFA
      </Text>

      <TextInput
        placeholder="Entrer votre PIN"
        value={pin}
        onChangeText={setPin}
        secureTextEntry
        style={{ borderWidth: 1, padding: 15, borderRadius: 8, marginBottom: 20 }}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 8 }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}