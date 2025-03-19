import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function WalletToIbanScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-start" }}>
        
        {/* 🔙 Bouton Retour */}
        <TouchableOpacity 
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.push("/sodec");
            }
          }}
          style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
        >
          <Ionicons name="arrow-back" size={60} color="black" />
        </TouchableOpacity>

        {/* ✅ Logo centré */}
        <View style={{ alignItems: "center", marginBottom: 30, marginTop: 80 }}>
          <Image 
            source={require("../../assets/logo.png")} 
            style={{ width: 200, height: 70 }} 
            resizeMode="contain" 
          />
        </View>

        {/* ✅ Titre */}
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#2E7D32" }}>Wallet ➔ IBAN</Text>
          <Text style={{ fontSize: 18, color: "gray" }}>Choisissez une action</Text>
        </View>

        {/* ✅ Lien : Enregistrer un nouvel IBAN */}
        <TouchableOpacity
          // onPress={() => router.push("/send/iban")} // 👉 Redirige vers la page d'enregistrement IBAN existante
          onPress={() => router.push("/wallet/iban-form")} // 👉 Redirige vers la page d'enregistrement IBAN existante
          style={styles.optionButton}
        >
          <Ionicons name="add-circle" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>Enregistrer un nouvel IBAN</Text>
        </TouchableOpacity>

        {/* ✅ Lien : Voir la liste des IBANs */}
        <TouchableOpacity
          onPress={() => router.push("/wallet/mes-ibans")} // 👉 À créer ou à connecter
          style={styles.optionButton}
        >
          <Ionicons name="list" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>Voir la liste de mes IBANs</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = {
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
};
