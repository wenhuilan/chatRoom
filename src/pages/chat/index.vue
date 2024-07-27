<template>
  <div class="content">
    <TopNavigationBar />
    <scroll-view
      id="scrollview"
      scroll-y="true"
      :scroll-top="scrollTop"
      @scroll="handleScroll"
      @scrolltolower="handleScrollToBottom"
      style="height: 100%;"
    >
      <view class="uni-chatMsgCnt" id="msglistview">
        <!-- 消息列表渲染 -->
        <view
          class="msgitem"
          v-for="(msg, index) in messageList"
          :key="index"
        >
          {{ msg.content }}
        </view>
      </view>
    </scroll-view>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import TopNavigationBar from "@/components/unv3-navbar/index";
import io from 'socket.io-client'; // 确保安装了 socket.io-client
import useUserStore  from '@/store/user'; // 假设您使用了 Pinia 进行状态管理

// 创建响应式引用
const scrollTop = ref(0);
const messageList = ref([]);
const socket = ref(null);
const userStore = useUserStore();

const baseURL = '您的服务器基础 URL'; // 替换为您的服务器基础 URL

onMounted(() => {
  // 初始化 WebSocket 连接
  socket.value = io(baseURL, {
    transports: ['websocket'],
    timeout: 5000,
    // 其他连接参数...
  });

  // 连接成功后的操作
  socket.value.on('connect', () => {
    console.log('WebSocket 连接成功');
    // 可能需要登录或者发送一些初始化消息
  });

  // 接收到消息
  socket.value.on('message', (msg) => {
    messageList.value.push(msg);
    nextTick(() => {
      scrollTop.value += 100; // 假设每条消息高度为100，动态计算滚动位置
    });
  });

  // 其他事件处理...
});

onUnmounted(() => {
  // 组件卸载时断开 WebSocket 连接
  if (socket.value) {
    socket.value.disconnect();
  }
});

const handleScroll = (event) => {
  // 处理滚动事件，可能需要记录滚动位置等
};

const handleScrollToBottom = () => {
  // 滚动到底部时的事件处理
  scrollTop.value = Infinity; // 滚动到最底部
};

// 其他方法...
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  width: 100vw;


}

</style>