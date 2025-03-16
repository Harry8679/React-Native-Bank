import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { Stack, usePathname } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";

// Empêcher l’écran de démarrage de se cacher automatiquement
SplashScreen.preventAutoHideAsync();

// 🎨 **Définition des nouvelles couleurs**
const GOLDEN_YELLOW = "#FFC107";  // Jaune doré (remplace le violet)
const LOGO_GREEN = "#2E7D32";      // Vert du logo

// Fonction pour le rendu des icônes dans le menu
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
  const pathname = usePathname(); // 🔥 Permet de vérifier la page actuelle
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // 🔥 Liste des pages qui doivent afficher le menu
  const showTabBar = ["/", "/historique", "/sodec", "/receivers", "/help"].includes(pathname);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {showTabBar ? (
        <Tabs
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => TabBarIcon(route.name, color, 36),
            tabBarActiveTintColor: GOLDEN_YELLOW,  // 🟡 **Actif en Jaune Doré**
            tabBarInactiveTintColor: "gray",
            tabBarStyle: { backgroundColor: "white", height: 60, paddingBottom: 5 },
            headerShown: false,
          })}
        >
          {/* ✅ Affichage du menu */}
          <Tabs.Screen name="index" options={{ title: "Accueil" }} />
          <Tabs.Screen name="historique" options={{ title: "Historique" }} />
          <Tabs.Screen name="sodec" options={{ title: "SODEC Pay" }} />
          <Tabs.Screen name="receivers" options={{ title: "Receivers" }} />
          <Tabs.Screen name="help" options={{ title: "Help" }} />

          <Tabs.Screen name="(tabs)" options={{ href: null }} />
          <Tabs.Screen name="+not-found" options={{ href: null }} />
          <Tabs.Screen name="send" options={{ href: null }} />
          <Tabs.Screen name="sodec/paiement" options={{ href: null }} />
          <Tabs.Screen name="sodec/agency-banking" options={{ href: null }} />
          <Tabs.Screen name="sodec/voucher" options={{ href: null }} />
          <Tabs.Screen name="sodec/autres-services" options={{ href: null }} />
          <Tabs.Screen name="wallet" options={{ href: null }} />  {/* ✅ Masquer Wallet */}
        </Tabs>
      ) : (
        <Stack> {/* ❌ Pas de menu ici */}
          <Stack.Screen name="wallet" />
          <Stack.Screen name="wallet/cameroun" />
          <Stack.Screen name="wallet/centrafrique" />
          <Stack.Screen name="wallet/congo" />
          <Stack.Screen name="wallet/gabon" />
          <Stack.Screen name="wallet/guinee" />
          <Stack.Screen name="wallet/tchad" />
          <Stack.Screen name="send" />
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