import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#435ccc",
        tabBarInactiveTintColor: "lightgray",
        headerShown: false,
        tabBarStyle: {
          height: 96,
          paddingTop: 16,
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
        },
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto size={size} name="home" color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />

      <Tabs.Screen
        name="project/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book" size={size} color={color} />
          ),
          tabBarLabel: "Projects",
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
