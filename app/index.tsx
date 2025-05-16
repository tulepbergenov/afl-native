import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
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
        Home
      </Text>
      <Link
        href="/sign-in"
        style={{
          color: "#fff",
          fontFamily: "Inter_400Regular",
          fontSize: 16,
          lineHeight: 21,
        }}
      >
        Sign In
      </Link>
      <Link
        href="/news/123"
        style={{
          color: "#fff",
          fontFamily: "Inter_400Regular",
          fontSize: 16,
          lineHeight: 21,
        }}
      >
        News
      </Link>
    </View>
  );
};

export default HomeScreen;
