import { View, Text } from "react-native";

export default function SendScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Send Money</Text>
    </View>
  );
}