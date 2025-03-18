import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";

export const HapticTab = (props: BottomTabBarButtonProps) => {
  return (
    <PlatformPressable
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        }
        props.onPressIn?.(ev);
      }}
      {...props}
    />
  );
};
