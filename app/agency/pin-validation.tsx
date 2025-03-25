import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function PinValidationScreen() {
  const router = useRouter();
  const { amount } = useLocalSearchParams();
  const [pin, setPin] = useState("");

  const validatePin = () => {
    if (pin === "123456") {
      router.push("/agency/agency-success");
    } else {
      router.push("/agency/agency-error");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      {/* 🔙 Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 20, marginTop: 30 }}>
        <Ionicons name="arrow-back" size={40} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo GIMAC */}
      <Image 
        source={require("../../assets/gimac2.png")} 
        style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }} 
      />

      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>Envoi de demande</Text>

      {/* ✅ Résumé de la transaction */}
      <View style={{ padding: 20, backgroundColor: "#f2f2f2", borderRadius: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 16 }}>
          Veuillez valider la génération d'un code de retrait de : {amount} FCFA
        </Text>

        <Text style={{ marginTop: 10 }}>Rentrer votre PIN Code :</Text>
        <TextInput
          placeholder="PIN"
          secureTextEntry
          keyboardType="numeric"
          style={styles.input}
          value={pin}
          onChangeText={setPin}
        />
      </View>

      {/* ✅ Boutons */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => router.back()} style={styles.cancelBtn}>
          <Text style={styles.text}>ANNULER</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={validatePin} style={styles.btn}>
          <Text style={styles.text}>VALIDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 5,
    width: "45%",
  },
  cancelBtn: {
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 5,
    width: "45%",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
};