import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AutresServicesScreen() {
  const router = useRouter();

  const options = [
    { name: "Entrer un numéro IBAN", route: "/autresServices/iban-form" },
    { name: "Numéro IBAN enregistré", route: "/autresServices/mes-ibans" },
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
          style={{ width: 200, height: 70 }}
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
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 5,
            marginBottom: 15,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        >
          <Text style={{ color: "black", fontSize: 18 }}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}