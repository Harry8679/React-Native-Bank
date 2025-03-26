import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function VoucherGenerationScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Flèche de retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 50, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo */}
      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }} />

      {/* ✅ Titre */}
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30, color: "#2E7D32" }}>
        GIMACPAY{"\n"}RETRAIT GAB
      </Text>

      <Text style={{ fontSize: 20, textAlign: "center", color: "#2E7D32", marginBottom: 30 }}>
        GÉNÉRATION DE CODE VOUCHER
      </Text>

      {/* ✅ Boutons */}
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>MISE À DISPOSITION POUR SOI</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>MISE À DISPOSITION POUR UN TIER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  btn: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#2E7D32",
    marginBottom: 15,
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
};