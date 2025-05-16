import { Button, Container } from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { toast } from "sonner-native";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({ required_error: "Введите электронную почту" })
    .email("Введите правильный адрес электронной почты"),
  password: z
    .string({ required_error: "Введите пароль" })
    .min(8, "Пароль должен быть не менее 8 символов"),
});

const SignInScreen = () => {
  const { top, bottom } = useSafeAreaInsets();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { control, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>({
    resolver: zodResolver(schema),
  });

  const handleSignIn = handleSubmit((data) => {
    console.log(data);

    toast.success("Успешно");
  });

  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{
          paddingTop: top,
          flex: 1,
          paddingBottom: bottom,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Container>
          <View>
            <Image
              source={require("../assets/images/logo-big.webp")}
              contentFit="contain"
              contentPosition="center"
              style={{
                width: "100%",
                height: 100,
                marginTop: 16,
              }}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: 600,
                marginTop: 58,
                color: "#fff",
                lineHeight: 24,
                fontFamily: "Inter_600SemiBold",
              }}
            >
              Добро пожаловать в AFL!
            </Text>
            <Text
              style={{
                marginTop: 16,
                color: "#fff",
                fontSize: 16,
                lineHeight: 23,
                fontFamily: "Inter_400Regular",
                fontWeight: 400,
                opacity: 0.5,
              }}
            >
              Электронная почта
            </Text>
            <Controller
              control={control}
              name="email"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <>
                  <TextInput
                    placeholder="Введите электронную почту"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    keyboardType="email-address"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    autoComplete="email"
                    importantForAutofill="yes"
                    textContentType="emailAddress"
                    style={{
                      backgroundColor: "#131B21",
                      borderRadius: 8,
                      marginTop: 8,
                      paddingHorizontal: 13,
                      color: "#fff",
                      fontSize: 16,
                      lineHeight: 19,
                      fontFamily: "Inter_400Regular",
                      fontWeight: 400,
                      height: 40,
                    }}
                  />
                  {error && (
                    <Text
                      style={{
                        color: "red",
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: 16,
                        fontFamily: "Inter_400Regular",
                        fontWeight: 400,
                        opacity: 0.8,
                      }}
                    >
                      {error.message}
                    </Text>
                  )}
                </>
              )}
            />
            <Text
              style={{
                marginTop: 16,
                color: "#fff",
                fontSize: 16,
                lineHeight: 23,
                fontFamily: "Inter_400Regular",
                fontWeight: 400,
                opacity: 0.5,
              }}
            >
              Пароль
            </Text>
            <Controller
              control={control}
              name="password"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <>
                  <View
                    style={{
                      position: "relative",
                    }}
                  >
                    <TextInput
                      placeholder="Введите пароль"
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      secureTextEntry={!isPasswordVisible}
                      value={value}
                      textContentType="password"
                      autoComplete="password"
                      importantForAutofill="yes"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      style={{
                        backgroundColor: "#131B21",
                        borderRadius: 8,
                        marginTop: 8,
                        paddingLeft: 13,
                        paddingRight: 46,
                        color: "#fff",
                        fontSize: 16,
                        lineHeight: 19,
                        fontFamily: "Inter_400Regular",
                        fontWeight: 400,
                        height: 40,
                      }}
                    />
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        width: 40,
                        height: 40,
                        right: 3,
                        top: 8,
                        zIndex: 1,
                      }}
                      activeOpacity={0.6}
                      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                      {isPasswordVisible ? (
                        <EyeSlashIcon
                          size={20}
                          color={"#FFFFFF"}
                          opacity={0.5}
                        />
                      ) : (
                        <EyeIcon size={20} color={"#FFFFFF"} opacity={0.5} />
                      )}
                    </TouchableOpacity>
                  </View>
                  {error && (
                    <Text
                      style={{
                        color: "red",
                        marginTop: 8,
                        fontSize: 16,
                        lineHeight: 16,
                        fontFamily: "Inter_400Regular",
                        fontWeight: 400,
                        opacity: 0.8,
                      }}
                    >
                      {error.message}
                    </Text>
                  )}
                </>
              )}
            />
            <Link
              href="/recovery-password"
              style={{
                marginTop: 16,
                color: "#09537B",
                fontSize: 16,
                lineHeight: 23,
                fontFamily: "Inter_400Regular",
                fontWeight: 400,
                alignSelf: "flex-start",
              }}
            >
              Забыл пароль
            </Link>
            <Button
              style={{
                marginTop: 32,
              }}
              onPress={handleSignIn}
            >
              Войти
            </Button>
            <Button
              style={{
                marginTop: 16,
              }}
              type="secondary"
              onPress={() => router.push("/sign-up")}
            >
              Создать аккаунт
            </Button>
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
