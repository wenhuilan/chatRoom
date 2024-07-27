<template>
  <view class="content">
    <TopNavigationBar/>
   <view class="main">
   
     
        
	<uni-section title="个人资料" type="line" >
				<uni-card title="同学A" sub-title="沉默是今晚的康桥" extra="额外信息" :thumbnail="avatar" @click="onClick">
					<text class="uni-body">这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
					<view slot="actions" class="card-actions">
										
										<view class="card-actions-item" @click="actionsClick('喜爱')">
											<uni-icons type="heart" size="18" color="#999"></uni-icons>
											<text class="card-actions-item-text">特别关心</text>
										</view>
										<view class="card-actions-item" @click="actionsClick('来访')">
											<uni-icons type="eye" size="18" color="#999"></uni-icons>
											<text class="card-actions-item-text">访客记录</text>
										</view>
										<view class="card-actions-item" @click="actionsClick('来访')">
											<uni-icons type="person" size="18" color="#999"></uni-icons>
											<text class="card-actions-item-text">黑名单</text>
										</view>
									</view>
				</uni-card>
			</uni-section>
   </view>
  </view>
</template>

<script setup>
import TopNavigationBar from "@/components/unv3-navbar/index";
import {ref} from "vue"
const avatar = ref("https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png")
</script>

<style lang="scss" scoped>
.content {
    height: 100vh;
  width: 100vw;
  background: url("/static/R.png");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: bottom right;

 
  /* align-items: center; */
  background-color: rgba(224, 241, 253);
.main{
   display: flex;
       /* margin-top: 110rpx; */
       height: calc(100% - 110rpx);
       /* background-color: #fff; */
     
    .left {

    width: 15%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #230505;
    font-family: cursive;
    background-color: rgb(205, 230, 248);
    box-shadow: #504f4f 1px 2px 6px;

    view {
      width: 100%;
      height: 10%;
      background-color: rgb(205, 230, 248);
      /* border-radius: 4px; */
      margin-bottom: 10%;
      display: flex;
      /* box-shadow:#7e7d7d  1px 2px 6px; */
      justify-content: center;
      align-items: center;
    }
  }

  .middle {
    width: 83%;
    height: 90%;
    /* background-color: rgb(205, 230, 248); */
    margin-left: 2%;
    /* box-shadow:#504f4f  1px 2px 6px; */
    .top {
      height: 20%;
      width: 80%;
        /* background: #fff; */
        display: flex;
        justify-content: center;
      .top_left {
        height: 100%;
        width: 20%  ;
        margin-right: 1%;
        .head {
          width: 60%;
          height: 80%;
          border-radius: 50%;
          margin: 5% auto;
          display: block;
          box-shadow: #504f4f 1px 2px 6px;
        }
      
      }
      .top_right{
         height: 100%;
        width: 30%  ;
        display: flex;
        flex-direction: column;
        justify-content: center;
  .name {
          height: 40%;
          width: 100%;
          font-weight: 600;
          font-size: 1.5rem;
          font-family: cursive;
          /* background-color: #fff; */
          margin-bottom: 3%;
        }
        .signName {
          height: 30%;
          width: 100%;
          /* background-color: #fff; */
          font-family: cursive;
        }
      }
    }
  }

  .img {
    position: absolute;
    bottom: 0;
    right: 2%;

    height: 65vh;
    width: 18vw;
  }
}
}
</style>