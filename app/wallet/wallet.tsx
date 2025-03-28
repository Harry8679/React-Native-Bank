import { View, Text, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Modal, FlatList, Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function WalletScreen() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [operatorModalVisible, setOperatorModalVisible] = useState(false);

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
    alert("✅ Transaction envoyée avec succès !");
    setFormVisible(false);
    setSelectedOperator(null);
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

        {/* Modal pour sélection opérateur */}
        <Modal visible={operatorModalVisible} transparent animationType="slide">
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", padding: 20 }}>
            <View style={{ backgroundColor: "white", borderRadius: 10, padding: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
                Opérateurs - {selectedCountry?.flag} {selectedCountry?.name}
              </Text>
              <FlatList
                data={selectedCountry?.operators}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedOperator(item);
                      setFormVisible(true);
                      setOperatorModalVisible(false);
                    }}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 12,
                      borderBottomWidth: 1,
                      borderColor: "#eee"
                    }}
                  >
                    <Image
                      source={operatorImages[item]}
                      style={{ width: 40, height: 40, resizeMode: "contain", marginRight: 15 }}
                    />
                    <Text style={{ fontSize: 16 }}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity onPress={() => setOperatorModalVisible(false)} style={{ marginTop: 15, alignItems: "center" }}>
                <Text style={{ color: "red" }}>Annuler</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Formulaire */}
        {formVisible && (
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, marginTop: 20, elevation: 2 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#2E7D32", marginBottom: 15, textAlign: "center" }}>{selectedOperator}</Text>
            <TextInput
              placeholder="Identifiant du destinataire"
              style={styles.input}
              value={identifier}
              onChangeText={setIdentifier}
            />
            <TextInput
              placeholder="Montant de la transaction"
              keyboardType="numeric"
              style={styles.input}
              value={amount}
              onChangeText={setAmount}
            />
            <TextInput
              placeholder="Ref transaction (GIMAC)"
              style={styles.input}
              value={reference}
              onChangeText={setReference}
            />

            <TouchableOpacity onPress={handleValidate} style={styles.validateBtn}>
              <Text style={styles.validateText}>Valider</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              setFormVisible(false);
              setSelectedOperator(null);
            }} style={{ marginTop: 15, alignItems: "center" }}>
              <Text style={{ color: "red" }}>Fermer</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  validateBtn: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  validateText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
};