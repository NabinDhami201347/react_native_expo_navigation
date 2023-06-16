import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

interface Props {
  uri: string;
}

const data: Props[] = [
  {
    uri: "https://th.bing.com/th/id/OIP.UVghWsnx64B3r9pFC4KJowHaD9?w=339&h=181&c=7&r=0&o=5&dpr=1.6&pid=1.7",
  },
  {
    uri: "https://th.bing.com/th/id/OIP.96C97LVXEi0x3i54NpmSxAHaFM?w=261&h=183&c=7&r=0&o=5&dpr=1.6&pid=1.7",
  },
  {
    uri: "https://th.bing.com/th/id/OIP.15UQcadGSCblw7iLdUUxdwHaEK?pid=ImgDet&rs=1",
  },
  {
    uri: "https://th.bing.com/th/id/OIP.P0UqcvPARAQUtCgWMuI5YwHaDm?pid=ImgDet&rs=1",
  },
  {
    uri: "https://th.bing.com/th/id/OIP.bbZWREqZ9n-7uTwJGRkmGwHaDd?w=306&h=163&c=7&r=0&o=5&dpr=1.6&pid=1.7",
  },
];

function ImageCarousel() {
  const width = Dimensions.get("window").width;

  return (
    <View style={{ paddingVertical: 10 }}>
      <Carousel
        width={width}
        autoPlayInterval={5000}
        height={width / 2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index, item }) => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri: item.uri }}
              style={{
                width: "90%",
                height: "100%",
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default ImageCarousel;
