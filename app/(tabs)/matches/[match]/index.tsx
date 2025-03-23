import { SafeAreaViewBackground } from "@/components";
import { cn, hapticImpact } from "@/shared/libs";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
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

const Match = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"events" | "composition">(
    "events",
  );

  return (
    <SafeAreaViewBackground>
      <ScrollView
        style={{
          height: height - 340,
        }}
      >
        <View className="container">
          <View className="relative h-[206px] overflow-hidden rounded-[12px]">
            <View className="absolute left-0 top-0 h-full w-full">
              <Image
                contentFit="cover"
                source={require("../../../../assets/images/match.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <BlurView
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                intensity={10}
                tint="dark"
              ></BlurView>
            </View>
            <View className="p-[16px]">
              <View className="flex flex-row items-center justify-between gap-x-[4px]">
                <View className="overflow-hidden rounded-[16px]">
                  <BlurView
                    intensity={25}
                    tint="dark"
                    style={{
                      paddingHorizontal: 12,
                      height: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text className="font-Inter_700Bold text-[14px] font-bold leading-[17px] text-white">
                      Лига В
                    </Text>
                  </BlurView>
                </View>
                <View className="overflow-hidden rounded-[16px]">
                  <BlurView
                    intensity={25}
                    tint="dark"
                    style={{
                      paddingHorizontal: 12,
                      height: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text className="font-Inter_700Bold text-[14px] font-bold leading-[17px] text-white">
                      Предстоящий
                    </Text>
                  </BlurView>
                </View>
                <View className="overflow-hidden rounded-[16px]">
                  <BlurView
                    intensity={25}
                    tint="dark"
                    style={{
                      paddingHorizontal: 12,
                      height: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      gap: 4,
                    }}
                  >
                    <Image
                      contentFit="contain"
                      source={require("../../../../assets/images/youtube.png")}
                      style={{
                        width: 12,
                        height: 8,
                      }}
                    />
                    <Text className="font-Inter_700Bold text-[14px] font-bold leading-[17px] text-white">
                      18 янв, 9:10
                    </Text>
                  </BlurView>
                </View>
              </View>
              <View className="mt-[16px] flex flex-row items-center rounded-[8px] p-[12px]">
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../../assets/images/article.png")}
                      contentFit="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[16px] font-semibold leading-[22px] text-white">
                    Sauran 28
                  </Text>
                </View>
                <View className="flex w-[40%] flex-col items-center justify-center">
                  <View className="flex flex-row items-center gap-x-[12px]">
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white">
                      0
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white">
                      :
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white">
                      0
                    </Text>
                  </View>
                </View>
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../../assets/images/article.png")}
                      contentFit="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[16px] font-semibold leading-[22px] text-white">
                    FC RaYYAN
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="mt-[24px] flex flex-row items-center">
          <TouchableOpacity
            className="w-2/4"
            onPress={() => {
              hapticImpact();
              setActiveTab("events");
            }}
          >
            <Text
              className={cn(
                "border-b p-[12px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-none",
                {
                  ["border-b-[#09537B] text-[#09537B]"]: activeTab === "events",
                  ["border-b-white/60 text-white/60"]: activeTab !== "events",
                },
              )}
            >
              События
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-2/4"
            onPress={() => {
              hapticImpact();
              setActiveTab("composition");
            }}
          >
            <Text
              className={cn(
                "border-b p-[12px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-none",
                {
                  ["border-b-[#09537B] text-[#09537B]"]:
                    activeTab === "composition",
                  ["border-b-white/60 text-white/60"]:
                    activeTab !== "composition",
                },
              )}
            >
              Состав
            </Text>
          </TouchableOpacity>
        </View>
        {activeTab === "events" && (
          <View className="container mt-[24px]">
            <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
              Информация о матче
            </Text>
            <View className="mt-[16px] flex flex-row items-center justify-between rounded-[22px] bg-[#0D1318] px-[16px] py-[8px]">
              <View className="flex flex-row items-center gap-x-[6px]">
                <View className="size-[24px] overflow-hidden rounded-full">
                  <Image
                    source={require("../../../../assets/images/match.png")}
                    contentFit="cover"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                  Стадион
                </Text>
              </View>
              <Text className="font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                СК Алатау
              </Text>
            </View>
          </View>
        )}
        {activeTab === "composition" && (
          <View className="container mt-[24px]">
            <View className="relative mt-[16px] w-full overflow-hidden rounded-[8px] bg-[#131B21]">
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
              </View>
            </View>
          </View>
        )}
      </ScrollView>
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
