import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function AgencyRetraitScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      {/* 🔙 Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={60} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo */}
      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }} />

      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>Choix de l'opération</Text>

      <TouchableOpacity onPress={() => router.push("/agency/generate-code")} style={styles.btn}>
        <Text style={styles.text}>GÉNÉRATION DE CODE DE RETRAIT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnDisabled}>
        <Text style={styles.text}>ANNULATION DE CODE DE RETRAIT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnDisabled}>
        <Text style={styles.text}>CONSOMMATION DE CODE DE RETRAIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5, marginBottom: 15 },
  btnDisabled: { backgroundColor: "#ccc", padding: 15, borderRadius: 5, marginBottom: 15 },
  text: { color: "white", textAlign: "center", fontSize: 18 }
};
