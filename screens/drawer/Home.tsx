import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import React from "react";
import Card from "../../components/Card";
import ImageCarousel from "../../components/Carousel";

const Home = ({ navigation }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageCarousel />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Card
          icon="md-checkmark-circle"
          content="Google developers are paid huge amount of salary."
        />
        <Card
          icon="logo-facebook"
          content="Google developers are paid huge amount of salary."
        />

        <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
          <Text>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Text>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default Home;
