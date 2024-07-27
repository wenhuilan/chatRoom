<template>
  <view class="conent">
    <TopNavigationBar />
    <uni-swipe-action>
     <uni-swipe-action-item
        v-for="(item, index) in list"
        :key="item.id"
        :right-options="options"
        :show="item.isOpened ? 'right' : 'none'"
        :auto-close="false"
        @click.stop="handleSwipeClick(index, $event)"
      >
        <uni-list-chat
          :title="item.title"
          :avatar="item.url"
          note="您收到一条新的消息"
          time="2020-02-02 20:20"
          badge-positon="left"
          badge-text="99"
          :avatar-list="item.isGroup?avatarList:[]"
          @click.stop="goTo(index)"
        ></uni-list-chat>
      </uni-swipe-action-item>
    </uni-swipe-action>
  </view>
</template>

<script setup>
import { ref } from "vue";
import TopNavigationBar from "@/components/unv3-navbar/index";
const avatarList = ref([
  {
    url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
  },
  {
    url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
  },
  {
    url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
  }
]);
const list = ref([
  {
    id: 1,
    title: "同学A",
    isOpened: false,
    isGroup: false,
    url:
      "https://gd-hbimg.huaban.com/71143b799daf8f3f224f22d19953b02a74a69f5669ffb-NolluF_fw480webp"
  },
  {
    id: 2,
    title: "同学B",
    isOpened: false,
    isGroup: false,
    url:
      "https://gd-hbimg.huaban.com/65c849541f98efb6fb2d67c7ed2f64296572c158f740-35OvXt_fw480webp"
  },
  {
    id: 3,
    title: "同学C",
    isOpened: false,
    isGroup: false,
    url:
      "https://gd-hbimg.huaban.com/d4abf46d88d710011e102007f6c0bb3af19bc3fa6ac07-Lt3Y48_fw480webp"
  },
  { id: 4, title: "群聊1", isOpened: false, isGroup: true },
  { id: 5, title: "群聊2", isOpened: false, isGroup: true },
  { id: 6, title: "群聊3", isOpened: false, isGroup: true }
]);

const options = ref([
  {
    text: "删除",
    style: {
      backgroundColor: "#F56C6C"
    }
  }
]);

const bindClick = index => {
  if (!list.value[index].isOpened) {
    list.value = list.value.map((item, i) => ({
      ...item,
      isOpened: i === index
    }));
  }
};

const handleSwipeClick = (index, event) => {
  console.log(111);
if (event.content.text === "删除") {
    list.value.splice(index, 1);
  }
};

const goTo = index => {
  console.log("index", index);
  uni.navigateTo({
    url: "/pages/chat/index"
  });
};
defineExpose({
    TopNavigationBar,
    avatarList,
    list,
    options,
    bindClick,
    handleSwipeClick,
    goTo
});
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  width: 100vw;
  margin-top: 110rpx;
}
</style>
