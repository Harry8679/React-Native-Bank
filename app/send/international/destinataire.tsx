// File: send/international/destinataire.tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function DestinataireScreen() {
  const { country, terminaison, institution, numero, amount } = useLocalSearchParams();
  const router = useRouter();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sexe, setSexe] = useState("");
  const [adresse, setAdresse] = useState("");
  const [tel, setTel] = useState("");
  const [motif, setMotif] = useState("");

  const handleNext = () => {
    if (!nom || !prenom || !sexe || !adresse || !tel || !motif) return alert("Tous les champs sont requis");

    router.push({
      pathname: "/send/international/recap",
      params: {
        country, terminaison, institution, numero, amount,
        nom, prenom, sexe, adresse, tel, motif
      }
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 20 }}>Infos Destinataire</Text>

      <TextInput placeholder="Nom" value={nom} onChangeText={setNom} style={styles.input} />
      <TextInput placeholder="Prénom" value={prenom} onChangeText={setPrenom} style={styles.input} />
      <TextInput placeholder="Sexe" value={sexe} onChangeText={setSexe} style={styles.input} />
      <TextInput placeholder="Adresse" value={adresse} onChangeText={setAdresse} style={styles.input} />
      <TextInput placeholder="Numéro de téléphone" value={tel} onChangeText={setTel} style={styles.input} />
      <TextInput placeholder="Motif de la transaction" value={motif} onChangeText={setMotif} style={styles.input} />

      <TouchableOpacity onPress={handleNext} style={styles.button}>
        <Text style={styles.buttonText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1, borderColor: "#ccc", padding: 15, borderRadius: 8, marginBottom: 15
  },
  button: {
    backgroundColor: "#2E7D32", padding: 15, borderRadius: 8, alignItems: "center"
  },
  buttonText: {
    color: "white", fontSize: 18
  }
};