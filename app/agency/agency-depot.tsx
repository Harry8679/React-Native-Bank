import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function DepotScreen() {
  const router = useRouter();
  const [client, setClient] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>

      {/* 🔙 Flèche de retour */}
      <TouchableOpacity 
        onPress={() => {
          if (router.canGoBack()) router.back();
          else router.push("/sodec");
        }}
        style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
      >
        <Ionicons name="arrow-back" size={40} color="black" />
      </TouchableOpacity>

      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center" }} />
      <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 20 }}>DÉPÔT</Text>

      <TextInput placeholder="Pays" style={styles.input} />
      <TextInput placeholder="Participant | Réseau" style={styles.input} />
      <TextInput placeholder="Numéro du client" style={styles.input} value={client} onChangeText={setClient} />
      <TextInput placeholder="Montant du dépôt (FCFA)" keyboardType="numeric" style={styles.input} value={amount} onChangeText={setAmount} />

      <TouchableOpacity 
        onPress={() => router.push({ pathname: "/sodec/agency/agency-confirmation", params: { client, amount } })} 
        style={styles.btn}
      >
        <Text style={styles.text}>VALIDER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  input: { borderWidth: 1, borderColor: "#ccc", padding: 15, borderRadius: 5, marginBottom: 15 },
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5 },
  text: { color: "white", textAlign: "center", fontSize: 18 }
};