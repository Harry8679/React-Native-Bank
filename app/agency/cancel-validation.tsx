import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CancelValidationScreen() {
  const router = useRouter();
  const { code } = useLocalSearchParams();

  // Simuler la logique : Par exemple si le code === "1111" => succès sinon échec
  const handleValidation = (success) => {
    if (success) {
      router.push({ pathname: "/agency/cancel-success", params: { code } });
    } else {
      router.push({ pathname: "/agency/cancel-error", params: { code } });
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 50, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }} />
      <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 30 }}>Souhaitez-vous simuler un succès ou un échec ?</Text>

      <TouchableOpacity onPress={() => handleValidation(true)} style={styles.btn}>
        <Text style={styles.text}>Simuler Succès</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleValidation(false)} style={styles.cancelBtn}>
        <Text style={styles.text}>Simuler Échec</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5, marginBottom: 15 },
  cancelBtn: { backgroundColor: "#B71C1C", padding: 15, borderRadius: 5, marginBottom: 15 },
  text: { color: "white", textAlign: "center", fontSize: 18 }
};