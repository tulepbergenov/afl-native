import cc from "classcat";
import { twMerge } from "tailwind-merge";

export const cn = (
  ...inputs: (string | Record<string, boolean> | undefined)[]
) => {
  return twMerge(cc(inputs));
};
