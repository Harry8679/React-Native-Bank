import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function PaiementScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F7F9" }}>
      {/* ✅ Header */}
      <View style={{ backgroundColor: "#FFD700", padding: 20, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>GIMACPAY Paiement</Text>
      </View>

      {/* ✅ Section titre */}
      <View style={{ backgroundColor: "#0056A3", padding: 15 }}>
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
    backgroundColor: "white",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  optionText: {
    fontSize: 18,
  }
};
