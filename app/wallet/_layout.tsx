import { Stack } from "expo-router";

export default function WalletLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="cameroun" />
      <Stack.Screen name="centrafrique" />
      <Stack.Screen name="congo" />
      <Stack.Screen name="gabon" />
      <Stack.Screen name="guinee" />
      <Stack.Screen name="tchad" />
      <Stack.Screen name="iban-form" />
      <Stack.Screen name="mes-ibans" />
      <Stack.Screen name="mes-wallets" />
      <Stack.Screen name="wallet-intermediaire" />
      <Stack.Screen name="wallet-to-iban" />
    </Stack>
  );
}
