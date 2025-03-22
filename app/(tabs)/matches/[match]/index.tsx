import { SafeAreaViewBackground } from "@/components";
import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

const Match = () => {
  const router = useRouter();

  return (
    <SafeAreaViewBackground>
      <View className="container">
        <Text>Match</Text>
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 8,
          left: 16,
          width: width - 32,
        }}
        onPress={() => {
          router.push("/(tabs)/matches/[match]/application");
        }}
      >
        <Text className="rounded-[8px] bg-[#09537B] p-[12px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[135%] text-white">
          Подать заявку
        </Text>
      </TouchableOpacity>
    </SafeAreaViewBackground>
  );
};

export default Match;
