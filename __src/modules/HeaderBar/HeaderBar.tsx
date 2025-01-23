import NotificationIcon from "@/shared/assets/icons/NotificationIcon.svg";
import MockAvatar from "@/shared/assets/images/avatar.jpg";
import { Container } from "@/shared/ui-kit";
import { Image } from "expo-image";
import { Text, View } from "react-native";

export const HeaderBar = () => {
  return (
    <View>
      <Container>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-x-[6px] bg-[#151515] px-[10px] rounded-[100px] min-h-[32px]">
            <View className="size-[22px] rounded-full overflow-hidden">
              <Image
                source={MockAvatar}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </View>
            <Text className="text-white font-medium font-Inter_500Medium text-[14px] leading-[17px]">
              Alibek Alibek
            </Text>
          </View>
          <View className="bg-[#151515] text-white size-[32px] rounded-full flex items-center justify-center">
            <NotificationIcon width={20} height={20} />
          </View>
        </View>
      </Container>
    </View>
  );
};
