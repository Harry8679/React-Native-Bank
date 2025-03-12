import { View, Text, SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Bienvenue sur mon App 📱</Text>
      <Text style={{ color: "gray", marginTop: 10 }}>Ceci est la page d'accueil</Text>
    </SafeAreaView>
  );
}