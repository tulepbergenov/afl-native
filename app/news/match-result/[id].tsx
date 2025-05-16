import { HeaderBar } from "@/components";
import { Container } from "@/components/ui";
import { HEADER_HEIGHT } from "@/shared/constants";
import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ArticleScreen = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <>
      <HeaderBar title="Новости" />
      <ScrollView
        style={{
          paddingTop: top + HEADER_HEIGHT,
          paddingBottom: bottom,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Container>
          <View>
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 28,
                lineHeight: 28,
                color: "#fff",
                letterSpacing: -2,
                fontWeight: 600,
              }}
            >
              Кубок AFL 2024 (футзал)
            </Text>
            <Text
              style={{
                marginTop: 8,
                color: "#fff",
                fontFamily: "Inter_600SemiBold",
                fontSize: 16,
                lineHeight: 16,
                fontWeight: 600,
                opacity: 0.7,
              }}
            >
              12.08.2025
            </Text>
            <Image
              source={require("../../../assets/images/mock-match-result-news.webp")}
              contentFit="cover"
              style={{
                width: "100%",
                height: 268,
                marginTop: 32,
                borderRadius: 8,
              }}
            />
            <View
              style={{
                marginTop: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Inter_600SemiBold",
                    fontSize: 18,
                    lineHeight: 18,
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Чемпионы
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter_400Regular",
                    fontSize: 18,
                    lineHeight: 18,
                    color: "#fff",
                    fontWeight: 400,
                  }}
                >
                  PTC Holding
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Inter_600SemiBold",
                    fontSize: 18,
                    lineHeight: 18,
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Вицемпионы
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter_400Regular",
                    fontSize: 18,
                    lineHeight: 18,
                    color: "#fff",
                    fontWeight: 400,
                  }}
                >
                  Elim-ai
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Inter_600SemiBold",
                    fontSize: 18,
                    lineHeight: 18,
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Лучшие игроки турнира
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter_400Regular",
                    fontSize: 18,
                    lineHeight: 18,
                    color: "#fff",
                    fontWeight: 400,
                  }}
                >
                  PTC Holding
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Inter_600SemiBold",
                    fontSize: 18,
                    lineHeight: 18,
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Лучший арбитр
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter_400Regular",
                    fontSize: 18,
                    lineHeight: 18,
                    color: "#fff",
                    fontWeight: 400,
                  }}
                >
                  Кравченко Владимир и Каримов Жасулан
                </Text>
              </View>
            </View>
          </View>
        </Container>
      </ScrollView>
    </>
  );
};

export default ArticleScreen;
