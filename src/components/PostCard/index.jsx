import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./styles.scss";

export default function PostCard(props) {
  const { post } = props;

  function handleClick() {
    Taro.navigateTo({
      url: `/pages/post/post?post=${post}`
    });
  }

  return (
    <View className="post" onClick={handleClick}>
      <Text className="post-name">{post}</Text>
    </View>
  );
}
