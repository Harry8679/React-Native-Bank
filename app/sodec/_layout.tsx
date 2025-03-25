import { Stack } from "expo-router";

export default function SodecLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="paiement" />
      <Stack.Screen name="voucher" />
      <Stack.Screen name="autres-services" />
      {/* Ajoute d’autres sous-routes ici si besoin */}
    </Stack>
  );
}