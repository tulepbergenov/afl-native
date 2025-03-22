import { usePathname } from "expo-router";
import { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { BellIcon, Cog6ToothIcon } from "react-native-heroicons/outline";

const ROUTES_WITH_HIDE_NOTIFICATION = [
  "/news",
  "/my-commands",
  "/create-command",
  "/matches/[match]",
  "/matches/[match]/application",
  "/matches/[match]/[gamerNumber]",
];
const ROUTES_WITH_SHOW_SETTINGS = ["/profile"];

export const HeaderRight = () => {
  const pathname = usePathname();

  const isHide = useMemo(
    () => ROUTES_WITH_HIDE_NOTIFICATION.includes(pathname),
    [pathname],
  );

  const isShowSettings = useMemo(
    () => ROUTES_WITH_SHOW_SETTINGS.includes(pathname),
    [pathname],
  );

  return (
    <View className="flex flex-row items-center justify-end gap-x-[8px] pr-[16px]">
      {isShowSettings && (
        <TouchableOpacity>
          <Cog6ToothIcon size={24} color="#fff" />
        </TouchableOpacity>
      )}
      {!isHide && (
        <TouchableOpacity>
          <BellIcon size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};
