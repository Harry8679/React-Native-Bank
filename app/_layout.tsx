import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Tabs, Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

import { useColorScheme } from "@/hooks/useColorScheme";

SplashScreen.preventAutoHideAsync();

const GOLDEN_YELLOW = "#FFC107";

const TabBarIcon = (routeName: string, color: string, size: number) => {
  let iconName: keyof typeof Ionicons.glyphMap;

  switch (routeName) {
    case "index":
      iconName = "home";
      break;
    case "historique":
      iconName = "list";
      break;
    case "sodec":
      iconName = "paper-plane";
      break;
    case "receivers":
      iconName = "people";
      break;
    case "help":
      iconName = "help-circle";
      break;
    default:
      iconName = "ellipse";
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  // ✅ Liste des pages avec la TabBar
  const showTabBar = ["/", "/historique", "/sodec", "/receivers", "/help"].includes(pathname);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {showTabBar ? (
        <Tabs
          initialRouteName="index"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => TabBarIcon(route.name, color, 36),
            tabBarActiveTintColor: GOLDEN_YELLOW,
            tabBarInactiveTintColor: "gray",
            tabBarStyle: { backgroundColor: "white", height: 60, paddingBottom: 5 },
            headerShown: false,
          })}
        >
          {/* ✅ Pages principales visibles */}
          <Tabs.Screen name="index" options={{ title: "Accueil" }} />
          <Tabs.Screen name="historique" options={{ title: "Historique" }} />
          <Tabs.Screen name="sodec" options={{ title: "GIMAC Pay" }} />
          <Tabs.Screen name="receivers" options={{ title: "Receivers" }} />
          <Tabs.Screen name="help" options={{ title: "Help" }} />

          {/* ❌ Toutes les pages secondaires masquées */}
          <Tabs.Screen name="send" options={{ href: null }} />
          <Tabs.Screen name="send/card" options={{ href: null }} />
          <Tabs.Screen name="send/international" options={{ href: null }} />
          <Tabs.Screen name="send/iban" options={{ href: null }} />

          <Tabs.Screen name="sodec/agency-banking" options={{ href: null }} />
          <Tabs.Screen name="sodec/autres-services" options={{ href: null }} />
          <Tabs.Screen name="sodec/paiement" options={{ href: null }} />
          <Tabs.Screen name="sodec/voucher" options={{ href: null }} />

          <Tabs.Screen name="wallet" options={{ href: null }} />
          <Tabs.Screen name="wallet/cameroun" options={{ href: null }} />
          <Tabs.Screen name="wallet/centrafrique" options={{ href: null }} />
          <Tabs.Screen name="wallet/congo" options={{ href: null }} />
          <Tabs.Screen name="wallet/gabon" options={{ href: null }} />
          <Tabs.Screen name="wallet/guinee" options={{ href: null }} />
          <Tabs.Screen name="wallet/tchad" options={{ href: null }} />
          <Tabs.Screen name="wallet/iban-form" options={{ href: null }} />
          <Tabs.Screen name="wallet/mes-ibans" options={{ href: null }} />
          <Tabs.Screen name="wallet/mes-wallets" options={{ href: null }} />
          <Tabs.Screen name="wallet/wallet-intermediaire" options={{ href: null }} />
          <Tabs.Screen name="wallet/wallet-to-iban" options={{ href: null }} />

          <Tabs.Screen name="agency/agency-banking" options={{ href: null }} />
          <Tabs.Screen name="agency/agency-confirmation" options={{ href: null }} />
          <Tabs.Screen name="agency/agency-depot" options={{ href: null }} />
          <Tabs.Screen name="agency/agency-error" options={{ href: null }} />
          <Tabs.Screen name="agency/agency-success" options={{ href: null }} />

          {/* 🔒 Par sécurité */}
          <Tabs.Screen name="(tabs)" options={{ href: null }} />
          <Tabs.Screen name="+not-found" options={{ href: null }} />
        </Tabs>
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          {/* 🔄 Stack navigation pour les pages secondaires */}
          <Stack.Screen name="send" />
          <Stack.Screen name="wallet" />
          <Stack.Screen name="wallet/cameroun" />
          <Stack.Screen name="wallet/centrafrique" />
          <Stack.Screen name="wallet/congo" />
          <Stack.Screen name="wallet/gabon" />
          <Stack.Screen name="wallet/guinee" />
          <Stack.Screen name="wallet/tchad" />
          <Stack.Screen name="wallet/mes-ibans" />
          <Stack.Screen name="wallet/mes-wallets" />
          <Stack.Screen name="wallet/wallet-to-iban" />
          <Stack.Screen name="wallet/wallet-intermediaire" />
          <Stack.Screen name="wallet/iban-form" />
          <Stack.Screen name="sodec/paiement" />
          <Stack.Screen name="sodec/agency-banking" />
          <Stack.Screen name="sodec/voucher" />
          <Stack.Screen name="sodec/autres-services" />
        </Stack>
      )}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}