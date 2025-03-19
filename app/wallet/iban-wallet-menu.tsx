import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function IbanWalletMenu() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-start" }}>
        {/* 🔙 Retour */}
        <TouchableOpacity 
          onPress={() => (router.canGoBack() ? router.back() : router.push("/sodec"))}
          style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
        >
          <Ionicons name="arrow-back" size={60} color="black" />
        </TouchableOpacity>

        {/* ✅ Logo */}
        <View style={{ alignItems: "center", marginBottom: 30, marginTop: 80 }}>
          <Image source={require("../../assets/logo.png")} style={{ width: 200, height: 70 }} resizeMode="contain" />
        </View>

        {/* ✅ Titre */}
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#2E7D32" }}>IBAN & WALLET</Text>
          <Text style={{ fontSize: 18, color: "gray" }}>Choisissez une action</Text>
        </View>

        {/* ✅ Liens */}
        <TouchableOpacity onPress={() => router.push("/wallet/iban-form")} style={styles.optionButton}>
          <Ionicons name="document-text" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>Enregistrement IBAN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/wallet/wallet")} style={styles.optionButton}>
          <Ionicons name="wallet" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>Enregistrement Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/wallet/mes-ibans")} style={styles.optionButton}>
          <Ionicons name="list" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>Voir la liste de mes IBANs</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/wallet/mes-wallets")} style={styles.optionButton}>
          <Ionicons name="list" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>Voir la liste de mes Wallets</Text>
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