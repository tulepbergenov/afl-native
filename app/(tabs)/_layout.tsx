import { BaseErrorBoundary } from "@/components";
import { hapticFeedbackImpactFeedbackHeavy } from "@/libs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ErrorBoundaryProps, Tabs } from "expo-router";

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return <BaseErrorBoundary {...props} />;
};

export default () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Лента",
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
        name="tournament"
        options={{
          title: "Турнир",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="pencil-square" color={color} />
          ),
        }}
        listeners={{
          tabPress: () => {
            hapticFeedbackImpactFeedbackHeavy();
          },
        }}
      />
      <Tabs.Screen
        name="games"
        options={{
          title: "Игры",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="gamepad" color={color} />
          ),
        }}
        listeners={{
          tabPress: () => {
            hapticFeedbackImpactFeedbackHeavy();
          },
        }}
      />
      <Tabs.Screen
        name="transfers"
        options={{
          title: "Трансферы",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="handshake-o" color={color} />
          ),
        }}
        listeners={{
          tabPress: () => {
            hapticFeedbackImpactFeedbackHeavy();
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профиль",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
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
