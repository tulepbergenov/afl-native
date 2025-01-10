import { BaseErrorBoundary } from "@/components/BaseErrorBoundary";
import { ErrorBoundaryProps } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return <BaseErrorBoundary {...props} />;
};

export default () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Игры</Text>
      </View>
    </SafeAreaView>
  );
};
