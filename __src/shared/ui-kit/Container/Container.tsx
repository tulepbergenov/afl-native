import { cn } from "@/shared/libs";
import { View } from "react-native";
import { ContainerType } from "./Container.type";

export const Container = ({ children, className, ...props }: ContainerType) => {
  return (
    <View className={cn("px-[16px]", className)} {...props}>
      {children}
    </View>
  );
};
