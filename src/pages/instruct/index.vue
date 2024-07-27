
<template>
  <view>
    <view class="uni-margin-wrap">
      <swiper
        class="swiper"
        circular
        :indicator-dots="true"
        :autoplay="true"
        :interval="5000"
        :duration="1000"
        easing-function="easeInOutCubic"
        :current-index="currentIndex"
        @change="onSwiperChange"
      >
        <swiper-item :class="{ active: 0 === currentIndex }">
          <view class="swiper-item">
            <text class="title">休闲娱乐</text>
            <text class="p">与好朋友一起开黑</text>
            <img src="/static/ren.png" alt />
          </view>
        </swiper-item>
        <swiper-item :class="{ active: 1 === currentIndex }">
          <view class="swiper-item">
            <text class="title">聊天交友</text>
            <text class="p">认识更多玩耍的朋友</text>
            <img src="/static/ren.png" alt />
          </view>
        </swiper-item>
        <swiper-item :class="{ active: 2 === currentIndex }">
          <view class="swiper-item">
            <text class="title">圈子动态</text>
            <text class="p">分享生活,好好爱自己</text>
            <img src="/static/ren.png" alt />
          </view>
         
        </swiper-item>
       
      </swiper>
        <text class="end" @click="toStart">立即体验<uni-icons type="arrow-right" size="20" color="skyblue"></uni-icons></text>
    </view>
  </view>
</template>
<script setup>
import { ref } from "vue";

const currentIndex = ref(0);
const onSwiperChange = (e) => {
  currentIndex.value = e.detail.current;
  
}
const toStart = () => {
  uni.navigateTo({
    url: "/pages/login/index",
  });
}
</script>
<style lang="scss" scoped>
.uni-margin-wrap {
    font-family: cursive;
  height: 100vh;
  width: 100vw;
  /* background: #d6aeae; */
  .swiper {
    height: 90%;
    width: 80%;
    margin: 0 auto;
    background: #fff;
    position: relative;
    .swiper-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #000;
      font-size: 50rpx;

      .title {
        font-size: 60rpx;
        font-weight: bold;
      }
      .p {
        font-size: 40rpx;
        margin-top: 50rpx;
      }

      img {
        width: 300rpx;
        height: 300rpx;
        margin-top: 50rpx;
      }
    }
  }
}
/* 标题从上方滑动进入的动画 */
@keyframes slideDown {
  from {
    transform: translateY(-400%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
// 图片翻转动画
@keyframes flip {
  from {
    transform: rotateY(0deg) scale(0.8);
  }
  to {
    transform: rotateY(360deg) scale(1.1);
  }
}
.active .title {
  animation: slideDown 1.5s ease-out forwards;
  opacity: 0;
}
.active img {
  animation: flip 2s ease-out forwards;
}
.end{
    position: absolute;
    bottom:5%;
    right: 10%;
}
</style>

