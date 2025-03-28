import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function PaiementNationalScreen() {
  const router = useRouter();
  const [platformModal, setPlatformModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("Sélectionner");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");

  const platforms = [
    { name: "Airtel Money", image: require("../../assets/airtel.png") },
    { name: "BGFI Bank", image: require("../../assets/bgfi.png") },
    { name: "FINAM", image: require("../../assets/finam.png") },
    { name: "SWAP", image: require("../../assets/swap.png") },
  ];

  const handleNext = () => {
    if (step === 1 && selectedPlatform !== "Sélectionner") setStep(2);
    else if (step === 2 && phone) setStep(3);
  };

  const handleSuccess = () => {
    alert("✅ Paiement effectué avec succès");
    router.push("/sodec");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔙 Retour + Logo */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>
      <Image source={require("../../assets/gimac2.png")} style={{ width: 200, height: 70, alignSelf: "center", marginBottom: 20 }} />

      {/* Step 1: Select platform */}
      {step === 1 && (
        <>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Paiement National</Text>
          <Text style={{ marginBottom: 10, color: "#2E7D32" }}>Veuillez choisir la plateforme</Text>
          <TouchableOpacity 
            style={{ borderWidth: 1, padding: 15, borderRadius: 8, marginBottom: 20 }}
            onPress={() => setPlatformModal(true)}
          >
            <Text>{selectedPlatform}</Text>
          </TouchableOpacity>

          <Modal visible={platformModal} transparent>
            <View style={{ flex: 1, backgroundColor: "#00000088", justifyContent: "center", padding: 20 }}>
              <View style={{ backgroundColor: "white", borderRadius: 8, padding: 20 }}>
                <Text style={{ fontSize: 18, marginBottom: 15 }}>Veuillez choisir la plateforme</Text>
                <FlatList
                  data={platforms}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
                      onPress={() => {
                        setSelectedPlatform(item.name);
                        setPlatformModal(false);
                      }}
                    >
                      <Image source={item.image} style={{ width: 40, height: 40, marginRight: 15 }} />
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.name}
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
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Paiement National</Text>
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
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Paiement National</Text>
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