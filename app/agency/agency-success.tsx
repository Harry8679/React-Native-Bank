import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function SuccessScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center" }}>
      <Image source={require("../../assets/gimacpay.png")} style={{ width: 200, height: 70, alignSelf: "center" }} />
      <Text style={{ fontSize: 24, color: "green", textAlign: "center", marginVertical: 20 }}>ACCUSÉ RÉCEPTION</Text>

      <Text style={{ marginBottom: 20, textAlign: "center" }}>✔ Le dépôt de XXXX FCFA a été envoyé avec succès.</Text>

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