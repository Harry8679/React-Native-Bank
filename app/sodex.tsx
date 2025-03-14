import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

// Mapping des icônes
const iconMap: { [key: string]: any } = {
  Transfert: require("../assets/icons/transfert.png"),
  Paiement: require("../assets/icons/paiement.png"),
  "Agency Banking": require("../assets/icons/agency-banking.png"),
  "Génération de voucher": require("../assets/icons/generation-voucher.png"),
  "Autres services": require("../assets/icons/autres-services.png"),
};

export default function SodecScreen() {
  const router = useRouter();

  const options = [
    { name: "Transfert", route: "/send" },
    { name: "Paiement", route: "/sodec/paiement" },
    { name: "Agency Banking", route: "/sodec/agency-banking" },
    { name: "Génération de voucher", route: "/sodec/voucher" },
    { name: "Autres services", route: "/sodec/autres-services" },
  ] as const;

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center" }}>
      {/* Logo en haut */}
      <View style={{ alignItems: "center", marginBottom: 40, marginTop: -50 }}>
        <Image 
          source={require("../assets/logo.png")} 
          style={{ width: 200, height: 70 }}
          resizeMode="contain" 
        />
      </View>

      {/* Liste des options */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(item.route)}
            style={{
              width: "80%",
              backgroundColor: index === 1 ? "#2E7D32" : "white", // Paiement en vert
              padding: 15,
              borderRadius: 5,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "#ccc",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {/* Vérifier si l'icône existe avant d'afficher */}
            {iconMap[item.name] && (
              <Image
                source={iconMap[item.name]}
                style={{ width: 24, height: 24, marginRight: 10 }}
                resizeMode="contain"
              />
            )}
            <Text style={{ fontSize: 18, fontWeight: "bold", color: index === 1 ? "white" : "black" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}