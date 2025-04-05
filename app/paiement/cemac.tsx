import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

// ✅ Dictionnaire images des opérateurs
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

export default function PaiementCemacScreen() {
  const router = useRouter();
  const [countryModal, setCountryModal] = useState(false);
  const [platformModal, setPlatformModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Sélectionner le pays");
  const [selectedPlatform, setSelectedPlatform] = useState("Sélectionner la plateforme");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [filteredPlatforms, setFilteredPlatforms] = useState([]);

  const countries = [
    { flag: "🇨🇲", name: "Cameroun", operators: ["MTN", "Orange", "Afriland First Bank", "CCA Bank"] },
    { flag: "🇨🇫", name: "Centrafrique", operators: ["Orange Money"] },
    { flag: "🇨🇬", name: "Congo", operators: ["Mobile Money CG", "AIRTEL Money", "BGFI Mobile", "BIPAY"] },
    { flag: "🇹🇩", name: "Tchad", operators: ["AIRTEL Money", "MOOV Money"] },
    { flag: "🇬🇶", name: "Guinée Équatoriale", operators: ["MUNI DINERO", "BGFI Mobile"] },
  ];

  const handleCountrySelect = (country) => {
    setSelectedCountry(`${country.flag} ${country.name}`);
    setFilteredPlatforms(country.operators);
    setSelectedPlatform("Sélectionner la plateforme");
    setCountryModal(false);
  };

  const handleNext = () => {
    if (step === 1 && selectedCountry !== "Sélectionner le pays" && selectedPlatform !== "Sélectionner la plateforme") setStep(2);
    else if (step === 2 && phone) setStep(3);
  };

  const handleSuccess = () => {
    alert("✅ Paiement CEMAC effectué avec succès");
    router.push("/sodec");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>
      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }} />

      {/* Step 1: Select country and platform */}
      {step === 1 && (
        <>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Paiement CEMAC</Text>

          <Text style={{ marginBottom: 10, color: "#2E7D32" }}>Veuillez choisir le pays</Text>
          <TouchableOpacity 
            style={{ borderWidth: 1, padding: 15, borderRadius: 8, marginBottom: 20 }}
            onPress={() => setCountryModal(true)}
          >
            <Text>{selectedCountry}</Text>
          </TouchableOpacity>

          <Text style={{ marginBottom: 10, color: "#2E7D32" }}>Veuillez choisir la plateforme</Text>
          <TouchableOpacity 
            style={{ borderWidth: 1, padding: 15, borderRadius: 8, marginBottom: 20 }}
            onPress={() => setPlatformModal(true)}
            disabled={filteredPlatforms.length === 0}
          >
            <Text>{selectedPlatform}</Text>
          </TouchableOpacity>

          {/* Country Modal */}
          <Modal visible={countryModal} transparent>
            <View style={{ flex: 1, backgroundColor: "#00000088", justifyContent: "center", padding: 20 }}>
              <View style={{ backgroundColor: "white", borderRadius: 8, padding: 20 }}>
                <Text style={{ fontSize: 18, marginBottom: 15 }}>Choisissez le pays</Text>
                <FlatList
                  data={countries}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
                      onPress={() => handleCountrySelect(item)}
                    >
                      <Text style={{ fontSize: 18 }}>{item.flag} {item.name}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.name}
                />
              </View>
            </View>
          </Modal>

          {/* Platform Modal */}
          <Modal visible={platformModal} transparent>
            <View style={{ flex: 1, backgroundColor: "#00000088", justifyContent: "center", padding: 20 }}>
              <View style={{ backgroundColor: "white", borderRadius: 8, padding: 20 }}>
                <Text style={{ fontSize: 18, marginBottom: 15 }}>Choisissez la plateforme</Text>
                <FlatList
                  data={filteredPlatforms}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}
                      onPress={() => {
                        setSelectedPlatform(item);
                        setPlatformModal(false);
                      }}
                    >
                      {operatorImages[item] && (
                        <Image source={operatorImages[item]} style={{ width: 30, height: 30, resizeMode: "contain", marginRight: 10 }} />
                      )}
                      <Text style={{ fontSize: 18 }}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>
          </Modal>

          <TouchableOpacity onPress={handleNext} style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 8 }}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Suivant</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Step 2: Input Phone */}
      {step === 2 && (
        <>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Paiement CEMAC</Text>
          <Text style={{ marginBottom: 10 }}>Entrer le numéro de {selectedPlatform} marchand</Text>
          <TextInput
            placeholder="Saisir le numéro du commerçant"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={{ borderWidth: 1, padding: 15, borderRadius: 8, marginBottom: 20 }}
          />

          <TouchableOpacity onPress={handleNext} style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 8 }}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Suivant</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Step 3: Input Amount */}
      {step === 3 && (
        <>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Paiement CEMAC</Text>
          <Text style={{ marginBottom: 10 }}>Montant en FCFA</Text>
          <TextInput
            placeholder="Montant en FCFA"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            style={{ borderWidth: 1, padding: 15, borderRadius: 8, marginBottom: 20 }}
          />

          <TouchableOpacity onPress={handleSuccess} style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 8 }}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Valider</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}