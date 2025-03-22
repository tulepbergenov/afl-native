import { Checkbox, SafeAreaViewBackground } from "@/components";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MagnifyingGlassIcon, PlusIcon } from "react-native-heroicons/outline";

const { width } = Dimensions.get("window");

const CreateCommands = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Разрешение", "Нужно разрешение на доступ к галерее 🙏");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaViewBackground>
      <View className="container">
        <View>
          <View className="flex flex-row items-center justify-center">
            <TouchableOpacity
              className="flex flex-col items-center justify-center"
              onPress={pickImage}
            >
              <View className="flex size-[64px] items-center justify-center overflow-hidden rounded-full border border-[#0A090B] bg-[#0D1318]">
                {image && (
                  <Image
                    contentFit="cover"
                    source={{ uri: image }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
                {!image && <PlusIcon color={"#09537B"} size={24} />}
              </View>
              <Text className="mt-[6px] text-center font-Inter_400Regular text-[16px] font-normal leading-[135%] text-white/50">
                Аватар команды
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-[16px] w-full overflow-hidden rounded-[8px] bg-[#131B21]">
            <TextInput
              placeholder="Название команды"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              className="h-[40px] px-[12px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
            />
          </View>
          <View className="mt-[24px] flex flex-row items-center justify-between">
            <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
              Игроки
            </Text>
            <Text className="font-Inter_600SemiBold text-[16px] font-semibold leading-[19px] text-white/50">
              30/5
            </Text>
          </View>
          <View className="relative mt-[16px] w-full overflow-hidden rounded-[8px] bg-[#131B21]">
            <MagnifyingGlassIcon
              size={24}
              color="#fff"
              style={{
                position: "absolute",
                top: 8,
                left: 8,
              }}
            />
            <TextInput
              placeholder="Поиск по тексту"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              className="h-[40px] pl-[36px] pr-[8px] font-Inter_400Regular text-[16px] font-normal leading-[19px] text-white"
            />
          </View>
          <View className="mt-[24px] flex flex-col gap-y-[32px]">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <Checkbox />
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <Checkbox />
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <Checkbox />
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <Checkbox />
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <Checkbox />
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-[8px]">
                <View className="flex size-[24px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    contentFit="cover"
                    source={require("../../assets/images/avatar.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <Text className="font-Inter_600SemiBold text-[18px] font-semibold leading-[22px] text-white">
                  Myrar Samiitov
                </Text>
              </View>
              <Checkbox />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 8,
          left: 16,
          width: width - 32,
        }}
      >
        <Text className="rounded-[8px] bg-[#09537B] p-[12px] text-center font-Inter_600SemiBold text-[14px] font-semibold leading-[135%] text-white">
          Создать команду
        </Text>
      </TouchableOpacity>
    </SafeAreaViewBackground>
  );
};

export default CreateCommands;
