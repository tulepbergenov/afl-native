import { useRouter } from "expo-router";
import {
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";

const { height } = Dimensions.get("window");

const TournamentsFilterModal = () => {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} className="flex-1 justify-end">
      <Pressable
        style={{
          height: height * 0.7,
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
              onPress={() => router.back()}
              className="flex size-[36px] items-center justify-center rounded-full bg-[#131B21]"
            >
              <XMarkIcon size={24} color={"#Fff"} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Pressable>
    </Pressable>
  );
};

export default TournamentsFilterModal;
