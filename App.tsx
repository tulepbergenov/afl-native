import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: "red",
          fontWeight: 700,
          textDecorationLine: "underline",
        }}
      >
        AFL Native
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
