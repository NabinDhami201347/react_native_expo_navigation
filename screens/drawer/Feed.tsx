import { View, TextInput, Text, TouchableOpacity } from "react-native";
import React from "react";
import Post from "../../components/Post";
import ProfileImage from "../../components/ProfileImage";

const Feed = () => {
  return (
    <View>
      {/* Create Post */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <ProfileImage />
        <TextInput placeholder="What's happening...??" />
      </View>
      <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: 20 }}>
        <Text
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "green",
            color: "#fff",
          }}
        >
          Post
        </Text>
      </TouchableOpacity>

      <Post />
      <Post />
      <Post />
    </View>
  );
};

export default Feed;
