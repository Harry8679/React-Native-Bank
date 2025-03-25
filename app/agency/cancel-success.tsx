import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CancelSuccessScreen() {
  const router = useRouter();
  const { code } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Flèche retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo */}
      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }} />

      <Text style={{ fontSize: 24, color: "green", textAlign: "center", marginBottom: 30 }}>ACCUSÉ RÉCEPTION</Text>

      <Text style={{ textAlign: "center", marginBottom: 30 }}>
        ✅ Le code de retrait de: XXXXX FCFA {"\n"}
        Numéro: {code} {"\n"}
        a été annulé avec succès
      </Text>

      <TouchableOpacity onPress={() => router.push("/sodec")} style={styles.btn}>
        <Text style={styles.text}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5 },
  text: { color: "white", textAlign: "center", fontSize: 18 }
};