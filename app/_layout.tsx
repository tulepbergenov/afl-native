import { BaseErrorBoundary } from "@/components";
import "@/shared/styles/index.css";
import { Inter_500Medium, useFonts } from "@expo-google-fonts/inter";
import { ErrorBoundaryProps } from "expo-router";
import { Stack } from "expo-router/stack";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return <BaseErrorBoundary {...props} />;
};

export default () => {
  const [loaded, error] = useFonts({
    Inter_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <StatusBar style="dark" />
    </Stack>
  );
};
