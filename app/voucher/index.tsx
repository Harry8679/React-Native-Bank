import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function VoucherHome() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }} />
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>RETRAIT GAB</Text>

      <TouchableOpacity onPress={() => router.push("/voucher/generation")} style={styles.btn}>
        <Text style={styles.text}>GÉNÉRATION DE CODE VOUCHER</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/voucher/annulation")} style={styles.btn}>
        <Text style={styles.text}>ANNULATION DE CODE VOUCHER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5, marginBottom: 20 },
  text: { color: "white", textAlign: "center", fontSize: 18 }
};
