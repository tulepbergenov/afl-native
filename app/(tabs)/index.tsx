import { BaseErrorBoundary } from "@/components/BaseErrorBoundary";
import { Container } from "@/shared/ui-kit";
import { ErrorBoundaryProps } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return <BaseErrorBoundary {...props} />;
};

export default () => {
  return (
    <SafeAreaView>
      <Container>
        <Text>Лента</Text>
      </Container>
    </SafeAreaView>
  );
};
