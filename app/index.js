import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}>
        
        {/* ✅ En-tête */}
        <View style={styles.header}>
          <Ionicons name="settings-outline" size={24} color="white" />
          <Text style={styles.headerTitle}>Mon Perfect</Text>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>

        {/* ✅ Carte du compte */}
        <View style={styles.accountCard}>
          <Text style={styles.accountTitle}>NOM DU COMPTE</Text>
          <Text style={styles.accountSubtitle}>COMPTE CHÈQUE SALARIÉ PRIVÉ de</Text>
          <Text style={styles.accountSubtitle}>NZANG EDOU AUDE FLORA</Text>
          <Text style={styles.accountNumber}>**** **** 04682 ***01</Text>

          <View style={styles.accountInfo}>
            <View>
              <Text style={styles.accountLabel}>TYPE</Text>
              <Text style={styles.accountValue}>EPG</Text>
            </View>
            <View>
              <Text style={styles.accountLabel}>SOLDE</Text>
              <Text style={styles.accountValue}>316,00 XAF</Text>
            </View>
            <Ionicons name="filter" size={24} color="white" />
          </View>
        </View>

        {/* ✅ Section Opérations */}
        <View style={styles.operationsContainer}>
          <Text style={styles.sectionTitle}>Opérations</Text>
          <View style={styles.operationsGrid}>
            {[
              { title: "RETRAIT", icon: "cash-outline" },
              { title: "MISE A DISP", icon: "people-outline" },
              { title: "TRANSFERT", icon: "swap-horizontal-outline" },
              { title: "RELEVE", icon: "document-text-outline" },
              { title: "WALLET", icon: "wallet-outline" },
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.operationButton}>
                <Ionicons name={item.icon} size={24} color="#2E7D32" />
                <Text style={styles.operationText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* ✅ Transactions récentes */}
        <View style={styles.transactionsContainer}>
          <Text style={styles.sectionTitle}>Transactions récentes</Text>
          <Text style={styles.sansWalletTag}>SANS WALLET</Text>

          {[
            { date: "25/2/2025", amount: "500000.0", currency: "XAF" },
            { date: "24/2/2025", amount: "203000.0", currency: "XAF" },
          ].map((item, index) => (
            <View key={index} style={styles.transactionItem}>
              <Ionicons name="arrow-forward-outline" size={24} color="#2E7D32" />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.transactionText}>Un transfert a été effectué depuis votre compte.</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
              <Text style={styles.transactionAmount}>{item.amount} {item.currency}</Text>
            </View>
          ))}
        </View>

        {/* ✅ Barre de navigation */}
        {/* <View style={styles.bottomNav}>
          {[
            { title: "Accueil", icon: "home-outline" },
            { title: "Comptes", icon: "card-outline" },
            { title: "E-Service", icon: "briefcase-outline" },
            { title: "Session", icon: "log-out-outline" },
            { title: "Aide", icon: "help-circle-outline" },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.navItem}>
              <Ionicons name={item.icon} size={24} color="gray" />
              <Text style={styles.navText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View> */}

      </ScrollView>
    </SafeAreaView>
  );
}

// ✅ STYLES
const styles = {
  header: {
    backgroundColor: "#2E7D32",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  accountCard: {
    backgroundColor: "#244D38",
    padding: 20,
    borderRadius: 10,
    margin: 15,
  },
  accountTitle: {
    color: "#FFC107",
    fontSize: 14,
    fontWeight: "bold",
  },
  accountSubtitle: {
    color: "white",
    fontSize: 16,
  },
  accountNumber: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  accountInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  accountLabel: {
    color: "white",
    fontSize: 12,
  },
  accountValue: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  operationsContainer: {
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  operationsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  operationButton: {
    width: "48%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
  },
  operationText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  transactionsContainer: {
    paddingHorizontal: 15,
  },
  sansWalletTag: {
    color: "red",
    fontWeight: "bold",
    marginBottom: 5,
  },
  transactionItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  transactionText: {
    fontSize: 14,
    color: "black",
  },
  transactionDate: {
    fontSize: 12,
    color: "gray",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "gray",
  },
};