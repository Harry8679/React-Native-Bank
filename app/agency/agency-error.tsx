import { View, Text, TouchableOpacity, Image, TextStyle } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ErrorScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center" }}>
      
      {/* 🔙 Flèche de retour */}
      <TouchableOpacity 
        onPress={() => router.back()} 
        style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
      >
        <Ionicons name="arrow-back" size={40} color="black" />
      </TouchableOpacity>

      {/* ✅ Image */}
      <Image source={require("../../assets/gimacpay.png")} style={{ width: 200, height: 70, alignSelf: "center" }} />
      
      {/* ✅ Titre */}
      <Text style={{ fontSize: 24, color: "red", textAlign: "center" as TextStyle['textAlign'], marginVertical: 20 }}>
        ACCUSÉ RÉCEPTION
      </Text>

      {/* ✅ Message */}
      <Text style={{ marginBottom: 20, textAlign: "center" as TextStyle['textAlign'] }}>
        ❌ Le dépôt de XXXX FCFA a échoué.
      </Text>

      {/* ✅ Bouton OK */}
      <TouchableOpacity onPress={() => router.push("/sodec")} style={styles.btn}>
        <Text style={styles.text}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles: { btn: TextStyle; text: TextStyle } = {
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5 },
  text: { color: "white", textAlign: "center", fontSize: 18 }
};