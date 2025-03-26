import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AutresServicesScreen() {
  const router = useRouter();

  const options = [
    { name: "Enregistrement IBAN", route: "/autresServices/iban-form" },
    { name: "Enregistrement WALLET", route: "/autresServices/wallet-form" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* ✅ Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      {/* ✅ Logo */}
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 30 }}
        resizeMode="contain"
      />

      {/* ✅ Titre */}
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30, color: "#2E7D32" }}>
        GIMACPAY {"\n"} TRANSFERT IBAN
      </Text>

      {/* ✅ Liste des options */}
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => router.push(item.route)}
          activeOpacity={0.7}
          style={{
            backgroundColor: "#f0f8f5",
            padding: 18,
            borderRadius: 12,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: "#2E7D32",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          <Text style={{ color: "#2E7D32", fontSize: 18, textAlign: "center", fontWeight: "bold" }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}