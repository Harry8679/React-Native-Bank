// voucher/generation.tsx
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function VoucherGenerationScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 50, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo */}
      <Image
        source={require("../../assets/gimac2.png")}
        style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }}
      />
      <Text style={{ fontSize: 22, color: "#2E7D32", textAlign: "center", marginBottom: 30 }}>
        GÉNÉRATION DE CODE VOUCHER
      </Text>

      {/* ✅ Choix */}
      <TouchableOpacity
        onPress={() => router.push("/voucher/soi-montant")}
        style={styles.btnActive}
      >
        <Text style={styles.text}>MISE À DISPOSITION POUR SOI</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/voucher/tiers-montant")}
        style={styles.btn}
      >
        <Text style={styles.text}>MISE À DISPOSITION POUR UN TIER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  btnActive: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5, marginBottom: 15 },
  btn: { backgroundColor: "#ccc", padding: 15, borderRadius: 5, marginBottom: 15 },
  text: { color: "white", textAlign: "center", fontSize: 18 }
};