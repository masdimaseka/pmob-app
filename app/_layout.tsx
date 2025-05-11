import { FIREBASE_AUTH } from "@/firebase.config";
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const subscriber = FIREBASE_AUTH.onAuthStateChanged((currentUser) => {
      console.log("Auth State Changed: ", currentUser);
      setUser(currentUser);
      setInitializing(false);
    });

    return subscriber;
  }, []);

  useEffect(() => {
    if (initializing) return;

    const isAuthGroup = segments[0] === "(auth)";
    console.log("Segments:", segments);
    console.log("User:", user);

    if (user && !isAuthGroup) {
      console.log("Navigating to (tabs)/index");
      router.replace("/(auth)/(tabs)/(home)");
    } else if (!user && isAuthGroup) {
      console.log("Navigating to (auth)/login");
      router.replace("/login");
    }
  }, [initializing, user, segments, router]);

  useEffect(() => {
    const prepare = async () => {
      if (!initializing) {
        console.log("Hiding Splash Screen");
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [initializing]);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
