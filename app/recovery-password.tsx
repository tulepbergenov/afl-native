import { HeaderBar } from "@/components";
import { HEADER_HEIGHT } from "@/shared/constants";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RecoveryPasswordScreen = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <>
      <HeaderBar title="Забыли пароль" />
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
        ></ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default RecoveryPasswordScreen;
