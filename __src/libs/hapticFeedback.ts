import * as Haptics from "expo-haptics";

export const hapticFeedbackImpactFeedbackHeavy = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
};
