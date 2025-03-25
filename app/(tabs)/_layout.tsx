import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

// Import des écrans
import HomeScreen from "./index";
import TransfersScreen from "../historique";
import SendScreen from "../send/send";
import ReceiversScreen from "../receivers";
import HelpScreen from "../help";

// Création du Navigator
const Tab = createBottomTabNavigator();

// Composant TabBarIcon séparé pour éviter les erreurs de type
const TabBarIcon = (routeName: string, color: string, size: number) => {
  let iconName: keyof typeof Ionicons.glyphMap; // Assure la compatibilité des icônes
  
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
      iconName = "ellipse"; // Icône par défaut en cas d'erreur
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default function Layout() {
  return (
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
  );
}