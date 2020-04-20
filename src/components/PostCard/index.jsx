import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";

import "./styles.scss";

export default function PostCard(props) {
  const { post } = props;

  return (
    <View className="post">
      <Text className="post-name">{post}</Text>
    </View>
  );
}
