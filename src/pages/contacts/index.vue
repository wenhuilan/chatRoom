<template>
  <view class="content">
    <TopNavigationBar />
    <!-- <uni-indexed-list :options="list"  @click="bindClick" class="list" /> -->

    <uni-list>
      <uni-list :border="true">
        <!-- 显示圆形头像 -->
        <uni-list-chat
          :title="item.name"
          v-for="item in avatarList"
          :key="item.id"
          :avatar="item.url"
        ></uni-list-chat>
      </uni-list>
    </uni-list>
  </view>
</template>

<script setup>
import { ref } from "vue";
import TopNavigationBar from "@/components/unv3-navbar/index";

const avatarList = ref([
  {
    id: 1,
    url:
      "https://gd-hbimg.huaban.com/71143b799daf8f3f224f22d19953b02a74a69f5669ffb-NolluF_fw480webp",
    name: "A同学"
  },
  {
    id: 2,
    url:
      "https://gd-hbimg.huaban.com/65c849541f98efb6fb2d67c7ed2f64296572c158f740-35OvXt_fw480webp",
    name: "B同学"
  },
  {
    id: 3,
    url:
      "https://gd-hbimg.huaban.com/d4abf46d88d710011e102007f6c0bb3af19bc3fa6ac07-Lt3Y48_fw480webp",
    name: "C同学"
  },
  {
    id: 4,
    url:
      "https://gd-hbimg.huaban.com/71143b799daf8f3f224f22d19953b02a74a69f5669ffb-NolluF_fw480webp",
    name: "D同学"
  },
  {
    id: 5,
    url:
      "https://gd-hbimg.huaban.com/65c849541f98efb6fb2d67c7ed2f64296572c158f740-35OvXt_fw480webp",
    name: "E同学"
  }
]);
defineExpose({
    TopNavigationBar,
    avatarList
});
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  width: 100vw;

  .list {
    /* height: 100%; */
    width: 100vw;
    margin-top: 110rpx;
    overflow: hidden;
  }
}
</style>
