import { ErrorBoundaryScreen } from "@/components";
import { ErrorBoundaryProps, Link, Stack } from "expo-router";
import { View } from "react-native";

export const ErrorBoundary = (props: ErrorBoundaryProps) => (
  <ErrorBoundaryScreen {...props} />
);

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#fff",
          }}
        >
          Go to home screen!
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
