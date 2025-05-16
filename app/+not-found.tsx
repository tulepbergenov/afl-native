import { Link } from "expo-router";
import { View } from "react-native";

const NotFoundScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        href="/"
        style={{
          color: "#fff",
        }}
      >
        Go to home screen!
      </Link>
    </View>
  );
};

export default NotFoundScreen;
