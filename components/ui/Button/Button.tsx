import { ReactNode, useMemo } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./Button.style";

export const Button = ({
  children,
  style,
  type = "primary",
  ...props
}: {
  children: ReactNode;
  type?: "primary" | "secondary";
} & TouchableOpacityProps) => {
  const buttonStyles = useMemo(
    () => [
      styles.button,
      type === "primary" ? styles.primaryButton : styles.secondaryButton,
      style,
    ],
    [type, style],
  );

  const textStyles = useMemo(
    () => [
      styles.text,
      type === "primary" ? styles.primaryText : styles.secondaryText,
    ],
    [type],
  );

  return (
    <TouchableOpacity activeOpacity={0.6} style={buttonStyles} {...props}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};
