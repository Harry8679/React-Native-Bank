import { View, Text, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      
      {/* Header avec icônes */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <Ionicons name="menu" size={30} color="#2E7D32" />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#2E7D32" }}>Bienvenue, Adebayo !</Text>
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
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>📌 Envoyer à nouveau</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={{ backgroundColor: "#F8F8F8", padding: 15, borderRadius: 10, flex: 1, marginRight: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Sébastien K.</Text>
          <Text style={{ color: "gray" }}>Mobile Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "#F8F8F8", padding: 15, borderRadius: 10, flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Jean M.</Text>
          <Text style={{ color: "gray" }}>Mobile Money</Text>
        </TouchableOpacity>
      </View>

      {/* Barre de navigation */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons name="home" size={30} color="#FFC107" />
          <Text style={{ fontSize: 14, color: "#2E7D32" }}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons name="list" size={30} color="gray" />
          <Text style={{ fontSize: 14, color: "gray" }}>Transferts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons name="paper-plane" size={30} color="#2E7D32" />
          <Text style={{ fontSize: 14, color: "#2E7D32" }}>Envoyer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons name="people" size={30} color="gray" />
          <Text style={{ fontSize: 14, color: "gray" }}>Bénéficiaires</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons name="help-circle" size={30} color="gray" />
          <Text style={{ fontSize: 14, color: "gray" }}>Aide</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}