import { usePathname } from "expo-router";
import { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { BellIcon } from "react-native-heroicons/outline";

const ROUTES_WITH_HIDE_NOTIFICATION = ["/news"];

export const HeaderRight = () => {
  const pathname = usePathname();

  const isHide = useMemo(
    () => ROUTES_WITH_HIDE_NOTIFICATION.includes(pathname),
    [pathname],
  );

  return (
    <View className="pr-[16px]">
      {!isHide && (
        <TouchableOpacity>
          <BellIcon size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};
