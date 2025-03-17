import { SafeAreaViewBackground } from "@/components";
import { Text, View } from "react-native";

const Profile = () => {
  return (
    <SafeAreaViewBackground>
      <View className="container">
        <View>
          <Text className="text-[18px] font-normal leading-[22px] text-white">
            Профиль
          </Text>
        </View>
      </View>
    </SafeAreaViewBackground>
  );
};

export default Profile;
