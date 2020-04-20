import Taro, { useRouter } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./post.scss";

export default function Post() {
  const { params } = useRouter();
  const { post = "" } = params;

  return (
    <View className="post">
      <Text className="post-name">{post}</Text>
    </View>
  );
}

Post.config = {
  navigationBarTitleText: "帖子页"
};
