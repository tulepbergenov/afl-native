import { ErrorBoundaryScreen } from "@/components";
import { ErrorBoundaryProps, Link } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ErrorBoundary = (props: ErrorBoundaryProps) => (
  <ErrorBoundaryScreen {...props} />
);

const RecoveryPasswordScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: top }}>
      <Link href="/sign-in">
        <Text>RecoveryPasswordScreen</Text>
      </Link>
    </View>
  );
};

export default RecoveryPasswordScreen;
