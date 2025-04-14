import { ErrorBoundaryScreen } from "@/components";
import { ErrorBoundaryProps, Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ErrorBoundary = (props: ErrorBoundaryProps) => (
  <ErrorBoundaryScreen {...props} />
);

const ExploreScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          backgroundColor: "#000",
          flex: 1,
          paddingTop: top,
          paddingInline: 16,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Inter_400Regular",
            fontSize: 16,
            lineHeight: 21,
          }}
        >
          Explore
        </Text>
        <Link
          href="/"
          style={{
            color: "#fff",
            fontFamily: "Inter_400Regular",
            fontSize: 16,
            lineHeight: 21,
          }}
        >
          Home
        </Link>
      </View>
    </>
  );
};

export default ExploreScreen;
