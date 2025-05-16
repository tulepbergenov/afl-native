import { BaseImpactFeedbackStyle } from "@/shared/libs";
import { ErrorBoundaryProps, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Container } from "../ui";

export const ErrorBoundaryScreen = ({ error }: ErrorBoundaryProps) => {
  const { top, bottom } = useSafeAreaInsets();

  const router = useRouter();

  const handleGoBack = () => {
    BaseImpactFeedbackStyle();

    router.replace("/");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      <Container style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Inter_700Bold",
              fontSize: 16,
              lineHeight: 21,
            }}
          >
            {error.message}
          </Text>
          <Text
            onPress={handleGoBack}
            style={{
              color: "#fff",
              marginTop: 16,
              textDecorationLine: "underline",
              fontFamily: "Inter_400Regular",
              fontSize: 16,
              lineHeight: 21,
            }}
          >
            Вернуться на главную?
          </Text>
        </View>
      </Container>
    </View>
  );
};
