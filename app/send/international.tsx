import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, Image } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Listes
const countries = ["🇩🇪 Allemagne", "🇦🇺 Australie", "🇨🇳 Chine", "🇨🇮 Cote d'Ivoire", "🇪🇸 Espagne", "🇫🇷 France", "🇯🇵 Japon", "🇳🇬 Nigeria", "🇺🇸 USA"];
const terminaisons = ["MTN", "Orange", "Visa"];
const institutions = ["Western Union", "MoneyGram", "RIA"];

// Images associées aux terminaisons
const terminaisonImages: { [key: string]: any } = {
  "MTN": require("../../assets/mtn.png"),
  "Orange": require("../../assets/orange.png"),
  "Visa": require("../../assets/visa.png"),
};

export default function InternationalStart() {
  const [country, setCountry] = useState("Sélectionner un pays");
  const [terminaison, setTerminaison] = useState("");
  const [institution, setInstitution] = useState("");
  const [numero, setNumero] = useState("");
  const [amount, setAmount] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<string[]>([]);
  const [fieldTarget, setFieldTarget] = useState("");
  const router = useRouter();

  const openModal = (data: string[], field: string) => {
    setModalData(data);
    setFieldTarget(field);
    setModalVisible(true);
  };

  const handleSelect = (item: string) => {
    if (fieldTarget === "country") setCountry(item);
    else if (fieldTarget === "terminaison") setTerminaison(item);
    else if (fieldTarget === "institution") setInstitution(item);
    setModalVisible(false);
  };

  const goNext = () => {
    if (!country || !terminaison || !institution || !numero || !amount) return alert("Tous les champs sont requis");
    router.push({
      pathname: "/send/international/destinataire",
      params: { country, terminaison, institution, numero, amount }
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Retour */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>

      <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 20 }}>Transfert International</Text>

      {/* Sélecteurs */}
      <TouchableOpacity onPress={() => openModal(countries, "country")} style={styles.select}>
        <Text>{country}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openModal(terminaisons, "terminaison")} style={styles.select}>
        <Text>{terminaison || "Sélectionner une terminaison"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openModal(institutions, "institution")} style={styles.select}>
        <Text>{institution || "Sélectionner une institution"}</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Numéro de la terminaison"
        value={numero}
        onChangeText={setNumero}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Montant à transférer"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity onPress={goNext} style={styles.button}>
        <Text style={styles.buttonText}>Valider</Text>
      </TouchableOpacity>

      {/* ✅ Modal générique */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            <FlatList
              data={modalData}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalItem} onPress={() => handleSelect(item)}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {/* ✅ Afficher image si on est dans le champ terminaison */}
                    {fieldTarget === "terminaison" && terminaisonImages[item] && (
                      <Image
                        source={terminaisonImages[item]}
                        style={{ width: 30, height: 30, marginRight: 10, resizeMode: "contain" }}
                      />
                    )}
                    <Text>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelBtn}>
              <Text style={{ color: "white" }}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1, borderColor: "#ccc", padding: 15, borderRadius: 8, marginBottom: 20
  },
  select: {
    borderWidth: 1, borderColor: "#ccc", padding: 15, borderRadius: 8, marginBottom: 20
  },
  button: {
    backgroundColor: "#2E7D32", padding: 15, borderRadius: 8, alignItems: "center"
  },
  buttonText: {
    color: "white", fontSize: 18
  },
  modalBg: {
    flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", padding: 20
  },
  modalContent: {
    backgroundColor: "white", borderRadius: 10, padding: 20
  },
  modalItem: {
    paddingVertical: 15, borderBottomColor: "#eee", borderBottomWidth: 1
  },
  cancelBtn: {
    backgroundColor: "gray", padding: 15, borderRadius: 5, marginTop: 20, alignItems: "center"
  }
};