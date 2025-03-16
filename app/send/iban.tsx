import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function IbanScreen() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [iban, setIban] = useState("");
  const [name, setName] = useState("");

  // Vérifie si l’IBAN a une longueur suffisante pour afficher le champ "Nom"
  const isValidIban = iban.length >= 10; // Change selon les règles de validation IBAN

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center" }}>
      
      {/* ✅ Bouton Retour en haut */}
      <TouchableOpacity 
        onPress={() => {
          if (router.canGoBack()) {
            router.back();
          } else {
            router.push("/sodec");
          }
        }}
        style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      {/* Titre */}
      <View style={{ alignItems: "center", marginBottom: 40 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#2E7D32" }}>SODEC</Text>
        <Text style={{ fontSize: 18, color: "gray" }}>Autres</Text>
      </View>

      {/* ✅ Étape 1 : Choix entre IBAN et Wallet */}
      {step === 1 && (
        <View>
          <TouchableOpacity
            onPress={() => setStep(2)}
            style={styles.optionButton}
          >
            <Ionicons name="document-text" size={24} color="white" style={{ marginRight: 10 }} />
            <Text style={styles.optionText}>Enregistrement IBAN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Alert.alert("Redirection", "Page Enregistrement Wallet à implémenter")}
            style={styles.optionButton}
          >
            <Ionicons name="wallet" size={24} color="white" style={{ marginRight: 10 }} />
            <Text style={styles.optionText}>Enregistrement Wallet</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* ✅ Étape 2 : Formulaire IBAN */}
      {step === 2 && (
        <View style={styles.formContainer}>
          <Text style={styles.label}>Numéro IBAN</Text>
          <TextInput
            style={styles.input}
            placeholder="Saisir le numéro IBAN"
            value={iban}
            onChangeText={setIban}
            keyboardType="default"
          />

          {/* ✅ Afficher le champ Nom SEULEMENT si l'IBAN est valide */}
          {isValidIban && (
            <>
              <Text style={styles.label}>Nom</Text>
              <TextInput
                style={styles.input}
                placeholder="Nom enregistré"
                value={name}
                onChangeText={setName}
              />
            </>
          )}

          {/* ✅ Bouton Valider (Actif seulement si tout est rempli) */}
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Succès",
                `Le numéro IBAN, ${iban} a été enregistré avec succès`,
                [{ text: "OK", onPress: () => router.push("/sodec") }]
              );
            }}
            style={[styles.submitButton, { backgroundColor: isValidIban && name ? "#2E7D32" : "gray" }]}
            disabled={!isValidIban || !name}
          >
            <Text style={styles.submitText}>Valider</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

// ✅ STYLES
const styles = {
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  formContainer: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#2E7D32",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  submitButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
};