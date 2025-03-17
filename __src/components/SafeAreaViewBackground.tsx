import { Image } from "expo-image";
import { ReactNode } from "react";
import { Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window"); // Получаем размеры экрана

export const SafeAreaViewBackground = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className="relative flex-auto bg-[#0A090B]"
    >
      <Image
        contentFit="cover"
        source={require("../../assets/images/bg.jpg")}
        style={{
          width,
          height,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 60,
          paddingBottom: 32,
        }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
