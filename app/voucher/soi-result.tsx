// voucher/soi-result.tsx
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function SoiResultScreen() {
  const router = useRouter();
  const { amount, reference, destinataire } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }} />

      <Text style={{ fontSize: 22, color: "#2E7D32", textAlign: "center", marginBottom: 30 }}>
        Code voucher généré
      </Text>

      <Text>Référence: {reference}</Text>
      <Text>Montant: FCFA {amount}</Text>
      <Text>Frais: FCFA 100</Text>
      <Text>Numéro de téléphone associé: {destinataire}</Text>
      <Text>Un SMS de confirmation sera envoyé à: {destinataire}</Text>

      <TouchableOpacity onPress={() => router.push("/sodec")} style={styles.btn}>
        <Text style={styles.btnText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5, marginTop: 30 },
  btnText: { color: "white", textAlign: "center", fontSize: 18 }
};