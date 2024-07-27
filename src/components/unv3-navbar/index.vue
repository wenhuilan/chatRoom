<template>
  <view class="container">
  <uni-nav-bar  background-color="skyblue"  height="120rpx">
     <view  class="nav-left"> 聊天室app</view>
    <view class="nav-right">
        <uni-icons type="search" size="30" color="#000" class="icon"></uni-icons>
        <uni-icons type="personadd" size="30" color="#000" class="icon"></uni-icons>
    </view>
  </uni-nav-bar>


  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      city: "北京"
    };
  },
  methods: {
  
   
 
}
}
</script>
<style lang="scss" scoped>

.nav-left{
    height: 100%;
    width: 30%;
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
  font-size: 40rpx;
  color: #fff;
  font-weight: 600;
  padding: 0 3%;
}

.nav-right{
    height: 100%;
    width: 30%;
    /* background-color: blue; */
    position: absolute;
    right: 0;
    display: flex;
   justify-content: flex-end;
   padding: 0 3%;
    align-items: center;
    .icon{
        margin-right: 8%;
    }
}

</style>