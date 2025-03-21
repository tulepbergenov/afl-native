import { ViewProps } from "react-native";

export type TournamentCardType = {
  data: {
    status: "waiting" | "in_progress" | "finished";
    date: string;
    title: string;
    commandCount: number;
    isFavorite?: boolean;
  };
} & ViewProps;
