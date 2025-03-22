import { Checkbox, SafeAreaViewBackground } from "@/components";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";

const { width, height } = Dimensions.get("window");

const Application = () => {
  const router = useRouter();

  return (
    <SafeAreaViewBackground>
      <View className="container">
        <ScrollView
          style={{
            height: height - 260,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex flex-col gap-y-[8px] overflow-hidden rounded-[12px] bg-[#a1cd65] p-[8px]">
            <View className="overflow-hidden rounded-[16px]">
              <BlurView
                intensity={25}
                tint="dark"
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 5.5,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View className="flex flex-row items-center gap-x-[6px]">
                  <View className="size-[24px] overflow-hidden rounded-full">
                    <Image
                      contentFit="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      source={require("../../../../assets/images/match.png")}
                    />
                  </View>
                  <Text className="font-Inter_400Regular text-[14px] font-normal leading-[17px] text-white">
                    Стадион
                  </Text>
                </View>
                <Text className="font-Inter_400Regular text-[14px] font-normal leading-[17px] text-white">
                  СК Алатау
                </Text>
              </BlurView>
            </View>
            <View className="flex flex-row gap-x-[8px]">
              <View className="overflow-hidden rounded-[16px]">
                <BlurView
                  intensity={25}
                  tint="dark"
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 5.5,
                  }}
                >
                  <Text className="font-Inter_400Regular text-[14px] font-normal leading-[17px] text-white">
                    18 янв, 9:10
                  </Text>
                </BlurView>
              </View>
              <View className="overflow-hidden rounded-[16px]">
                <BlurView
                  intensity={25}
                  tint="dark"
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 5.5,
                  }}
                >
                  <Text className="font-Inter_400Regular text-[14px] font-normal leading-[17px] text-white">
                    Лига В
                  </Text>
                </BlurView>
              </View>
            </View>
          </View>
          <View className="relative mt-[24px] w-full overflow-hidden rounded-[8px] bg-[#131B21]">
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
              placeholder="Поиск по имени"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              className="h-[40px] pl-[36px] pr-[8px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
            />
          </View>
          <View className="mt-[24px]">
            <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
              Доступные игроки
            </Text>
            <Text className="mt-[8px] font-Inter_400Regular text-[14px] font-normal leading-[17px] text-white/50">
              Люди, которых вы можете выбрать для этой игры.
            </Text>
          </View>
          <View className="mt-[24px] flex flex-col gap-y-[32px]">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <Checkbox />
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <Checkbox />
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <Checkbox />
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <Checkbox />
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <Checkbox />
            </View>
          </View>
          <View className="mt-[48px]">
            <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
              Временно недоступные игроки
            </Text>
            <Text className="mt-[8px] font-Inter_400Regular text-[14px] font-normal leading-[17px] text-white/50">
              Эти игроки недоступны за нарушение правил.
            </Text>
          </View>
          <View className="mt-[24px] flex flex-col gap-y-[32px]">
            <View className="flex flex-col gap-y-[4px]">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <View className="flex flex-row items-center gap-x-[4px]">
                <Text className="text-[14px] leading-[17px] text-white/50">
                  Удален на 2 игры
                </Text>
                <View className="size-[4px] rounded-full bg-white/50"></View>
                <Text className="text-[14px] leading-[17px] text-white/50">
                  Агрессивное поведение
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-y-[4px]">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <View className="flex flex-row items-center gap-x-[4px]">
                <Text className="text-[14px] leading-[17px] text-white/50">
                  Удален на 2 игры
                </Text>
                <View className="size-[4px] rounded-full bg-white/50"></View>
                <Text className="text-[14px] leading-[17px] text-white/50">
                  Агрессивное поведение
                </Text>
              </View>
            </View>
            <View className="flex flex-col gap-y-[4px]">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <View className="flex flex-row items-center gap-x-[4px]">
                <Text className="text-[14px] leading-[17px] text-white/50">
                  Удален на 2 игры
                </Text>
                <View className="size-[4px] rounded-full bg-white/50"></View>
                <Text className="text-[14px] leading-[17px] text-white/50">
                  Агрессивное поведение
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 8,
          left: 16,
          width: width - 32,
        }}
        onPress={() => {
          router.push("/(tabs)/matches/[match]/[gamerNumber]");
        }}
      >
        <Text className="rounded-[8px] bg-[#09537B] p-[12px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[135%] text-white">
          Сохранить и продолжить
        </Text>
      </TouchableOpacity>
    </SafeAreaViewBackground>
  );
};

export default Application;
