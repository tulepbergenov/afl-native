import { Heading } from "@/components";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaView>
      <View>
        <Heading>Home</Heading>
      </View>
    </SafeAreaView>
  );
};
