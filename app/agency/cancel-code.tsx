import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function CancelCodeScreen() {
  const router = useRouter();
  const [code, setCode] = useState("");

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 50, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }} />
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>Envoi de la demande</Text>

      <Text style={{ marginBottom: 10 }}>Veuillez entrer le code de retrait à annuler</Text>
      <TextInput
        placeholder="Code de retrait"
        style={styles.input}
        value={code}
        onChangeText={setCode}
      />

      <TouchableOpacity
        onPress={() => router.push({ pathname: "/agency/cancel-validation", params: { code } })}
        style={styles.btn}
      >
        <Text style={styles.text}>VALIDER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  input: { borderWidth: 1, borderColor: "#ccc", padding: 15, borderRadius: 5, marginBottom: 20 },
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5 },
  text: { color: "white", textAlign: "center", fontSize: 18 }
};
