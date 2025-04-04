import { View, Text, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Modal, FlatList, Image, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function WalletScreen() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [operatorModalVisible, setOperatorModalVisible] = useState(false);
  const [formModalVisible, setFormModalVisible] = useState(false);

  const [identifier, setIdentifier] = useState("");
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");

  const countries = [
    { flag: "🇨🇲", name: "Cameroun", operators: ["MTN", "Orange", "Afriland First Bank", "CCA Bank"] },
    { flag: "🇨🇫", name: "Centrafrique", operators: ["Orange Money"] },
    { flag: "🇨🇬", name: "Congo", operators: ["Mobile Money CG", "AIRTEL Money", "BGFI Mobile", "BIPAY"] },
    { flag: "🇬🇦", name: "Gabon", operators: ["AIRTEL Money", "MOOV Money", "BGFI Mobile"] },
    { flag: "🇹🇩", name: "Tchad", operators: ["AIRTEL Money", "MOOV Money"] },
    { flag: "🇬🇶", name: "Guinée Equatoriale", operators: ["MUNI DINERO", "BGFI Mobile"] },
  ];

  const operatorImages: { [key: string]: any } = {
    "MTN": require("../../assets/mtn.png"),
    "Orange": require("../../assets/orange.png"),
    "Orange Money": require("../../assets/orange.png"),
    "Afriland First Bank": require("../../assets/afriland.png"),
    "CCA Bank": require("../../assets/cca.png"),
    "Mobile Money CG": require("../../assets/mmcg.png"),
    "AIRTEL Money": require("../../assets/airtel.png"),
    "Airtel Money": require("../../assets/airtel.png"),
    "BGFI Mobile": require("../../assets/bgfi.png"),
    "BIPAY": require("../../assets/bipay.png"),
    "MOOV Money": require("../../assets/moov.png"),
    "MUNI DINERO": require("../../assets/muni.png"),
  };

  const handleValidate = () => {
    if (!identifier || !amount || !reference) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    alert("✅ Transaction envoyée avec succès !");
    setFormModalVisible(false);
    setSelectedOperator(null);
    setIdentifier("");
    setAmount("");
    setReference("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Bouton Retour */}
      <TouchableOpacity
        onPress={() => (router.canGoBack() ? router.back() : router.push("/sodec"))}
        style={{ position: "absolute", top: 40, left: 20, zIndex: 10 }}
      >
        <Ionicons name="arrow-back" size={60} color="black" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingTop: 100, paddingBottom: 50 }}>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#2E7D32" }}>SODEC</Text>
          <Text style={{ fontSize: 18, color: "gray" }}>Transfert Wallet</Text>
        </View>

        {countries.map((country, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelectedCountry(country);
              setOperatorModalVisible(true);
            }}
            style={{
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{country.flag} {country.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal Opérateur */}
      <Modal visible={operatorModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>
              Opérateurs - {selectedCountry?.flag} {selectedCountry?.name}
            </Text>
            <FlatList
              data={selectedCountry?.operators}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedOperator(item);
                    setOperatorModalVisible(false);
                    setFormModalVisible(true);
                  }}
                  style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
                >
                  <Image
                    source={operatorImages[item]}
                    style={{ width: 40, height: 40, marginRight: 15, resizeMode: "contain" }}
                  />
                  <Text style={{ fontSize: 16 }}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setOperatorModalVisible(false)} style={styles.cancelBtn}>
              <Text style={{ color: "red" }}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal Formulaire */}
<Modal visible={formModalVisible} transparent animationType="fade">
  <View style={styles.modalOverlay}>
    <KeyboardAvoidingView
      behavior="padding"
      style={[styles.modalBox, { width: "100%", maxHeight: "90%" }]}
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#2E7D32", marginBottom: 15 }}>
          {selectedOperator}
        </Text>

        <TextInput
          placeholder="Identifiant du destinataire"
          value={identifier}
          onChangeText={setIdentifier}
          style={styles.input}
        />
        <TextInput
          placeholder="Montant de la transaction"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          style={styles.input}
        />
        <TextInput
          placeholder="Référence transaction (GIMAC)"
          value={reference}
          onChangeText={setReference}
          style={styles.input}
        />

        <TouchableOpacity onPress={handleValidate} style={styles.validateBtn}>
          <Text style={styles.validateText}>Valider</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFormModalVisible(false)} style={{ marginTop: 10, alignItems: "center" }}>
          <Text style={{ color: "red" }}>Fermer</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  </View>
</Modal>

    </SafeAreaView>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  validateBtn: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  validateText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "100%",
  },
  cancelBtn: {
    marginTop: 10,
    alignItems: "center",
  },
};