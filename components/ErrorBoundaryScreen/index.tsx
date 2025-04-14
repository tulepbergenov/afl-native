import { ErrorBoundaryProps } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ErrorBoundaryScreen = ({ error, retry }: ErrorBoundaryProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        paddingTop: top,
        paddingInline: 16,
      }}
    >
      <Text>{error.message}</Text>
      <Text onPress={retry}>Try Again?</Text>
    </View>
  );
};
