import { BaseErrorBoundary } from "@/components";
import { ErrorBoundaryProps } from "expo-router";
import { Text, View } from "react-native";

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return <BaseErrorBoundary {...props} />;
};

export default () => {
  return (
    <View>
      <Text>Page Not Found</Text>
    </View>
  );
};
