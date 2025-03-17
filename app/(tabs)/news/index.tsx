import { SafeAreaViewBackground } from "@/components";
import { Text, View } from "react-native";

const News = () => {
  return (
    <SafeAreaViewBackground>
      <View className="container">
        <View>
          <Text className="text-[18px] font-normal leading-[22px] text-white">
            Новости
          </Text>
        </View>
      </View>
    </SafeAreaViewBackground>
  );
};

export default News;
