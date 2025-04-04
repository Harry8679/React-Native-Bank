import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ReceiversScreen() {
  // ✅ Liste mise à jour avec champs iban ou wallet
  const receivers = [
    {
      name: "Jean Dupont",
      phone: "+237 690 123 456",
      lastTransfer: "12 Mars 2025",
      type: "iban",
      iban: "FR14 2001 0101 1505 0001 3M02 606",
    },
    {
      name: "Marie Talla",
      phone: "+225 770 654 321",
      lastTransfer: "5 Mars 2025",
      type: "wallet",
      wallet: "Orange Money",
    },
    {
      name: "Paul Koffi",
      phone: "+229 610 789 012",
      lastTransfer: "25 Février 2025",
      type: "iban",
      iban: "BE68 5390 0754 7034",
    },
    {
      name: "Amina Diallo",
      phone: "+223 620 345 678",
      lastTransfer: "20 Février 2025",
      type: "wallet",
      wallet: "Airtel Money",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* Titre de la page */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
          marginTop: 40,
        }}
      >
        📋 Liste des Bénéficiaires
      </Text>

      {/* Liste des bénéficiaires */}
      <ScrollView>
        {receivers.map((receiver, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F8F8F8",
              padding: 15,
              borderRadius: 10,
              marginBottom: 10,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              elevation: 2,
            }}
          >
            {/* Icône selon le type */}
            <Ionicons
              name={receiver.type === "iban" ? "card" : "wallet"}
              size={30}
              color={receiver.type === "iban" ? "#2E7D32" : "#FFC107"}
              style={{ marginRight: 15 }}
            />

            {/* Infos bénéficiaire */}
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{receiver.name}</Text>
              <Text style={{ fontSize: 14, color: "gray" }}>{receiver.phone}</Text>
              <Text style={{ fontSize: 14, color: "gray" }}>
                Dernier transfert : {receiver.lastTransfer}
              </Text>

              {/* ✅ Affichage conditionnel */}
              {receiver.type === "iban" && (
                <Text style={{ fontSize: 14, color: "gray" }}>
                  IBAN : {receiver.iban}
                </Text>
              )}
              {receiver.type === "wallet" && (
                <Text style={{ fontSize: 14, color: "gray" }}>
                  Wallet : {receiver.wallet}
                </Text>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bouton Ajouter */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#2E7D32",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          + Ajouter un bénéficiaire
        </Text>
      </TouchableOpacity>
    </View>
  );
}