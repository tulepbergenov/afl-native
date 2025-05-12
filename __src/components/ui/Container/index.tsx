import { ReactNode } from "react";
import { View } from "react-native";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <View
      style={{
        paddingInline: 16,
      }}
    >
      {children}
    </View>
  );
};
