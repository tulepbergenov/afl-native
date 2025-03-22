import { HapticTab, HeaderLeft, HeaderRight } from "@/components";
import { Tabs } from "expo-router";
import React from "react";
import {
  CalendarDaysIcon,
  LifebuoyIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { HomeIcon } from "react-native-heroicons/solid";

const TabLayout = () => {
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarButton: HapticTab,
        tabBarBackground: undefined,
        headerTransparent: true,
        headerTitleStyle: {
          fontSize: 16,
          color: "#fff",
          lineHeight: 19,
          fontWeight: 600,
          fontFamily: "Inter_600SemiBold",
        },
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
        tabBarStyle: {
          backgroundColor: "#0A090B",
          borderTopColor: "#0A090B",
          borderTopWidth: 0,
          height: 84,
          paddingTop: 8,
          paddingBottom: 36,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          lineHeight: 12,
          fontFamily: "Inter_600SemiBold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          title: "Главная",
          tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
          tabBarIconStyle: {
            marginBottom: 3,
          },
        }}
      />
      <Tabs.Screen
        name="tournaments"
        options={{
          title: "Турниры",
          tabBarIcon: ({ color }) => (
            <CalendarDaysIcon size={24} color={color} />
          ),
          tabBarIconStyle: { marginBottom: 3 },
        }}
      />
      <Tabs.Screen
        name="matches/index"
        options={{
          headerTitle: "",
          title: "Матчи",
          tabBarIcon: ({ color }) => <LifebuoyIcon size={24} color={color} />,
          tabBarIconStyle: { marginBottom: 3 },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "",
          title: "Профиль",
          tabBarIcon: ({ color }) => <UserIcon size={24} color={color} />,
          tabBarIconStyle: { marginBottom: 3 },
        }}
      />
      <Tabs.Screen
        name="news/index"
        options={{
          href: null,
          title: "Новости",
        }}
      />
      <Tabs.Screen
        name="news/[article]"
        options={{
          href: null,
          title: "Новости",
        }}
      />
      <Tabs.Screen
        name="tournaments-favorites"
        options={{
          href: null,
          title: "Избранные турниры",
        }}
      />
      <Tabs.Screen
        name="my-commands"
        options={{
          href: null,
          title: "Мои команды",
        }}
      />
      <Tabs.Screen
        name="news/match-article"
        options={{
          href: null,
          title: "Новости",
        }}
      />
      <Tabs.Screen
        name="create-command"
        options={{
          href: null,
          title: "Создание команды",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
