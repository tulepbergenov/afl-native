import { FloatFooterButton, HeaderBar } from "@/components";
import { Container } from "@/components/ui";
import { HEADER_HEIGHT } from "@/shared/constants";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <>
      <HeaderBar title="Регистрация" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{
            paddingTop: top + HEADER_HEIGHT,
            paddingBottom: bottom,
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <Container>
            <View
              style={{
                backgroundColor: "red",
              }}
            >
              <Text>Sign Up</Text>
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <FloatFooterButton label="Продолжить" onPress={() => {}} />
    </>
  );
};

export default SignUpScreen;
