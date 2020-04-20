import Taro, { useState } from "@tarojs/taro";
import { View, Button, Textarea } from "@tarojs/components";
import "./index.scss";

export default function Index() {
  const [post, setPost] = useState("");

  function handleChange(e) {
    setPost(e.target.value);
  }

  return (
    <View className="index">
      <Textarea
        placeholder="撰写优质教程..."
        className="post-input"
        value={post}
        onInput={handleChange}
        autoHeight
      />
      <Button className="post-button">发表</Button>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "首页"
};
