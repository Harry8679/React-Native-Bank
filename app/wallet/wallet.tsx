import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

export default function WalletScreen() {
  const router = useRouter();

  const countries = [
    { name: "Cameroun", route: "/wallet/cameroun", highlight: true }, // En vert
    { name: "Centrafrique", route: "/wallet/centrafrique" },
    { name: "Congo", route: "/wallet/congo" },
    { name: "Gabon", route: "/wallet/gabon" },
    { name: "Guinée Équatoriale", route: "/wallet/guinee" },
    { name: "Tchad", route: "/wallet/tchad" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* Logo */}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#2E7D32" }}>GIMACPAY</Text>
        <Text style={{ fontSize: 18, color: "gray" }}>Transfert Wallet</Text>
      </View>

      {/* Liste des pays */}
      <View style={{ backgroundColor: "white", borderRadius: 10, overflow: "hidden" }}>
        {countries.map((item, index) => (
          <TouchableOpacity
            key={index}
            // onPress={() => router.push({ pathname: item.route })} // ✅ Correction ici
            // onPress={() => router.push(`/wallet/${item.name.toLowerCase().replace(/\s/g, "-")}`)} // ✅ Correction
            onPress={() => router.push({ pathname: item.route } as any)}

            style={{
              backgroundColor: item.highlight ? "#2E7D32" : "white",
              padding: 15,
              borderBottomWidth: index !== countries.length - 1 ? 1 : 0,
              borderBottomColor: "#ccc",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: item.highlight ? "white" : "black" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </SafeAreaView>
  );
}