import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function AutresServicesScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo */}
      <Image 
        source={require("../../assets/gimac2.png")} 
        style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }} 
      />

      {/* ✅ Titre */}
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>Transfert IBAN</Text>

      {/* ✅ Options */}
      <TouchableOpacity 
        style={styles.btn}
        onPress={() => router.push("/autres-services/iban-saisie")}
      >
        <Text style={styles.text}>Entrer un numéro IBAN</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.btn}
        onPress={() => router.push("/autres-services/iban-saved")}
      >
        <Text style={styles.text}>Numéro IBAN enregistré</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  btn: {
    backgroundColor: "#E0E0E0",
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  }
};
