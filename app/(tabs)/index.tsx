import {
  MatchesSlider,
  NewsSlider,
  SafeAreaViewBackground,
} from "@/components";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const { width } = Dimensions.get("window");

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaViewBackground>
      <NewsSlider />
      <View className="container mt-[24px]">
        <View className="flex flex-row items-center justify-between">
          <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
            Скоро
          </Text>
          <TouchableOpacity onPress={() => router.push("/matches")}>
            <Text className="font-Inter_600SemiBold text-[16px] font-semibold leading-[19px] text-[#09537B]">
              Все
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-[16px] flex flex-col gap-y-[12px]">
          <View className="rounded-[8px] bg-[#0D1318] p-[8px]">
            <Text className="font-Inter_600SemiBold text-[16px] font-semibold leading-[19px] text-white">
              <Text>19 января </Text>
              <Text className="opacity-50">18:30</Text>
            </Text>
            <View className="mt-[8px] flex flex-col gap-y-[8px]">
              <View className="flex flex-row items-center gap-[6px] rounded-full bg-[#131B21] p-[8px]">
                <View className="size-[24px] overflow-hidden rounded-full">
                  <Image
                    source={require("../../assets/images/article.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Sauran
                </Text>
              </View>
              <View className="flex flex-row items-center gap-[6px] rounded-full bg-[#131B21] p-[8px]">
                <View className="size-[24px] overflow-hidden rounded-full">
                  <Image
                    source={require("../../assets/images/article.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  FC RaYYAN
                </Text>
              </View>
            </View>
          </View>
          <View className="rounded-[8px] bg-[#0D1318] p-[8px]">
            <Text className="font-Inter_600SemiBold text-[16px] font-semibold leading-[19px] text-white">
              <Text>19 января </Text>
              <Text className="opacity-50">18:30</Text>
            </Text>
            <View className="mt-[8px] flex flex-col gap-y-[8px]">
              <View className="flex flex-row items-center gap-[6px] rounded-full bg-[#131B21] p-[8px]">
                <View className="size-[24px] overflow-hidden rounded-full">
                  <Image
                    source={require("../../assets/images/article.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Sauran
                </Text>
              </View>
              <View className="flex flex-row items-center gap-[6px] rounded-full bg-[#131B21] p-[8px]">
                <View className="size-[24px] overflow-hidden rounded-full">
                  <Image
                    source={require("../../assets/images/article.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  FC RaYYAN
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <MatchesSlider className="mt-[24px]" />
      <View className="container mt-[24px]">
        <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
          Новости
        </Text>
        <View className="mt-[16px] flex w-full flex-row items-center gap-[8px]">
          <View className="relative flex-1 overflow-hidden rounded-[8px] bg-[#131B21]">
            <MagnifyingGlassIcon
              size={24}
              color="#fff"
              style={{
                position: "absolute",
                top: 8,
                left: 8,
              }}
            />
            <TextInput
              placeholder="Поиск по тексту"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              className="h-[40px] pl-[36px] pr-[8px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
            />
          </View>
          <TouchableOpacity>
            <View className="flex size-[40px] items-center justify-center rounded-[8px] bg-[#131B21]">
              <Bars3BottomLeftIcon size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-[16px] flex flex-row flex-wrap items-start gap-[12px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <View
              key={index}
              style={{ width: (width - 46) / 2 }}
              className="overflow-hidden rounded-[8px] bg-[#0D1318]"
            >
              <TouchableOpacity>
                <View className="h-[81px] w-full overflow-hidden">
                  <Image
                    source={require("../../assets/images/article.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <View className="p-[8px]">
                  <Text className="font-Inter_400Regular text-[14px] font-normal leading-[17px] text-white/50">
                    12.08.2025
                  </Text>
                  <Text className="mt-[8px] font-Inter_600SemiBold text-[14px] font-semibold uppercase leading-[17px] text-white">
                    AMOLIGA-2021 SOCCA MOLDOVA
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaViewBackground>
  );
};

export default Home;
