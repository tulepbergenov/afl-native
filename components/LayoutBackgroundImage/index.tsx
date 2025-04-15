import { Image } from "expo-image";
import { ReactNode } from "react";
import { Dimensions, View } from "react-native";

const { width, height } = Dimensions.get("window");

export const LayoutBackgroundImage = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0A090B",
        position: "relative",
      }}
    >
      <Image
        contentFit="cover"
        source={require("../../assets/images/bg.webp")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width,
          height,
          opacity: 0.1,
          zIndex: 1,
        }}
      />
      <View
        style={{
          zIndex: 2,
          flex: 1,
        }}
      >
        {children}
      </View>
    </View>
  );
};
