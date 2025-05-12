import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const IconButton = ({
  children,
  style,
  ...props
}: { children: ReactNode } & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: "100%",
          backgroundColor: "#131B21",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};
