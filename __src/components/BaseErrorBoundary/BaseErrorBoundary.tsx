import { ErrorBoundaryProps } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const BaseErrorBoundary = ({ error, retry }: ErrorBoundaryProps) => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>{error.message}</Text>
        <Text onPress={retry}>Try Again?</Text>
      </View>
    </SafeAreaView>
  );
};
