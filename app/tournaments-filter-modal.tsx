import { hapticImpact } from "@/shared/libs";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

LocaleConfig.locales["ru"] = {
  monthNames,
  monthNamesShort: [
    "Янв.",
    "Фев.",
    "Мар.",
    "Апр.",
    "Май",
    "Июн.",
    "Июл.",
    "Авг.",
    "Сен.",
    "Окт.",
    "Ноя.",
    "Дек.",
  ],
  dayNames: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ],
  dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
};

LocaleConfig.defaultLocale = "ru";

const { height } = Dimensions.get("window");

const TournamentsFilterModal = () => {
  const [selected, setSelected] = useState<
    "waiting" | "in_progress" | "finished" | null
  >(null);
  const [fadeAnim] = useState(new Animated.Value(0));
  const insets = useSafeAreaInsets();

  const router = useRouter();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleModalClose = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      hapticImpact();

      router.back();
    });
  };

  const handleStatusSelect = (
    status: "waiting" | "in_progress" | "finished",
  ) => {
    setSelected(status);
    hapticImpact();
  };

  return (
    <Pressable onPress={handleModalClose} className="flex-1 justify-end">
      <Animated.View
        className="fixed left-0 top-0 h-full w-full bg-[#0A090B]/60"
        style={{
          opacity: fadeAnim,
        }}
      />
      <Pressable
        style={{
          height: height * 0.86,
        }}
        className="container rounded-t-2xl bg-[#0D1318] px-4 pt-4"
        onPress={() => {}}
      >
        <ScrollView>
          <View className="flex flex-row items-center justify-between py-[8px]">
            <View className="w-[36px]" />
            <Text className="font-Inter_600SemiBold text-[16px] font-semibold leading-[19px] text-white">
              Фильтр
            </Text>
            <TouchableOpacity
              onPress={handleModalClose}
              className="flex size-[36px] items-center justify-center rounded-full bg-[#131B21]"
            >
              <XMarkIcon size={24} color={"#Fff"} />
            </TouchableOpacity>
          </View>
          <View className="mt-[16px] rounded-[8px] bg-[#131B21] p-[8px]">
            <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
              Статус турнира
            </Text>
            <View className="mt-[16px] flex flex-col gap-y-[8px]">
              {[
                { status: "waiting", label: "Ожидающие" },
                { status: "in_progress", label: "Текущие" },
                { status: "finished", label: "Завершенные" },
              ].map(({ status, label }) => (
                <TouchableOpacity
                  key={status}
                  onPress={() => handleStatusSelect(status as any)}
                  className="flex flex-row items-center justify-between py-[8px]"
                >
                  <Text className="font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white">
                    {label}
                  </Text>
                  <View className="flex size-[20px] items-center justify-center rounded-full border border-[#FFFFFF]/20">
                    {selected === status && (
                      <View className="flex size-[12px] items-center justify-center rounded-full bg-[#FFFFFF]/20"></View>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View className="my-[32px]">
            <Calendar
              renderHeader={(date) => (
                <View className="flex flex-row items-center gap-[22px]">
                  <Text className="font-Inter_600SemiBold text-[16px] font-semibold leading-[19px] text-white">
                    {date?.getFullYear()}
                  </Text>
                  <Text className="font-Inter_600SemiBold text-[16px] font-semibold leading-[19px] text-white">
                    {monthNames[date?.getMonth() as number]}
                  </Text>
                </View>
              )}
              theme={{
                backgroundColor: "#131B21",
                calendarBackground: "#131B21",
                textSectionTitleColor: "rgba(255, 255, 255, 0.8)",
                selectedDayBackgroundColor: "red",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#09537B",
                dayTextColor: "#fff",
                textDisabledColor: "rgba(255, 255, 255, 0.6)",
                textDayFontFamily: "Inter_400Regular",
                textDayFontWeight: "400",
                textDayFontSize: 14,
                monthTextColor: "#fff",
                textMonthFontSize: 16,
                textMonthFontFamily: "Inter_600SemiBold",
                arrowColor: "#fff",
                arrowWidth: 24,
                arrowHeight: 24,
              }}
              style={{
                backgroundColor: "#131B21",
                borderRadius: 8,
                overflow: "hidden",
              }}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={handleModalClose}
          style={{ paddingBottom: insets.bottom }}
        >
          <Text className="rounded-[8px] bg-[#09537B] p-[12px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[135%] text-white">
            Применить
          </Text>
        </TouchableOpacity>
      </Pressable>
    </Pressable>
  );
};

export default TournamentsFilterModal;
