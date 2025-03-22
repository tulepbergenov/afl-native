import { SafeAreaViewBackground } from "@/components";
import { Image } from "expo-image";
import { Text, View } from "react-native";

const MatchArticle = () => {
  return (
    <SafeAreaViewBackground>
      <View className="container">
        <View>
          <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white">
            Кубок AFL 2024 (футзал)
          </Text>
          <Text className="mt-[8px] font-Inter_600SemiBold text-[14px] font-semibold leading-[135%] text-white/70">
            12.08.2025
          </Text>
          <View className="mt-[32px] h-[268px] w-full overflow-hidden rounded-[8px] bg-[#131B21]">
            <Image
              contentFit="cover"
              source={require("../../../assets/images/article.png")}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
          <View className="my-[32px] flex flex-col gap-y-[16px]">
            <View className="flex flex-col gap-y-[4px]">
              <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                Чемпионы
              </Text>
              <Text className="font-Inter_400Regular text-[18px] font-normal leading-[22px] text-white">
                PTC Holding
              </Text>
            </View>
            <View className="flex flex-col gap-y-[4px]">
              <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                Вицемпионы
              </Text>
              <Text className="font-Inter_400Regular text-[18px] font-normal leading-[22px] text-white">
                Elim-ai
              </Text>
            </View>
            <View className="flex flex-col gap-y-[4px]">
              <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                Лучшие игроки турнира
              </Text>
              <Text className="font-Inter_400Regular text-[18px] font-normal leading-[22px] text-white">
                PTC Holding
              </Text>
            </View>
            <View className="flex flex-col gap-y-[4px]">
              <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                Лучший арбитр
              </Text>
              <Text className="font-Inter_400Regular text-[18px] font-normal leading-[22px] text-white">
                Кравченко Владимир и Каримов Жасулан
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaViewBackground>
  );
};

export default MatchArticle;
