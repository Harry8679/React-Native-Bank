import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "index": iconName = "home"; break;
            case "historique": iconName = "list"; break;
            case "sodec": iconName = "paper-plane"; break; // ✅ Bien garder sodec ici
            case "receivers": iconName = "people"; break;
            case "help": iconName = "help-circle"; break;
            default: iconName = "ellipse";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FFC107",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white", height: 60, paddingBottom: 5 },
        headerShown: false,
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="historique" options={{ title: "Historique" }} />
      <Tabs.Screen name="sodec" options={{ title: "GIMAC Pay" }} />   {/* ✅ Ton GIMAC Pay */}
      <Tabs.Screen name="receivers" options={{ title: "Contacts" }} />
      <Tabs.Screen name="help" options={{ title: "Aide" }} />
    </Tabs>
  );
}