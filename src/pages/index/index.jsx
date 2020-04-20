import Taro from "@tarojs/taro";
import { View, Button, Textarea } from "@tarojs/components";
import "./index.scss";

export default function Index() {
  return (
    <View className="index">
      <Textarea
        placeholder="撰写优质教程..."
        className="post-input"
        autoHeight
      />
      <Button className="post-button">发表</Button>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "首页"
};
