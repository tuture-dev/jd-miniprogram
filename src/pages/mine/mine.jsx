import Taro, { useRouter } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";

import "./mine.scss";
import avatar from "../../images/avatar.png";

export default function Mine() {
  return (
    <View className="mine">
      <Image src={avatar} className="mine-avatar" />
      <View className="slogan">
        <Text className="slogan-name">
          图雀社区：予力内容创作，加速技术传播
        </Text>
      </View>
    </View>
  );
}

Mine.config = {
  navigationBarTitleText: "我的"
};
