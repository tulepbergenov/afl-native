import { HeaderBar } from "@/components";
import { Container } from "@/components/ui";
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
          paddingTop: top + 68,
          paddingBottom: bottom,
        }}
        showsVerticalScrollIndicator={false}
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
              AMOLIGA-2021 SOCCA MOLDOVA
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
              source={require("../../assets/images/mock-news.webp")}
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
              <Text
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter_400Regular",
                  fontSize: 18,
                  lineHeight: 24,
                  color: "#fff",
                }}
              >
                Мир технологий стремительно развивается, предлагая новые решения
                и возможности.
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter_400Regular",
                  fontSize: 18,
                  lineHeight: 24,
                  color: "#fff",
                }}
              >
                На конференции в Сан-Франциско были представлены новейшие
                разработки в области искусственного интеллекта.
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter_400Regular",
                  fontSize: 18,
                  lineHeight: 24,
                  color: "#fff",
                }}
              >
                Эксперты прогнозируют значительное влияние этих технологий на
                различные отрасли.
              </Text>
            </View>
          </View>
        </Container>
      </ScrollView>
    </>
  );
};

export default ArticleScreen;
