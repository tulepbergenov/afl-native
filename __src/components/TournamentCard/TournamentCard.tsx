import { cn, hapticImpact } from "@/shared/libs";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { HeartIcon } from "react-native-heroicons/outline";
import { StatusLabels } from "./TournamentCard.constant";
import { TournamentCardType } from "./TournamentCard.type";

const { width } = Dimensions.get("window");

export const TournamentCard = ({
  data,
  className,
  style,
  ...props
}: TournamentCardType) => {
  const [isFavorites, setIsFavorites] = useState(false);

  const handleToggleFavorites = () => {
    hapticImpact();
    setIsFavorites((prev) => !prev);
  };

  return (
    <View
      style={[{ width: (width - 46) / 2 }, style]}
      className={cn(
        "self-stretch overflow-hidden rounded-[8px] bg-[#131B21]",
        className,
      )}
      {...props}
    >
      <View className="relative h-[164px] overflow-hidden">
        <View className="absolute left-0 top-0 z-[1] h-full w-full bg-[#070707]/15" />
        <Image
          source={require("../../../assets/images/article.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <View className="absolute left-[8px] top-[8px] z-[2] overflow-hidden rounded-[12px]">
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
            <Text className="font-Inter_700Bold text-[10px] font-bold leading-[12px] text-white">
              {StatusLabels[data.status]}
            </Text>
          </BlurView>
        </View>
        <View className="absolute right-[8px] top-[8px] z-[2] overflow-hidden rounded-[12px]">
          <TouchableOpacity onPress={handleToggleFavorites}>
            <BlurView
              intensity={25}
              tint="dark"
              style={{
                height: 28,
                width: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isFavorites && (
                <HeartIcon color={"#fff"} size={20} fill="#fff" />
              )}
              {!isFavorites && <HeartIcon color={"#fff"} size={20} />}
            </BlurView>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-col gap-y-[8px] p-[8px]">
        <Text className="font-Inter_400Regular text-[14px] font-normal leading-[17px] text-[#FFFFFF]/50">
          {data.date}
        </Text>
        <Text className="font-Inter_600SemiBold- text-[14px] font-semibold leading-[17px] text-white">
          {data.title}
        </Text>
        <Text className="font-Inter_400Regular text-[14px] font-normal leading-[17px] text-[#FFFFFF]/50">
          {data.commandCount}
        </Text>
      </View>
    </View>
  );
};
