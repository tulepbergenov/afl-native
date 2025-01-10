import { BaseErrorBoundary } from "@/components";
import { hapticFeedbackImpactFeedbackHeavy } from "@/libs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ErrorBoundaryProps, Tabs } from "expo-router";

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return <BaseErrorBoundary {...props} />;
};

export default () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
        listeners={{
          tabPress: () => {
            hapticFeedbackImpactFeedbackHeavy();
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
        listeners={{
          tabPress: () => {
            hapticFeedbackImpactFeedbackHeavy();
          },
        }}
      />
    </Tabs>
  );
};
