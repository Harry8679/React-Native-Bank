import { Stack } from "expo-router";

export default function SendLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />        {/* Rend send/index.tsx sur /send */}
      <Stack.Screen name="iban" />
      <Stack.Screen name="card" />
      <Stack.Screen name="international" />
    </Stack>
  );
}