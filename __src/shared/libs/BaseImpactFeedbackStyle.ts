import * as Haptics from "expo-haptics";

export const BaseImpactFeedbackStyle = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
};
