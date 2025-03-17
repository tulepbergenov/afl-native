import { SafeAreaViewBackground } from "@/components";
import { Image } from "expo-image";
import { Text, View } from "react-native";

const Article = () => {
  return (
    <SafeAreaViewBackground>
      <View className="container">
        <View>
          <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white">
            AMOLIGA-2021 SOCCA MOLDOVA
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
          <View className="mt-[36px] flex flex-col gap-y-[16px]">
            <Text className="font-Inter_400Regular text-[18px] font-normal leading-[135%] text-white">
              Мир технологий стремительно развивается, предлагая новые решения и
              возможности.
            </Text>
            <Text className="font-Inter_400Regular text-[18px] font-normal leading-[135%] text-white">
              На конференции в Сан-Франциско были представлены новейшие
              разработки в области искусственного интеллекта.
            </Text>
            <Text className="font-Inter_400Regular text-[18px] font-normal leading-[135%] text-white">
              Эксперты прогнозируют значительное влияние этих технологий на
              различные отрасли.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaViewBackground>
  );
};

export default Article;
