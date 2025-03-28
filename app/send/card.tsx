// send/card/index.tsx
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CardTransferScreen() {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (!amount || !cardNumber) return alert("Veuillez remplir tous les champs");
    router.push({
      pathname: "/send/card/recap",
      params: { amount, cardNumber },
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* Retour + Logo */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>
      <Image source={require("../../assets/logo.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }} />

      {/* Formulaire */}
      <TextInput
        placeholder="Saisissez montant du transfert"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Saisir le numéro de carte"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="number-pad"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
};
