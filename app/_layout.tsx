import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        {/* La TabBar est un écran (tabs) */}
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="send" />
        <Stack.Screen name="agency" />
        <Stack.Screen name="wallet" />
        <Stack.Screen name="sodec" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}