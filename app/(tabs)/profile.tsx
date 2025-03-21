import { SafeAreaViewBackground } from "@/components";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowRightStartOnRectangleIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  GlobeAsiaAustraliaIcon,
  HandRaisedIcon,
  HeartIcon,
  UsersIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";

const { width } = Dimensions.get("window");

const Profile = () => {
  const router = useRouter();

  return (
    <SafeAreaViewBackground>
      <View className="container">
        <View className="flex flex-col items-center justify-center gap-y-[8px]">
          <View className="size-[124px] overflow-hidden rounded-full">
            <Image
              contentFit="cover"
              style={{
                width: "100%",
                height: "100%",
              }}
              source={require("../../assets/images/avatar.png")}
            />
          </View>
          <Text className="text-center font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white">
            Alibek Alibek
          </Text>
          <Text className="text-center font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white/50">
            Всем привет! Я обожаю играть в футбол
          </Text>
        </View>
        <View className="mt-[24px] flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-x-[8px]">
            <TouchableOpacity className="flex size-[36px] items-center justify-center rounded-full bg-[#0D1318]">
              <HeartIcon color="#fff" size={24} />
            </TouchableOpacity>
            <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
              Избранные турниры
            </Text>
          </View>
          <TouchableOpacity
            className="flex size-[36px] items-center justify-center"
            onPress={() => router.push("/tournaments-favorites")}
          >
            <ChevronRightIcon color="#fff" size={24} />
          </TouchableOpacity>
        </View>
        <View className="mt-[24px] flex flex-row items-center justify-between">
          <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
            Заявки
          </Text>
          <TouchableOpacity>
            <Text className="rounded-[8px] bg-[#09537B] px-[12px] py-[8px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[135%] text-white">
              Создать заявку
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-[20px] rounded-[8px] bg-[#0D1318] px-[8px] py-[12px]">
          <View className="flex flex-row items-center justify-between">
            <Text className="font-Inter_600SemiBold text-[16px] font-semibold leading-[19px] text-white/80">
              Чемпионат 2025
            </Text>
            <Text className="font-Inter_600SemiBold text-[16px] font-semibold leading-[19px] text-white/50">
              19 янв, 18:30
            </Text>
          </View>
          <View className="mt-[8px]">
            <View>
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
                  AFC meteor
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mt-[24px]">
          <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
            Статистика
          </Text>
          <View className="mt-[16px] flex flex-row flex-wrap gap-[16px]">
            <View
              className="rounded-[8px] bg-[#0D1318] p-[8px]"
              style={{
                width: width / 2 - 24,
              }}
            >
              <Text className="font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                Матчей сыграно
              </Text>
              <View className="mt-[8px] flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[32px] items-center justify-center rounded-full bg-[#2B2EEB]">
                  <CheckCircleIcon color={"#fff"} size={24} />
                </View>
                <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white">
                  5
                </Text>
              </View>
            </View>
            <View
              className="rounded-[8px] bg-[#0D1318] p-[8px]"
              style={{
                width: width / 2 - 24,
              }}
            >
              <Text className="font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                Голов забито
              </Text>
              <View className="mt-[8px] flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[32px] items-center justify-center rounded-full bg-[#00951B]">
                  <GlobeAsiaAustraliaIcon color={"#fff"} size={24} />
                </View>
                <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white">
                  5
                </Text>
              </View>
            </View>
            <View
              className="rounded-[8px] bg-[#0D1318] p-[8px]"
              style={{
                width: width / 2 - 24,
              }}
            >
              <Text className="font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                Желтых карточек
              </Text>
              <View className="mt-[8px] flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[32px] items-center justify-center rounded-full bg-[#F1B400]">
                  <HandRaisedIcon color={"#fff"} size={24} />
                </View>
                <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white">
                  5
                </Text>
              </View>
            </View>
            <View
              className="rounded-[8px] bg-[#0D1318] p-[8px]"
              style={{
                width: width / 2 - 24,
              }}
            >
              <Text className="font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
                Красных карточек
              </Text>
              <View className="mt-[8px] flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[32px] items-center justify-center rounded-full bg-[#E01009]">
                  <XCircleIcon color={"#fff"} size={24} />
                </View>
                <Text className="font-Inter_600SemiBold text-[28px] font-semibold leading-[34px] text-white">
                  10
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mt-[24px]">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-x-[8px]">
              <View className="flex size-[36px] items-center justify-center rounded-full bg-[#0D1318]">
                <UsersIcon size={24} color={"#fff"} />
              </View>
              <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                Мои команды
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/my-commands")}
              className="flex size-[36px] items-center justify-center"
            >
              <ChevronRightIcon size={24} color={"#fff"} />
            </TouchableOpacity>
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
        <TouchableOpacity className="my-[24px] flex flex-row items-center gap-x-[4px]">
          <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
            Выйти
          </Text>
          <ArrowRightStartOnRectangleIcon size={24} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </SafeAreaViewBackground>
  );
};

export default Profile;
