import { Stack } from "expo-router";

export default function VoucherLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="agency-banking" />
    </Stack>
  );
}