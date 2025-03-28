import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HelpScreen() {
  // Liste des catégories d'aide
  const helpCategories = [
    { title: "Problèmes de connexion", icon: "lock-closed", color: "#2E7D32" },
    { title: "Problèmes de transaction", icon: "cash", color: "#FFC107" },
    { title: "Comment ajouter un bénéficiaire ?", icon: "person-add", color: "#007AFF" },
    { title: "Comment suivre mes transferts ?", icon: "time", color: "#FF5722" },
    { title: "Informations sur les cartes", icon: "card", color: "#9C27B0" },
    { title: "Contacter le support", icon: "call", color: "#FF9800" },
    // { title: "📌 Problèmes de connexion", icon: "lock-closed", color: "#2E7D32" },
    // { title: "💰 Problèmes de transaction", icon: "cash", color: "#FFC107" },
    // { title: "📄 Comment ajouter un bénéficiaire ?", icon: "person-add", color: "#007AFF" },
    // { title: "🔄 Comment suivre mes transferts ?", icon: "time", color: "#FF5722" },
    // { title: "💳 Informations sur les cartes", icon: "card", color: "#9C27B0" },
    // { title: "📞 Contacter le support", icon: "call", color: "#FF9800" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* Titre de la page */}
      <Text 
        style={{ 
          fontSize: 24, 
          fontWeight: "bold", 
          textAlign: "center", 
          marginBottom: 20, 
          marginTop: 40 
        }}
      >
        ❓ Besoin d'aide ?
      </Text>

      {/* Liste des catégories d'aide */}
      <ScrollView>
        {helpCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F8F8F8",
              padding: 15,
              borderRadius: 10,
              marginBottom: 10,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              elevation: 2,
            }}
          >
            {/* Icône associée */}
            {/* <Ionicons name={item.icon} size={30} color={item.color} style={{ marginRight: 15 }} /> */}
            <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={30} color={item.color} style={{ marginRight: 15 }} />


            {/* Texte */}
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bouton pour contacter le support */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#2E7D32",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          📞 Contacter le support
        </Text>
      </TouchableOpacity>
    </View>
  );
}