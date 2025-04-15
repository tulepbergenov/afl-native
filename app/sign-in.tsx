import { Button, Container } from "@/components/ui";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Image } from "expo-image";
import { Link } from "expo-router";
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
import * as v from "valibot";

const schema = v.object({
  number: v.pipe(
    v.string("Номер телефона обязателен"),
    v.regex(
      /^\+?[1-9]\d{1,14}$/,
      "Пожалуйста, введите правильный номер телефона",
    ),
  ),
  password: v.pipe(
    v.string("Пароль обязателен"),
    v.regex(/^.{8,}$/, "Пароль должен быть не менее 8 символов"),
  ),
});

const SignInScreen = () => {
  const { top, bottom } = useSafeAreaInsets();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { control, handleSubmit } = useForm<{
    number: string;
    password: string;
  }>({
    resolver: valibotResolver(schema),
  });

  const handleSignIn = handleSubmit((data) => {
    console.log(data);
  });

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
            Номер телефона
          </Text>
          <Controller
            control={control}
            name="number"
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  placeholder="+7..."
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  keyboardType="phone-pad"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoComplete="tel"
                  importantForAutofill="yes"
                  textContentType="telephoneNumber"
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
                      <EyeSlashIcon size={20} color={"#FFFFFF"} opacity={0.5} />
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
          >
            Создать аккаунт
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
