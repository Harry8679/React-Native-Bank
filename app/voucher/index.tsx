import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function VoucherMenuScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Flèche retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo */}
      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }} />

      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>RETRAIT GAB</Text>

      <TouchableOpacity style={styles.btn} onPress={() => router.push("/voucher/generate")}>
        <Text style={styles.text}>GÉNÉRATION DE CODE VOUCHER</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => router.push("/voucher/cancel")}>
        <Text style={styles.text}>ANNULATION DE CODE VOUCHER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5, marginBottom: 15 },
  text: { color: "white", textAlign: "center", fontSize: 18 }
};