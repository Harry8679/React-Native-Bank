import { View, Text, ScrollView } from "react-native";

export default function TransfersScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>
        Historique des Transferts
      </Text>

      {/* Bloc Transferts par IBAN */}
      <View style={{ backgroundColor: "#FFC107", padding: 15, borderRadius: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white", marginBottom: 10 }}>
          📌 Transferts par IBAN
        </Text>
        <View style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>👤 Jean Dupont</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>Montant: 150 000 FCFA</Text>
        </View>
        <View style={{ backgroundColor: "white", padding: 10, borderRadius: 8, marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>👤 Marie Talla</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>Montant: 200 000 FCFA</Text>
        </View>
        <View style={{ backgroundColor: "white", padding: 10, borderRadius: 8, marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>👤 Paul Koffi</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>Montant: 320 000 FCFA</Text>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white", marginTop: 10 }}>
          🔹 Total: 670 000 FCFA
        </Text>
      </View>

      {/* Bloc Transferts par Wallet */}
      <View style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white", marginBottom: 10 }}>
          📌 Transferts par Wallet
        </Text>
        <View style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>👤 Amina Diallo</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>Montant: 50 000 FCFA</Text>
        </View>
        <View style={{ backgroundColor: "white", padding: 10, borderRadius: 8, marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>👤 Moussa Traoré</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>Montant: 75 000 FCFA</Text>
        </View>
        <View style={{ backgroundColor: "white", padding: 10, borderRadius: 8, marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>👤 Fatima Sow</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>Montant: 120 000 FCFA</Text>
        </View>
        <View style={{ backgroundColor: "white", padding: 10, borderRadius: 8, marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>👤 Abdoulaye Ndiaye</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>Montant: 65 000 FCFA</Text>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white", marginTop: 10 }}>
          🔹 Total: 310 000 FCFA
        </Text>
      </View>
    </ScrollView>
  );
}