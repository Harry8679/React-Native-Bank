import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ErrorScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center" }}>
      <TouchableOpacity onPress={() => router.back()} style={{ position: "absolute", top: 50, left: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center" }} />
      <Text style={{ fontSize: 24, color: "red", textAlign: "center", marginVertical: 20 }}>ACCUSÉ RÉCEPTION</Text>

      <Text style={{ marginBottom: 20, textAlign: "center" }}>❌ Le dépôt de XXXX FCFA a échoué.</Text>

      <TouchableOpacity onPress={() => router.push("/sodec")} style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 5 }}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}