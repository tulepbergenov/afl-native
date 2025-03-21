import { SafeAreaViewBackground } from "@/components";
import { Text, View } from "react-native";

const Matches = () => {
  return (
    <SafeAreaViewBackground>
      <View className="container">
        <View>
          <Text className="text-[18px] font-normal leading-[22px] text-white">
            Матчи
          </Text>
        </View>
      </View>
    </SafeAreaViewBackground>
  );
};

export default Matches;
