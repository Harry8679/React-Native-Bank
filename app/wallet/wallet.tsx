import { View, Text, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
// import { View, Text, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from "react-native";
// import { useState } from "react";

export default function WalletScreen() {
  const router = useRouter();
  const [openCountry, setOpenCountry] = useState<string | null>(null);
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
  const [formPosition, setFormPosition] = useState<{ country: string; operator: string } | null>(null);

  const countries = [
    { flag: "🇨🇲", name: "Cameroun", operators: ["MTN", "Orange", "Afriland First Bank", "CCA Bank"] },
    { flag: "🇨🇫", name: "Centrafrique", operators: ["Orange Money"] },
    { flag: "🇨🇬", name: "Congo", operators: ["Mobile Money CG", "AIRTEL Money", "BGFI Mobile", "BIPAY"] },
    { flag: "🇬🇦", name: "Gabon", operators: ["AIRTEL Money", "MOOV Money", "BGFI Mobile"] },
    { flag: "🇹🇩", name: "Tchad", operators: ["AIRTEL Money", "MOOV Money"] },
    { flag: "🇬🇶", name: "Guinée Équatoriale", operators: ["MUNI DINERO", "BGFI Mobile"] },
  ];
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* 🔥 Bouton Retour en arrière */}
      <TouchableOpacity
        onPress={() => {
          if (router.canGoBack()) {
            router.back();
          } else {
            router.push("/sodec"); // Redirection de secours
          }
        }}
        style={{
          position: "absolute",
          top: 40,
          left: 20,
          zIndex: 10,
        }}
      >
        <Ionicons name="arrow-back" size={60} color="black" />
      </TouchableOpacity>
      {/* Ajout du ScrollView pour permettre le défilement */}
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        
        {/* Titre */}
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#2E7D32" }}>SODEC</Text>
          <Text style={{ fontSize: 18, color: "gray" }}>Transfert Wallet</Text>
        </View>

        {/* Liste des pays */}
        <View style={{ backgroundColor: "white", borderRadius: 10, overflow: "hidden" }}>
          {countries.map((country, index) => (
            <View key={index}>
              {/* Pays */}
              <TouchableOpacity
                onPress={() => {
                  setOpenCountry(openCountry === country.name ? null : country.name);
                  setSelectedOperator(null); // Fermer le formulaire si un autre pays est sélectionné
                }}
                style={{
                  backgroundColor: openCountry === country.name ? "#2E7D32" : "white",
                  padding: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold", color: openCountry === country.name ? "white" : "black" }}>
                  {country.flag} {country.name}
                </Text>
              </TouchableOpacity>

              {/* Liste des opérateurs (Affichée uniquement si le pays est ouvert) */}
              {openCountry === country.name && (
                <View style={{ paddingLeft: 20, backgroundColor: "#ccc" }}>
                  {country.operators.map((operator, opIndex) => (
                    <View key={opIndex}>
                      <TouchableOpacity
                        onPress={() => {
                          if (selectedOperator === operator) {
                            setSelectedOperator(null);
                            setFormPosition(null);
                          } else {
                            setSelectedOperator(operator);
                            setFormPosition({ country: country.name, operator });
                          }
                        }}
                        style={{
                          padding: 15,
                          borderBottomWidth: 1,
                          borderBottomColor: "#ddd",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
                          {operator}
                        </Text>
                      </TouchableOpacity>

                      {/* ✅ Formulaire (Affiché sous l'opérateur sélectionné) */}
                      {formPosition?.operator === operator && formPosition?.country === country.name && (
                        <View
                          style={{
                            marginTop: 5,
                            padding: 20,
                            backgroundColor: "white",
                            borderRadius: 10,
                            shadowColor: "#000",
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            elevation: 3,
                          }}
                        >
                          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#2E7D32", textAlign: "center" }}>
                            {operator}
                          </Text>

                          {/* Champs du formulaire */}
                          <TextInput placeholder="Identifiant du destinataire" style={styles.input} />
                          <TextInput placeholder="Montant de la transaction" keyboardType="numeric" style={styles.input} />
                          <TextInput placeholder="Ref transaction (GIMAC)" style={styles.input} />

                          {/* Bouton Valider */}
                          <TouchableOpacity
                            style={{
                              backgroundColor: "#2E7D32",
                              padding: 15,
                              borderRadius: 5,
                              marginTop: 10,
                              alignItems: "center",
                            }}
                          >
                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Valider</Text>
                          </TouchableOpacity>

                          {/* 🔥 Bouton pour fermer le formulaire */}
                          <TouchableOpacity
                            onPress={() => {
                              setSelectedOperator(null);
                              setFormPosition(null); // ✅ Ajouté pour vraiment fermer le formulaire
                            }}
                            style={{
                              marginTop: 10,
                              alignItems: "center",
                            }}
                          >
                            <Text style={{ fontSize: 16, color: "red" }}>Fermer</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ✅ Styles pour les champs de saisie
const styles = {
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
};