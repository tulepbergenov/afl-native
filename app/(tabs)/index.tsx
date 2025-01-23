import { BaseErrorBoundary } from "@/components/BaseErrorBoundary";
import { HeaderBar, SoonTournamentList } from "@/modules";
import { ErrorBoundaryProps } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return <BaseErrorBoundary {...props} />;
};

export default () => {
  return (
    <SafeAreaView className="bg-[#040404] h-full">
      <HeaderBar />
      <SoonTournamentList />
    </SafeAreaView>
  );
};
