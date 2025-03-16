import { View, Text, SafeAreaView } from "react-native";

export default function CentrafriqueScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#2E7D32" }}>
        Centrafrique 🇨🇫
      </Text>
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        Détails des services pour la Centrafrique
      </Text>
    </SafeAreaView>
  );
}