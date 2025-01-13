import { Container } from "@/shared/ui-kit";
import { ErrorBoundaryProps } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const BaseErrorBoundary = ({ error, retry }: ErrorBoundaryProps) => {
  return (
    <SafeAreaView>
      <Container className="flex-auto flex justify-center items-center flex-col h-full">
        <Text className="underline">{error.message}</Text>
        <TouchableOpacity
          className="underline inline-block mt-[12px] bg-black py-[8px] px-[16px] rounded"
          onPress={retry}
        >
          <Text className="text-white">Try Again?</Text>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  );
};
