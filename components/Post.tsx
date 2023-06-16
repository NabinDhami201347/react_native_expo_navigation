import { View, Text, Image, TouchableHighlight } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";

const Post = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        padding: 10,
        marginVertical: 5,
        borderBottomWidth: 0.2,
      }}
    >
      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.4s1nyrvwztzFhWsJz0-8yAHaHa?pid=ImgDet&rs=1",
        }}
        style={{
          height: 30,
          width: 30,
          borderRadius: 20,
          marginTop: 5,
          marginRight: 10,
        }}
      />

      {/* Content */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Hello World</Text>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui in
          possimus eaque fugiat neque tempore dolor eius officiis nihil ipsam.
        </Text>

        {/* Icons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <TouchableHighlight>
            <EvilIcons name="comment" size={25} />
          </TouchableHighlight>

          <TouchableHighlight>
            <EvilIcons name="retweet" size={25} />
          </TouchableHighlight>

          <TouchableHighlight>
            <EvilIcons name="heart" size={25} />
          </TouchableHighlight>

          <TouchableHighlight>
            <EvilIcons name="share-apple" size={25} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Post;
