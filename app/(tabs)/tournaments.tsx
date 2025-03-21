import { SafeAreaViewBackground, TournamentCard } from "@/components";
import { cn, hapticImpact } from "@/shared/libs";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import FilterIcon from "../../assets/images/filter.svg";

const YEAR_ITEMS: string[] = ["2023 - Зима", "2022 - Лето", "2021 - Весна"];

const TOURNAMENTS_ITEMS: {
  status: "waiting" | "in_progress" | "finished";
  date: string;
  title: string;
  commandCount: number;
}[] = [
  {
    status: "waiting",
    date: "1 Янв - 28 Фев",
    title: "Весенний чемпионат 2023",
    commandCount: 10,
  },
  {
    status: "in_progress",
    date: "15 Мар - 30 Апр",
    title: "Весенний чемпионат 2023",
    commandCount: 12,
  },
  {
    status: "finished",
    date: "1 Май - 30 Июн",
    title: "Летний кубок 2022",
    commandCount: 8,
  },
  {
    status: "waiting",
    date: "1 Июл - 31 Авг",
    title: "Летний турнир 2023",
    commandCount: 14,
  },
  {
    status: "in_progress",
    date: "1 Сен - 31 Окт",
    title: "Осенний чемпионат 2023",
    commandCount: 16,
  },
  {
    status: "finished",
    date: "1 Ноя - 31 Дек",
    title: "Зимний кубок 2022",
    commandCount: 10,
  },
];

const Tournaments = () => {
  const [activeFilterItem, setActiveFilterItem] = useState("2023 - Зима");

  const router = useRouter();

  return (
    <SafeAreaViewBackground>
      <View className="container">
        <View>
          <View className="flex flex-row items-center gap-x-[8px]">
            <TouchableOpacity
              onPress={() => {
                hapticImpact();
                router.push("/tournaments-filter-modal");
              }}
            >
              <View className="flex size-[36px] items-center justify-center rounded-[8px] bg-[#131B21] text-white">
                <FilterIcon width={24} height={24} />
              </View>
            </TouchableOpacity>
            <FlatList
              pagingEnabled
              data={YEAR_ITEMS}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    hapticImpact();
                    setActiveFilterItem(item);
                  }}
                  key={index}
                  className="mr-[8px]"
                >
                  <View
                    className={cn(
                      "flex min-h-[36px] min-w-[124px] items-center justify-center rounded-[24px] bg-[#131B21] px-[16px]",
                      {
                        ["bg-[#09537B]"]: activeFilterItem === item,
                      },
                    )}
                  >
                    <Text className="text-nowrap font-Inter_600SemiBold text-[14px] font-semibold leading-[135%] text-white">
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View className="mt-[16px] flex flex-row flex-wrap items-start gap-[12px]">
          {TOURNAMENTS_ITEMS.map((item, i) => (
            <TournamentCard key={i} data={item} />
          ))}
        </View>
      </View>
    </SafeAreaViewBackground>
  );
};

export default Tournaments;
