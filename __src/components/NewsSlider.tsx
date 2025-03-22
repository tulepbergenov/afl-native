import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";

const { width } = Dimensions.get("window");

const NEWS_SLIDER_DATA: {
  cover: string;
  title: string;
  subTitles?: { label: string; value: string }[];
}[] = [
  {
    cover: require("../../assets/images/article.png"),
    title: "AMOLIGA-2021 SOCCA MOLDOVA",
    subTitles: [
      {
        label: "Вицечемпионы",
        value: "Молдова",
      },
      {
        label: "Чемпионы",
        value: "Украина",
      },
    ],
  },
  {
    cover: require("../../assets/images/article.png"),
    title: "AMOLIGA-2022 SOCCA MOLDOVA",
    subTitles: [
      {
        label: "Вицечемпионы",
        value: "Молдова",
      },
      {
        label: "Чемпионы",
        value: "Казахстан",
      },
    ],
  },
  {
    cover: require("../../assets/images/article.png"),
    title: "AMOLIGA-2022 SOCCA MOLDOVA",
    subTitles: [
      {
        label: "Вицечемпионы",
        value: "Молдова",
      },
      {
        label: "Чемпионы",
        value: "Казахстан",
      },
    ],
  },
];

export const NewsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    },
  ).current;

  return (
    <View>
      <FlatList
        ref={flatListRef}
        pagingEnabled
        data={NEWS_SLIDER_DATA}
        renderItem={({ item, index }) => (
          <SliderItem key={index} item={item} index={index} />
        )}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <Pagination
        activeIndex={activeIndex}
        totalSlides={NEWS_SLIDER_DATA.length}
      />
    </View>
  );
};

const SliderItem = ({
  item,
  index,
}: {
  item: {
    cover: string;
    title: string;
    subTitles?: { label: string; value: string }[];
  };
  index: number;
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push("/(tabs)/news/match-article")}>
      <View
        style={{
          width: width - 32,
          marginLeft: index === 0 ? 16 : 12,
        }}
        className="relative flex h-[196px] items-center justify-center overflow-hidden rounded-[10px]"
      >
        <View className="absolute inset-0 z-[1] h-full w-full bg-black/40" />
        <Image
          contentFit="cover"
          source={item.cover}
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
              paddingVertical: 5.5,
            }}
          >
            <Text className="font-Inter_600SemiBold text-[14px] font-semibold leading-[17px] text-white">
              {item.title}
            </Text>
          </BlurView>
        </View>
        {item.subTitles?.length && (
          <View className="absolute bottom-[8px] left-[8px] z-[2] flex flex-col items-start gap-y-[4px]">
            {item.subTitles.map((subTitle, i) => (
              <View key={i} className="overflow-hidden rounded-[12px]">
                <BlurView
                  intensity={25}
                  tint="dark"
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 5.5,
                  }}
                >
                  <Text className="text-[14px]leading-[17px] text-white">
                    <Text className="font-Inter_600SemiBold font-semibold">
                      {subTitle.label}:{" "}
                    </Text>
                    <Text className="font-Inter_400Regular font-normal">
                      {subTitle.value}
                    </Text>
                  </Text>
                </BlurView>
              </View>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const Pagination = ({
  activeIndex,
  totalSlides,
}: {
  activeIndex: number;
  totalSlides: number;
}) => {
  return (
    <View className="mt-[12px] flex flex-row justify-center gap-[4px]">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <View
          key={index}
          style={[
            {
              opacity: activeIndex === index ? 1 : 0.5,
            },
          ]}
          className="inline-block size-[8px] rounded-full bg-white"
        />
      ))}
    </View>
  );
};
