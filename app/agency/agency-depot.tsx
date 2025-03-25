import { View, Text, TextInput, TouchableOpacity, Image, Modal, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const countries = [
  { label: "Gabon", flag: "🇬🇦" },
  { label: "Cameroun", flag: "🇨🇲" },
  { label: "République du Congo", flag: "🇨🇬" },
  { label: "Guinée Equatoriale", flag: "🇬🇶" },
  { label: "République Centrafricaine", flag: "🇨🇫" },
  { label: "Tchad", flag: "🇹🇩" },
];

export default function DepotScreen() {
  const router = useRouter();
  const [client, setClient] = useState("");
  const [amount, setAmount] = useState("");
  const [participant, setParticipant] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Sélectionner un pays");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (country: string) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  const handleSubmit = () => {
    if (!client || !amount || !participant || selectedCountry === "Sélectionner un pays") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    router.push({
      pathname: "/agency/agency-confirmation",
      params: { client, amount, country: selectedCountry, participant }
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Flèche de retour */}
      <TouchableOpacity
        onPress={() => (router.canGoBack() ? router.back() : router.push("/sodec"))}
        style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
      >
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginTop: 50 }} />
      <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 20 }}>DÉPÔT</Text>

      {/* Sélecteur de Pays */}
      <Text style={{ fontSize: 16, marginBottom: 8 }}>Pays</Text>
      <TouchableOpacity style={styles.selectBox} onPress={() => setModalVisible(true)}>
        <Text>{selectedCountry}</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>

      {/* Modal Liste des pays */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Veuillez choisir le pays</Text>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.label}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => handleSelect(`${item.flag} ${item.label}`)}
                >
                  <Text style={{ fontSize: 16 }}>{item.flag} {item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={{ color: "white" }}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Participant */}
      <TextInput
        placeholder="Participant | Réseau"
        style={styles.input}
        value={participant}
        onChangeText={setParticipant}
      />

      {/* Numéro client */}
      <TextInput
        placeholder="Numéro du client"
        style={styles.input}
        value={client}
        onChangeText={setClient}
        keyboardType="phone-pad"
      />

      {/* Montant */}
      <TextInput
        placeholder="Montant du dépôt (FCFA)"
        keyboardType="numeric"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
        <Text style={styles.text}>VALIDER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  btn: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  selectBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  countryItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  cancelButton: {
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
  },
});