import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Container } from "../ui";

export const FloatFooterButton = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        bottom: bottom,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <Container>
        <Button onPress={onPress}>{label}</Button>
      </Container>
    </View>
  );
};
