import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

import { useColorScheme } from "@/hooks/useColorScheme";

// Empêcher l’écran de démarrage de se cacher automatiquement
SplashScreen.preventAutoHideAsync();

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

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={({ route }) => ({
          // tabBarIcon: ({ color, size }) => TabBarIcon(route.name, color, size),
          tabBarIcon: ({ color }) => TabBarIcon(route.name, color, 36),
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "white", height: 60, paddingBottom: 5 },
          headerShown: false,
        })}
      >
        <Tabs.Screen name="index" options={{ title: "Accueil" }} />
        <Tabs.Screen name="historique" options={{ title: "Historique" }} />
        <Tabs.Screen name="sodec" options={{ title: "SODEC Pay" }} />
        {/* <Tabs.Screen name="send" options={{ title: "SODEC Pay" }} /> */}
        {/* <Tabs.Screen name="send" options={{ title: "SODEC Pay" }} /> */}
        <Tabs.Screen name="receivers" options={{ title: "Receivers" }} />
        <Tabs.Screen name="help" options={{ title: "Help" }} />
        {/* Masquer ces écrans pour éviter qu'ils apparaissent dans le menu */}
        <Tabs.Screen name="(tabs)" options={{ href: null }} />
        <Tabs.Screen name="+not-found" options={{ href: null }} />
        <Tabs.Screen name="send" options={{ href: null }} />
        {/* <Tabs.Screen name="sodec" options={{ href: null }} /> */}
      </Tabs>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}