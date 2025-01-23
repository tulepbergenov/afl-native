import image_1 from "@/shared/assets/images/1.jpg";
import image_2 from "@/shared/assets/images/2.jpg";
import { Container } from "@/shared/ui-kit";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";

export const SoonTournamentList = () => {
  const [windowSize, setWindowSize] = useState({
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  });

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = Dimensions.get("window");
      setWindowSize({ width, height });
    };

    const subscription = Dimensions.addEventListener("change", handleResize);

    return () => {
      subscription?.remove();
    };
  }, []);
  return (
    <View className="mt-[24px]">
      <Container>
        <View>
          <Text className="text-white">
            Width: {windowSize.width.toFixed(2)} px
          </Text>
          <Text className="text-white">
            Height: {windowSize.height.toFixed(2)} px
          </Text>
        </View>
        <View>
          <View className="flex items-center flex-row justify-between">
            <Text className="text-white font-Inter_500Medium font-medium text-[16px] leading-[19px]">
              Скоро
            </Text>
            <Text className="text-[#477BFF] font-Inter_500Medium font-medium text-[14px] leading-[17px]">
              Все
            </Text>
          </View>
          <View className="flex flex-col gap-y-[8px] mt-[16px]">
            <View className="bg-[#151515] rounded-[12px] p-[8px]">
              <View className="flex items-center flex-row gap-x-[8px]">
                <Text className="text-[#FFFFFF] opacity-80 text-[14px] leading-[17px] font-normal">
                  19 января
                </Text>
                <Text className="font-Inter_500Medium text-white opacity-50 font-medium text-[12px] leading-[14px]">
                  18:30
                </Text>
              </View>
              <View className="mt-[8px] flex flex-col gap-y-[8px]">
                <View className="rounded-[100px] bg-[#1C1B1A] py-[6px] gap-x-[6px] px-[10px] flex items-center flex-row">
                  <View className="size-[22px] overflow-hidden rounded-full">
                    <Image
                      source={image_1}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </View>
                  <Text className="font-Inter_500Medium text-white font-medium text-[12px] leading-[14px]">
                    Sauran
                  </Text>
                </View>
                <View className="rounded-[100px] bg-[#1C1B1A] py-[6px] gap-x-[6px] px-[10px] flex items-center flex-row">
                  <View className="size-[22px] overflow-hidden rounded-full">
                    <Image
                      source={image_2}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </View>
                  <Text className="font-Inter_500Medium text-white font-medium text-[12px] leading-[14px]">
                    FC RaYYAN
                  </Text>
                </View>
              </View>
            </View>
            <View className="bg-[#151515] rounded-[12px] p-[8px]">
              <View className="flex items-center flex-row gap-x-[8px]">
                <Text className="text-[#FFFFFF] opacity-80 text-[14px] leading-[17px] font-normal">
                  19 января
                </Text>
                <Text className="font-Inter_500Medium text-white opacity-50 font-medium text-[12px] leading-[14px]">
                  18:30
                </Text>
              </View>
              <View className="mt-[8px] flex flex-col gap-y-[8px]">
                <View className="rounded-[100px] bg-[#1C1B1A] py-[6px] gap-x-[6px] px-[10px] flex items-center flex-row">
                  <View className="size-[22px] overflow-hidden rounded-full">
                    <Image
                      source={image_1}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </View>
                  <Text className="font-Inter_500Medium text-white font-medium text-[12px] leading-[14px]">
                    Sauran
                  </Text>
                </View>
                <View className="rounded-[100px] bg-[#1C1B1A] py-[6px] gap-x-[6px] px-[10px] flex items-center flex-row">
                  <View className="size-[22px] overflow-hidden rounded-full">
                    <Image
                      source={image_2}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </View>
                  <Text className="font-Inter_500Medium text-white font-medium text-[12px] leading-[14px]">
                    FC RaYYAN
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
};
