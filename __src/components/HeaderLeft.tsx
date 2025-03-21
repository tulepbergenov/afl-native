import { usePathname, useRouter } from "expo-router";
import { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import LogoIcon from "../../assets/images/logo.svg";

export const HeaderLeft = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  return (
    <View className="pl-[16px]">
      {isHome && <LogoIcon width={93} height={36} />}
      {!isHome && (
        <TouchableOpacity onPress={() => router.back()}>
          <View className="flex size-[36px] items-center justify-center rounded-[50%] bg-[#131B21]">
            <ChevronLeftIcon size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
