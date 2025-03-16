import { View, Text, SafeAreaView } from "react-native";

export default function CamerounScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#2E7D32" }}>
        Cameroun 🇨🇲
      </Text>
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        Détails des services pour le Cameroun
      </Text>
    </SafeAreaView>
  );
}
