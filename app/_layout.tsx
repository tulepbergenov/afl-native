import { BaseErrorBoundary } from "@/components";
import "@/shared/styles/index.css";
import { ErrorBoundaryProps } from "expo-router";
import { Stack } from "expo-router/stack";

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return <BaseErrorBoundary {...props} />;
};

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
