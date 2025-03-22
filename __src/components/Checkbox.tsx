import { cn } from "@/shared/libs";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { CheckIcon } from "react-native-heroicons/outline";

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChecked = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <TouchableOpacity
      onPress={handleToggleChecked}
      className={cn(
        "flex size-[20px] items-center justify-center rounded-full border",
        {
          "border-[#09537B] bg-[#09537B]": isChecked,
          "border-[#FFFFFF]/20 bg-transparent": !isChecked,
        },
      )}
    >
      {isChecked && <CheckIcon color={"#fff"} size={16} />}
    </TouchableOpacity>
  );
};
