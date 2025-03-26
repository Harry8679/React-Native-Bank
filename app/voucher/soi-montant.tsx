// voucher/soi-montant.tsx
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SoiMontantScreen() {
  const router = useRouter();
  const [amount, setAmount] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 50, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Image
        source={require("../../assets/gimac2.png")}
        style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }}
      />
      <Text style={{ fontSize: 22, color: "#2E7D32", textAlign: "center", marginBottom: 30 }}>
        GÉNÉRATION DE CODE VOUCHER{"\n"}MISE À DISPOSITION POUR SOI
      </Text>

      <Text style={{ marginBottom: 10 }}>Montant du retrait GAB {"\n"}(Multiple de FCFA 5000)</Text>
      <TextInput
        placeholder="Ex: 10000"
        keyboardType="numeric"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity
        onPress={() => router.push({ pathname: "/voucher/soi-secret", params: { amount } })}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  input: { borderWidth: 1, borderColor: "#ccc", padding: 15, borderRadius: 5, marginBottom: 20 },
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5 },
  btnText: { color: "white", textAlign: "center", fontSize: 18 }
};