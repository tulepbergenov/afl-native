import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";

const { width } = Dimensions.get("window");

const MATCH_SLIDER_DATA: {
  teamLeftName: string;
  teamRightName: string;
  teamLeftGoals: number;
  teamRightGoals: number;
  maxGoals: number;
}[] = [
  {
    teamLeftName: "MIKO",
    teamRightName: "TURAR",
    teamLeftGoals: 2,
    teamRightGoals: 1,
    maxGoals: 10,
  },
  {
    teamLeftName: "MIKO",
    teamRightName: "TURAR",
    teamLeftGoals: 2,
    teamRightGoals: 1,
    maxGoals: 10,
  },
  {
    teamLeftName: "MIKO",
    teamRightName: "TURAR",
    teamLeftGoals: 2,
    teamRightGoals: 1,
    maxGoals: 10,
  },
];

export const MatchesSlider = (props: ViewProps) => {
  return (
    <View {...props}>
      <View className="container">
        <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
          Сейчас
        </Text>
      </View>
      <FlatList
        pagingEnabled
        data={MATCH_SLIDER_DATA}
        renderItem={({ item, index }) => (
          <MatchItem item={item} index={index} key={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        className="mt-[16px]"
      />
    </View>
  );
};

const MatchItem = ({
  item,
  index,
}: {
  item: {
    teamLeftName: string;
    teamRightName: string;
    teamLeftGoals: number;
    teamRightGoals: number;
    maxGoals: number;
  };
  index: number;
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push("/(tabs)/matches")}>
      <View
        style={{
          width: width - 80,
          marginLeft: index === 0 ? 16 : 12,
        }}
        className="flex min-h-[190px] overflow-hidden rounded-[10px] bg-[#0D1318]"
      >
        <View className="relative">
          <View className="h-[119px] w-full">
            <Image
              contentFit="cover"
              source={require("../../assets/images/match.png")}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
        </View>
        <View className="flex flex-row items-center justify-between p-[8px]">
          <View className="flex w-[40%] flex-col items-center">
            <View className="size-[26px] overflow-hidden rounded-full">
              <Image
                source={require("../../assets/images/article.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <Text className="mt-[6px] font-Inter_600SemiBold text-[16px] font-semibold leading-[19px] text-white">
              {item.teamLeftName}
            </Text>
          </View>
          <View className="flex w-[20%] flex-col items-center justify-center gap-y-[4px]">
            <Text className="font-Inter_400Regular text-[20px] font-normal leading-[24px] text-[#09537B]">
              {item.teamLeftGoals}:{item.teamRightGoals}
            </Text>
            <Text className="font-Inter_400Regular text-[20px] font-normal leading-[24px] text-[#09537B]">
              {item.maxGoals}
            </Text>
          </View>
          <View className="flex w-[40%] flex-col items-center">
            <View className="size-[26px] overflow-hidden rounded-full">
              <Image
                source={require("../../assets/images/article.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <Text className="mt-[6px] font-Inter_600SemiBold text-[16px] font-semibold leading-[19px] text-white">
              {item.teamRightName}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
