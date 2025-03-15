import { View, Text, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function WalletCountryScreen() {
  const { pays } = useLocalSearchParams();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#2E7D32" }}>
        {pays ? pays.toString().replace("-", " ") : "Pays inconnu"}
      </Text>
      <Text style={{ textAlign: "center", marginTop: 10 }}>Détails des services pour {pays}</Text>
    </SafeAreaView>
  );
}