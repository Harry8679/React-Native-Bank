import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function AgencyBankingScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, justifyContent: "center" }}>
      <Image source={require("../../assets/gimacpay.png")} style={{ width: 200, height: 70, alignSelf: "center" }} />
      <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 20 }}>AGENCY BANKING</Text>

      <TouchableOpacity onPress={() => router.push("/agency/agency-depot")} style={styles.btn}>
        <Text style={styles.text}>DÉPÔT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>RETRAIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  btn: { backgroundColor: "#2E7D32", padding: 15, borderRadius: 5, marginVertical: 10 },
  text: { color: "white", textAlign: "center", fontSize: 18 }
};