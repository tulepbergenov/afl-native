import { BaseErrorBoundary, Heading } from "@/components";
import { ErrorBoundaryProps } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return <BaseErrorBoundary {...props} />;
};

export default () => {
  return (
    <SafeAreaView>
      <View>
        <Heading>Settings</Heading>
      </View>
    </SafeAreaView>
  );
};
