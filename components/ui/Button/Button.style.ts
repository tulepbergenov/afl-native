import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    minHeight: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  primaryButton: {
    backgroundColor: "#09537B",
  },
  secondaryButton: {
    backgroundColor: "#0A0D12",
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: "#09537B",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 16,
    fontFamily: "Inter_600SemiBold",
  },
  primaryText: {
    color: "#fff",
  },
  secondaryText: {
    color: "#09537B",
  },
});
