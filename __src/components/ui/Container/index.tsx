import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

export const Container = ({
  children,
  style,
  ...props
}: { children: ReactNode } & ViewProps) => {
  return (
    <View
      style={[
        {
          paddingInline: 16,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
