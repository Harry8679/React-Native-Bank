import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function ConfirmationScreen() {
  const { client, amount } = useLocalSearchParams();
  const [pin, setPin] = useState("");
  const router = useRouter();

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
        <Ionicons name="arrow-back" size={60} color="black" />
      </TouchableOpacity>

      <Image source={require("../../assets/gimacpay.png")} style={{ width: 200, height: 70, alignSelf: "center" }} />
      <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 20 }}>ENVOI DE DÉPÔT</Text>

      <Text style={{ marginBottom: 20 }}>
        Un dépôt de: {amount} FCFA sera envoyé à : {"\n"}Numéro: {client}{"\n"}Entrez votre PIN
      </Text>

      <TextInput placeholder="PIN" secureTextEntry style={styles.input} onChangeText={setPin} />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => router.back()} style={styles.cancelBtn}>
          <Text style={styles.cancelText}>Annuler</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            pin === "123456"
              ? router.push("/agency/agency-success")
              : router.push("/agency/agency-error");
          }}
          style={styles.btn}
        >
          <Text style={styles.text}>VALIDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  input: { borderWidth: 1, borderColor: "#ccc", padding: 15, borderRadius: 5, marginBottom: 20 },
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5 },
  text: { color: "white", fontSize: 18 },
  cancelBtn: { backgroundColor: "gray", padding: 15, borderRadius: 5 },
  cancelText: { color: "white", fontSize: 18 }
};