import { createStackNavigator } from "@react-navigation/stack";
import WalletScreen from "./wallet"; // 📌 Ton fichier wallet.tsx

const Stack = createStackNavigator();

export default function WalletStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="wallet" component={WalletScreen} />
    </Stack.Navigator>
  );
}