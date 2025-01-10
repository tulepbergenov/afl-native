import { ErrorBoundaryProps } from "expo-router";
import { Text, View } from "react-native";

export const ErrorBoundary = ({ error, retry }: ErrorBoundaryProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>{error.message}</Text>
      <Text onPress={retry}>Try Again?</Text>
    </View>
  );
};

export default () => {
  return (
    <View>
      <Text>Page Not Found</Text>
    </View>
  );
};
