import { SafeAreaViewBackground } from "@/components";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const { width } = Dimensions.get("window");

const MyCommands = () => {
  const router = useRouter();

  return (
    <SafeAreaViewBackground>
      <View className="container">
        <View>
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
          <View className="mt-[16px] flex flex-col gap-y-[8px] rounded-[8px] bg-[#0D1318] p-[8px]">
            <View className="flex flex-row items-center rounded-full bg-[#131B21] px-[16px] py-[8px]">
              <View className="w-[10%]" />
              <Text className="w-[45%] font-Inter_400Regular text-[12px] font-normal leading-[16px] text-white">
                Команда
              </Text>
              <Text className="w-[22%] font-Inter_400Regular text-[12px] font-normal leading-[16px] text-white">
                В : П
              </Text>
              <Text className="w-[25%] text-center font-Inter_400Regular text-[12px] font-normal leading-[16px] text-white">
                %
              </Text>
            </View>
            <View className="flex flex-row items-center gap-x-[4px] py-[8px]">
              <Text className="w-[10%] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                1
              </Text>
              <View className="flex w-[32%] flex-row items-center gap-[6px]">
                <View className="size-[24px] overflow-hidden rounded-full">
                  <Image
                    source={require("../../assets/images/article.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                  AFC meteor
                </Text>
              </View>
              <Text className="w-[28%] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                10 : 5
              </Text>
              <Text className="w-[25%] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                .667
              </Text>
            </View>
            <View className="flex flex-row items-center gap-x-[4px] py-[8px]">
              <Text className="w-[10%] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                2
              </Text>
              <View className="flex w-[32%] flex-row items-center gap-[6px]">
                <View className="size-[24px] overflow-hidden rounded-full">
                  <Image
                    source={require("../../assets/images/article.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                  AFC meteor
                </Text>
              </View>
              <Text className="w-[28%] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                10 : 5
              </Text>
              <Text className="w-[25%] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                .667
              </Text>
            </View>
            <View className="flex flex-row items-center gap-x-[4px] py-[8px]">
              <Text className="w-[10%] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                3
              </Text>
              <View className="flex w-[32%] flex-row items-center gap-[6px]">
                <View className="size-[24px] overflow-hidden rounded-full">
                  <Image
                    source={require("../../assets/images/article.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                  AFC meteor
                </Text>
              </View>
              <Text className="w-[28%] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                10 : 5
              </Text>
              <Text className="w-[25%] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                .667
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 8,
          left: 16,
          width: width - 32,
        }}
        onPress={() => router.push("/create-command")}
      >
        <Text className="rounded-[8px] bg-[#09537B] p-[12px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[135%] text-white">
          Создать новую команду
        </Text>
      </TouchableOpacity>
    </SafeAreaViewBackground>
  );
};

export default MyCommands;
