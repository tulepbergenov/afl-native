import { SafeAreaViewBackground } from "@/components";
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

const { width, height } = Dimensions.get("window");

const GamerNumber = () => {
  const router = useRouter();

  return (
    <SafeAreaViewBackground>
      <View className="container">
        <View>
          <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
            Введите номера игроков.
          </Text>
          <Text className="mt-[8px] font-Inter_400Regular text-[14px] font-normal leading-[17px] text-white/50">
            Номера не должны повторяться
          </Text>
        </View>
        <ScrollView
          className="mt-[24px]"
          style={{
            height: height - 340,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="mt-[24px] flex flex-col gap-y-[32px]">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../../assets/images/avatar.png")}
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
              <View className="w-[48px] overflow-hidden rounded-[8px] bg-[#131B21]">
                <TextInput
                  placeholder="0"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  className="h-[40px] px-[12px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
                />
              </View>
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../../assets/images/avatar.png")}
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
              <View className="w-[48px] overflow-hidden rounded-[8px] bg-[#131B21]">
                <TextInput
                  placeholder="0"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  className="h-[40px] px-[12px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
                />
              </View>
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../../assets/images/avatar.png")}
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
              <View className="w-[48px] overflow-hidden rounded-[8px] bg-[#131B21]">
                <TextInput
                  placeholder="0"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  className="h-[40px] px-[12px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
                />
              </View>
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../../assets/images/avatar.png")}
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
              <View className="w-[48px] overflow-hidden rounded-[8px] bg-[#131B21]">
                <TextInput
                  placeholder="0"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  className="h-[40px] px-[12px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
                />
              </View>
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../../assets/images/avatar.png")}
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
              <View className="w-[48px] overflow-hidden rounded-[8px] bg-[#131B21]">
                <TextInput
                  placeholder="0"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  className="h-[40px] px-[12px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
                />
              </View>
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../../assets/images/avatar.png")}
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
              <View className="w-[48px] overflow-hidden rounded-[8px] bg-[#131B21]">
                <TextInput
                  placeholder="0"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  className="h-[40px] px-[12px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
                />
              </View>
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../../assets/images/avatar.png")}
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
              <View className="w-[48px] overflow-hidden rounded-[8px] bg-[#131B21]">
                <TextInput
                  placeholder="0"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  className="h-[40px] px-[12px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
                />
              </View>
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../../../../assets/images/avatar.png")}
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
              <View className="w-[48px] overflow-hidden rounded-[8px] bg-[#131B21]">
                <TextInput
                  placeholder="0"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  className="h-[40px] px-[12px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
                />
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

export default GamerNumber;
