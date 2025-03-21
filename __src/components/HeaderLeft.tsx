import { usePathname, useRouter } from "expo-router";
import { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import LogoIcon from "../../assets/images/logo.svg";

const ROUTES_FOR_HIDE_BACK_BUTTON = [
  "/",
  "/profile",
  "/tournaments",
  "/matches",
  "/tournaments-filter-modal",
];

export const HeaderLeft = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isShowBackButton = useMemo(() => {
    if (ROUTES_FOR_HIDE_BACK_BUTTON.includes(pathname)) return false;

    return true;
  }, [pathname]);

  return (
    <View className="pl-[16px]">
      {!isShowBackButton && <LogoIcon width={93} height={36} />}
      {isShowBackButton && (
        <TouchableOpacity onPress={() => router.back()}>
          <View className="flex size-[36px] items-center justify-center rounded-[50%] bg-[#131B21]">
            <ChevronLeftIcon size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
