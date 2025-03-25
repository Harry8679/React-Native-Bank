import { Stack } from "expo-router";

export default function AgencyLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="agency-banking" />
      <Stack.Screen name="agency-confirmation" />
      <Stack.Screen name="agency-depot" />
      <Stack.Screen name="agency-error" />
      <Stack.Screen name="agency-success" />
    </Stack>
  );
}