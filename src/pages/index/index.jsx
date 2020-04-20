import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Button, Textarea } from "@tarojs/components";

import PostCard from "../../components/PostCard";
import "./index.scss";

export default function Index() {
  const [post, setPost] = useState("");
  const [postList, setPostList] = useState([]);

  function handleChange(e) {
    setPost(e.target.value);
  }

  function handleSubmit() {
    console.log("hello world", post);
    if (!post) {
      Taro.showToast({
        title: "内容不能为空",
        icon: "none"
      });
    } else {
      Taro.showToast({
        title: "发表成功",
        icon: "success"
      });

      setPost("");
      setPostList(postList.concat(post));
    }
  }

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await Taro.request({
          url:
            "https://9ff4272f-ce60-4be6-9376-f9f462482edc.mock.pstmn.io/articles"
        });

        const postList = res.data.map(item => item.name);
        setPostList(postList);
      } catch (err) {
        console.log("err", err);
      }
    }

    getPosts();
  }, []);

  return (
    <View className="index">
      <Textarea
        placeholder="撰写优质教程..."
        className="post-input"
        value={post}
        onInput={handleChange}
        autoHeight
      />
      <Button className="post-button" onClick={handleSubmit}>
        发表
      </Button>
      <View className="post-box">
        {postList.map(postItem => (
          <PostCard post={postItem} />
        ))}
      </View>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "首页"
};
