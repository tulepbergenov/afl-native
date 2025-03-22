import { SafeAreaViewBackground } from "@/components";
import { cn, hapticImpact } from "@/shared/libs";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const Matches = () => {
  const [activeTab, setActiveTab] = useState<"results" | "calendar">("results");
  const router = useRouter();

  return (
    <SafeAreaViewBackground>
      <View className="flex flex-row items-center">
        <TouchableOpacity
          className="w-2/4"
          onPress={() => {
            hapticImpact();
            setActiveTab("results");
          }}
        >
          <Text
            className={cn(
              "border-b p-[12px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-none",
              {
                ["border-b-[#09537B] text-[#09537B]"]: activeTab === "results",
                ["border-b-white text-white"]: activeTab !== "results",
              },
            )}
          >
            Результаты
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-2/4"
          onPress={() => {
            hapticImpact();
            setActiveTab("calendar");
          }}
        >
          <Text
            className={cn(
              "border-b p-[12px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-none",
              {
                ["border-b-[#09537B] text-[#09537B]"]: activeTab === "calendar",
                ["border-b-white/60 text-white/60"]: activeTab !== "calendar",
              },
            )}
          >
            Календарь
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === "results" && (
        <View className="container mt-[20px]">
          <View className="relative w-full overflow-hidden rounded-[8px] bg-[#131B21]">
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
          <View className="mt-[20px]">
            <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-none text-white">
              Тур 3
            </Text>
            <View className="mt-[16px] flex flex-col gap-y-[16px]">
              <View className="flex flex-row items-center rounded-[8px] bg-[#131B21] p-[12px]">
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    Sauran 28
                  </Text>
                </View>
                <View className="flex w-[40%] flex-col items-center justify-center">
                  <View className="flex flex-row items-center gap-x-[12px]">
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      1
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      :
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-[#09537B]">
                      4
                    </Text>
                  </View>
                  <Text className="mt-[16px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                    Final
                  </Text>
                </View>
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    FC RaYYAN
                  </Text>
                </View>
              </View>
              <View className="flex flex-row items-center rounded-[8px] bg-[#131B21] p-[12px]">
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    Sauran 28
                  </Text>
                </View>
                <View className="flex w-[40%] flex-col items-center justify-center">
                  <View className="flex flex-row items-center gap-x-[12px]">
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      1
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      :
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-[#09537B]">
                      4
                    </Text>
                  </View>
                  <Text className="mt-[16px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                    Final
                  </Text>
                </View>
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    FC RaYYAN
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="mt-[20px]">
            <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-none text-white">
              Тур 2
            </Text>
            <View className="mt-[16px] flex flex-col gap-y-[16px]">
              <View className="flex flex-row items-center rounded-[8px] bg-[#131B21] p-[12px]">
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    Sauran 28
                  </Text>
                </View>
                <View className="flex w-[40%] flex-col items-center justify-center">
                  <View className="flex flex-row items-center gap-x-[12px]">
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      1
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      :
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-[#09537B]">
                      4
                    </Text>
                  </View>
                  <Text className="mt-[16px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                    Final
                  </Text>
                </View>
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    FC RaYYAN
                  </Text>
                </View>
              </View>
              <View className="flex flex-row items-center rounded-[8px] bg-[#131B21] p-[12px]">
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    Sauran 28
                  </Text>
                </View>
                <View className="flex w-[40%] flex-col items-center justify-center">
                  <View className="flex flex-row items-center gap-x-[12px]">
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      1
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      :
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-[#09537B]">
                      4
                    </Text>
                  </View>
                  <Text className="mt-[16px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                    Final
                  </Text>
                </View>
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    FC RaYYAN
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
      {activeTab === "calendar" && (
        <View className="container mt-[20px]">
          <View className="relative w-full overflow-hidden rounded-[8px] bg-[#131B21]">
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
          <View className="mt-[20px]">
            <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-none text-white">
              Тур 4
            </Text>
            <View className="mt-[16px] flex flex-col gap-y-[16px]">
              <View className="flex flex-row items-center rounded-[8px] bg-[#131B21] p-[12px]">
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    Sauran 28
                  </Text>
                </View>
                <View className="flex w-[40%] flex-col items-center justify-center">
                  <TouchableOpacity
                    onPress={() => {
                      router.push("/(tabs)/matches/[match]");
                    }}
                    className="flex flex-row items-center gap-x-[12px]"
                  >
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      0
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      :
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-[#09537B]">
                      0
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    FC RaYYAN
                  </Text>
                </View>
              </View>
              <View className="flex flex-row items-center rounded-[8px] bg-[#131B21] p-[12px]">
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    Sauran 28
                  </Text>
                </View>
                <View className="flex w-[40%] flex-col items-center justify-center">
                  <TouchableOpacity className="flex flex-row items-center gap-x-[12px]">
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      0
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      :
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-[#09537B]">
                      0
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    FC RaYYAN
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="mt-[20px]">
            <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-none text-white">
              Тур 5
            </Text>
            <View className="mt-[16px] flex flex-col gap-y-[16px]">
              <View className="flex flex-row items-center rounded-[8px] bg-[#131B21] p-[12px]">
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    Sauran 28
                  </Text>
                </View>
                <View className="flex w-[40%] flex-col items-center justify-center">
                  <TouchableOpacity className="flex flex-row items-center gap-x-[12px]">
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      0
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      :
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-[#09537B]">
                      0
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    FC RaYYAN
                  </Text>
                </View>
              </View>
              <View className="flex flex-row items-center rounded-[8px] bg-[#131B21] p-[12px]">
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    Sauran 28
                  </Text>
                </View>
                <View className="flex w-[40%] flex-col items-center justify-center">
                  <TouchableOpacity className="flex flex-row items-center gap-x-[12px]">
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      0
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white/40">
                      :
                    </Text>
                    <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-[#09537B]">
                      0
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex w-[30%] flex-col items-center justify-center">
                  <View className="size-[48px] overflow-hidden rounded-full">
                    <Image
                      source={require("../../../assets/images/article.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <Text className="mt-[4px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[19px] text-white">
                    FC RaYYAN
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </SafeAreaViewBackground>
  );
};

export default Matches;
