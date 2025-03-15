import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        {/* Header avec icônes */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <Ionicons name="menu" size={30} color="#2E7D32" />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#2E7D32" }}>Bienvenue, Matsaya !</Text>
          <Ionicons name="gift" size={30} color="#FFC107" />
        </View>

        {/* Conversion des devises avec emojis 🇫🇷 🇬🇦 */}
        <View 
          style={{
            backgroundColor: "#F8F8F8",
            padding: 20,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 20, marginRight: 5 }}>🇫🇷</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>1.00 EUR</Text>
          </View>

          <Ionicons name="swap-horizontal" size={24} color="gray" />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 20, marginRight: 5 }}>🇬🇦</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>656.00 XAF</Text>
          </View>
        </View>

        {/* Actions Rapides */}
        <View style={{ backgroundColor: "#FFC107", padding: 15, borderRadius: 10, marginBottom: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>💡 Voulez-vous des mises à jour instantanées ?</Text>
          <Text style={{ color: "white", marginTop: 5 }}>Recevez les derniers taux et statuts de transfert.</Text>
          <TouchableOpacity style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#2E7D32" }}>Activer maintenant →</Text>
          </TouchableOpacity>
        </View>

        {/* Section "Envoyer à nouveau" */}
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, marginTop: 20 }}>📌 Envoyer à nouveau</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
          <TouchableOpacity 
            style={{
              backgroundColor: "#F8F8F8", 
              padding: 15, 
              borderRadius: 10, 
              flex: 1, 
              marginRight: 10, 
              marginBottom: 10,
              minWidth: "45%", // ✅ Gérer les petits écrans
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Sébastien K.</Text>
            <Text style={{ color: "gray" }}>Mobile Money</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={{
              backgroundColor: "#F8F8F8", 
              padding: 15, 
              borderRadius: 10, 
              flex: 1, 
              marginBottom: 10,
              minWidth: "45%", // ✅ Gérer les petits écrans
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Jean M.</Text>
            <Text style={{ color: "gray" }}>Mobile Money</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}