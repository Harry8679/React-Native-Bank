import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function GenerationVoucher() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40 }}>
        <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center" }} />
      </TouchableOpacity>

      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30, color: "#2E7D32" }}>GÉNÉRATION DE CODE VOUCHER</Text>

      <TouchableOpacity onPress={() => router.push("/voucher/soi")} style={styles.btn}>
        <Text style={styles.text}>MISE À DISPOSITION POUR SOI</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/voucher/tiers")} style={styles.btn}>
        <Text style={styles.text}>MISE À DISPOSITION POUR UN TIERS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5, marginBottom: 20 },
  text: { color: "white", textAlign: "center", fontSize: 18 }
};
