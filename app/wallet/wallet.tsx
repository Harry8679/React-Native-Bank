import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function WalletScreen() {
  const [openCountry, setOpenCountry] = useState(null);
  const [selectedOperator, setSelectedOperator] = useState(null);

  const countries = [
    { name: "Cameroun", operators: ["MTN", "Orange", "Afriland First Bank", "CCA Bank"] },
    { name: "Centrafrique", operators: ["Orange Money"] },
    { name: "Congo", operators: ["Mobile Money CG", "AIRTEL Money", "BGFI Mobile", "BIPAY"] },
    { name: "Gabon", operators: ["AIRTEL Money", "MOOV Money", "BGFI Mobile"] },
    { name: "Tchad", operators: ["AIRTEL Money", "MOOV Money"] },
    { name: "Guinée Équatoriale", operators: ["MUNI DINERO", "BGFI Mobile"] },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <ScrollView>
        {/* Header */}
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#2E7D32" }}>GIMACPAY</Text>
          <Text style={{ fontSize: 18, color: "gray" }}>Transfert Wallet</Text>
        </View>

        {/* Liste des pays */}
        <View style={{ backgroundColor: "white", borderRadius: 10, overflow: "hidden" }}>
          {countries.map((country, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => setOpenCountry(openCountry === country.name ? null : country.name)}
                style={{
                  backgroundColor: openCountry === country.name ? "#2E7D32" : "white",
                  padding: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold", color: openCountry === country.name ? "white" : "black" }}>
                  {country.name}
                </Text>
                <Ionicons name={openCountry === country.name ? "chevron-up" : "chevron-down"} size={24} color={openCountry === country.name ? "white" : "black"} />
              </TouchableOpacity>

              {openCountry === country.name && (
                <View style={{ paddingLeft: 20, paddingVertical: 10 }}>
                  {country.operators.map((operator, opIndex) => (
                    <TouchableOpacity
                      key={opIndex}
                      onPress={() => setSelectedOperator(operator)}
                      style={{
                        paddingVertical: 10,
                        borderBottomWidth: opIndex !== country.operators.length - 1 ? 1 : 0,
                        borderBottomColor: "#ccc",
                      }}
                    >
                      <Text style={{ fontSize: 16 }}>{operator}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Formulaire de transaction */}
        {selectedOperator && (
          <View style={{ marginTop: 20, padding: 15, borderRadius: 10, backgroundColor: "#F8F9FA" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Transfert {selectedOperator}</Text>

            <TextInput
              placeholder="Identifiant du destinataire"
              style={{ backgroundColor: "white", padding: 10, borderRadius: 5, marginBottom: 10, borderWidth: 1, borderColor: "#ccc" }}
            />
            <TextInput
              placeholder="Montant de la transaction"
              keyboardType="numeric"
              style={{ backgroundColor: "white", padding: 10, borderRadius: 5, marginBottom: 10, borderWidth: 1, borderColor: "#ccc" }}
            />
            <TextInput
              placeholder="Ref transaction (GIMAC)"
              style={{ backgroundColor: "white", padding: 10, borderRadius: 5, marginBottom: 10, borderWidth: 1, borderColor: "#ccc" }}
            />

            <TouchableOpacity
              style={{ backgroundColor: "#2E7D32", padding: 15, borderRadius: 5, alignItems: "center" }}
              onPress={() => alert(`Transfert vers ${selectedOperator} en cours...`)}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Valider</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}