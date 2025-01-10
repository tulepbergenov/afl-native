import { ReactNode } from "react";
import { Text } from "react-native";

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      style={{
        fontSize: 24,
        color: "red",
        fontWeight: 500,
      }}
    >
      {children}
    </Text>
  );
};
