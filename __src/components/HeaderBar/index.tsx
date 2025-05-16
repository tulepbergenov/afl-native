import { BaseImpactFeedbackStyle } from "@/shared/libs";
import { useRouter } from "expo-router";
import { ReactNode } from "react";
import { Dimensions, Text, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Container, IconButton } from "../ui";

const { width } = Dimensions.get("window");

export const HeaderBar = ({
  children,
  title,
}:
  | {
      children: ReactNode;
      title?: never;
    }
  | {
      title: string;
      children?: never;
    }) => {
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  const handleGoBack = () => {
    BaseImpactFeedbackStyle();

    router.back();
  };

  return (
    <View
      style={{
        position: "absolute",
        top: top + 8,
        left: 0,
        width,
        zIndex: 10,
      }}
    >
      <Container>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {children}
          {!children && (
            <>
              <IconButton onPress={handleGoBack}>
                <ChevronLeftIcon color="#fff" size={24} />
              </IconButton>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  lineHeight: 16,
                  fontFamily: "Inter_600SemiBold",
                  fontWeight: 600,
                }}
              >
                {title}
              </Text>
              <View style={{ width: 36 }} />
            </>
          )}
        </View>
      </Container>
    </View>
  );
};
