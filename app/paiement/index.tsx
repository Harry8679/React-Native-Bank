import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function PaiementScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F7F9", padding: 20 }}>
      {/* 🔙 Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo */}
      <Image 
        source={require("../../assets/gimac2.png")} 
        style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }} 
        resizeMode="contain"
      />

      {/* ✅ Titre */}
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30, color: "#2E7D32" }}>
        GIMACPAY PAIEMENT
      </Text>

      {/* ✅ Bandeau bleu */}
      <View style={{ backgroundColor: "#0056A3", padding: 15, borderRadius: 5, marginBottom: 20 }}>
        <Text style={{ color: "white", fontSize: 16 }}>Veuillez choisir le service</Text>
      </View>

      {/* ✅ Paiement National */}
      <TouchableOpacity 
        onPress={() => router.push("/paiement/national")} 
        style={styles.option}
      >
        <Text style={styles.optionText}>Paiement National</Text>
      </TouchableOpacity>

      {/* ✅ Paiement CEMAC */}
      <TouchableOpacity 
        onPress={() => router.push("/paiement/cemac")} 
        style={styles.option}
      >
        <Text style={styles.optionText}>Paiement CEMAC</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  option: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  optionText: {
    fontSize: 18,
    color: "#000"
  }
};
