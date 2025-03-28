import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CardRecapScreen() {
  const router = useRouter();
  const { amount, cardNumber } = useLocalSearchParams();

  const goToSuccess = () => {
    router.push({
      pathname: "/send/card/success",
      params: { amount, cardNumber },
    });
  };

  const goToError = () => {
    router.push({
      pathname: "/send/card/error",
      params: { amount, cardNumber },
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center" }}>
      {/* Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ position: "absolute", top: 50, left: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      {/* Titre */}
      <Text style={{ fontSize: 22, textAlign: "center", marginBottom: 30, fontWeight: "bold" }}>
        GIMACPAY Transfert Wallet2Card
      </Text>

      <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 10 }}>Montant : {amount} FCFA</Text>
      <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 30 }}>Carte : {cardNumber}</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity onPress={() => router.back()} style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Précédent</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToSuccess} style={styles.primaryButton}>
          <Text style={styles.primaryText}>Valider (✔️)</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToError} style={[styles.primaryButton, { backgroundColor: "#B00020" }]}>
          <Text style={styles.primaryText}>Valider (❌)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  primaryButton: {
    backgroundColor: "#2E7D32",
    padding: 12,
    borderRadius: 6,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#2E7D32",
    padding: 12,
    borderRadius: 6,
  },
  primaryText: {
    color: "white",
    fontWeight: "bold",
  },
  secondaryText: {
    color: "#2E7D32",
    fontWeight: "bold",
  },
};
