import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function GenerateCodeScreen() {
  const router = useRouter();
  const [amount, setAmount] = useState("");

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      {/* 🔙 Retour avec position ajustée */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 20, marginTop: 30 }}>
        <Ionicons name="arrow-back" size={60} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo GIMAC */}
      <Image 
        source={require("../../assets/gimac2.png")} 
        style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }} 
      />

      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>Envoi de la demande</Text>

      <Text style={{ marginBottom: 10 }}>Veuillez entrer le montant du retrait (en FCFA)</Text>
      <TextInput
        placeholder="Montant"
        keyboardType="numeric"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity
        onPress={() => router.push({ pathname: "/agency/pin-validation", params: { amount } })}
        style={styles.btn}
      >
        <Text style={styles.text}>VALIDER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
};