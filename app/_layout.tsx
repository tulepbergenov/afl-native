import { Providers } from "@/app/providers";
import { ErrorBoundaryScreen, LayoutBackgroundImage } from "@/components";
import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { Inter_500Medium } from "@expo-google-fonts/inter/500Medium";
import { Inter_600SemiBold } from "@expo-google-fonts/inter/600SemiBold";
import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";
import { useFonts } from "expo-font";
import { ErrorBoundaryProps, Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Toaster } from "sonner-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const ErrorBoundary = (props: ErrorBoundaryProps) => (
  <ErrorBoundaryScreen {...props} />
);

const RootLayout = () => {
  const [loaded] = useFonts({
    Inter_700Bold,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_400Regular,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Providers>
      <LayoutBackgroundImage>
        <Slot />
        <Toaster theme="light" />
      </LayoutBackgroundImage>
      <StatusBar style="light" />
    </Providers>
  );
};

export default RootLayout;
