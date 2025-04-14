import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ExploreScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: "#000",
        flex: 1,
        paddingTop: top,
        paddingInline: 16,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontFamily: "Inter_400Regular",
          fontSize: 16,
          lineHeight: 21,
        }}
      >
        Explore
      </Text>
    </View>
  );
};

export default ExploreScreen;
