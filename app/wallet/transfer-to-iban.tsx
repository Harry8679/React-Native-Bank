import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TransferToIbanScreen() {
  const router = useRouter();
  const { iban, name } = useLocalSearchParams(); // 🔥 Récupère l'IBAN et le nom passés depuis la page précédente

  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [step, setStep] = useState<"amount" | "pin">("amount");

  const correctPin = "123456";

  const handleAmountSubmit = () => {
    if (!amount || isNaN(Number(amount))) {
      Alert.alert("Erreur", "Veuillez entrer un montant valide");
      return;
    }
    setStep("pin");
  };

  const handleSend = () => {
    if (pin !== correctPin) {
      Alert.alert("Erreur", "Votre code PIN est incorrect");
      return;
    }
    Alert.alert(
      "Succès",
      `La somme de ${amount} XAF a été envoyée à ${name}`,
      [{ text: "OK", onPress: () => router.push("/sodec") }]
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* 🔙 Retour */}
        <TouchableOpacity 
          onPress={() => router.back()}
          style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
        >
          <Ionicons name="arrow-back" size={60} color="black" />
        </TouchableOpacity>

        {/* ✅ Logo */}
        <View style={{ alignItems: "center", marginBottom: 30, marginTop: 80 }}>
          <Image source={require("../../assets/logo.png")} style={{ width: 200, height: 70 }} resizeMode="contain" />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Destinataire</Text>
          <Text style={{ fontSize: 18, marginBottom: 15 }}>{name} ({iban})</Text>

          {step === "amount" && (
            <>
              <Text style={styles.label}>Montant à envoyer</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: 10000"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
              />
              <TouchableOpacity
                onPress={handleAmountSubmit}
                style={[styles.submitButton, { backgroundColor: amount ? "#2E7D32" : "gray" }]}
              >
                <Text style={styles.submitText}>Continuer</Text>
              </TouchableOpacity>
            </>
          )}

          {step === "pin" && (
            <>
              <Text style={styles.label}>Code PIN</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre code PIN"
                value={pin}
                onChangeText={setPin}
                secureTextEntry
                keyboardType="numeric"
              />
              <TouchableOpacity
                onPress={handleSend}
                style={[styles.submitButton, { backgroundColor: pin ? "#2E7D32" : "gray" }]}
              >
                <Text style={styles.submitText}>Envoyer</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = {
  formContainer: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#2E7D32",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  submitButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
};