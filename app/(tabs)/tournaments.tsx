import { SafeAreaViewBackground } from "@/components";
import { Text, View } from "react-native";

const Tournaments = () => {
  return (
    <SafeAreaViewBackground>
      <View className="container">
        <View>
          <Text className="text-[18px] font-normal leading-[22px] text-white">
            Турниры
          </Text>
        </View>
      </View>
    </SafeAreaViewBackground>
  );
};

export default Tournaments;
