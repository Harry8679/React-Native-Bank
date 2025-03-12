import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import { useColorScheme } from "@/hooks/useColorScheme";

// Import des écrans
import HomeScreen from "./index";
import TransfersScreen from "./transfers";
import SendScreen from "./send";
import ReceiversScreen from "./receivers";
import HelpScreen from "./help";

// Empêcher l’écran de démarrage de se cacher automatiquement
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

// Fonction pour le rendu des icônes dans le menu
const TabBarIcon = (routeName: string, color: string, size: number) => {
  let iconName: keyof typeof Ionicons.glyphMap;

  switch (routeName) {
    case "Home":
      iconName = "home";
      break;
    case "Transfers":
      iconName = "list";
      break;
    case "Send":
      iconName = "paper-plane";
      break;
    case "Receivers":
      iconName = "people";
      break;
    case "Help":
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
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => TabBarIcon(route.name, color, size),
            tabBarActiveTintColor: "purple",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: { backgroundColor: "white", height: 60, paddingBottom: 5 },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Transfers" component={TransfersScreen} />
          <Tab.Screen name="Send" component={SendScreen} />
          <Tab.Screen name="Receivers" component={ReceiversScreen} />
          <Tab.Screen name="Help" component={HelpScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}