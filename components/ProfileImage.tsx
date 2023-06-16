import { Image, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const ProfileImage = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Profile");
      }}
    >
      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.4s1nyrvwztzFhWsJz0-8yAHaHa?pid=ImgDet&rs=1",
        }}
        style={{ height: 30, width: 30, borderRadius: 20, marginRight: 10 }}
      />
    </TouchableOpacity>
  );
};

export default ProfileImage;
