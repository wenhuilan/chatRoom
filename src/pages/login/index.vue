
<template>
	<view class="content">
        <view class="top">
         <img src="@/static/app.png" alt="">
        </view>
		<view class="middle">
			<form @submit="onLogin" v-if="isLogin" class="form">
                <view>
                    <input class="uni-input" type="text" placeholder="请输入用户名" v-model="loginForm.username" />
                </view>
                <view>
                    
                    <input class="uni-input"  type="password" placeholder="请输入密码" v-model="loginForm.password"/>
                </view>
                <view class="tips"><text>未有账号?去注册</text></view>
                <view class="btn">
                    <button  form-type="submit">登录</button>
                </view>
               
			</form>
            <form @submit="onRegister" v-else class="form">
                <view>
                   
                    <input class="uni-input"  placeholder="请输入用户名" v-model="registerForm.username" />
                </view>
                <view>
                    
                    <input class="uni-input"  type="password" placeholder="请输入密码" v-model="registerForm.password"/>
                </view>
                <view>
                  
                    <input class="uni-input"  placeholder="请输入手机号" v-model="registerForm.phone"/>
                </view>
              <view class="tips"><text>已有账号?去登陆</text></view>
                <view class="btn">
                    <button form-type="submit">注册</button>
                </view>
               
			</form>
          

		</view>
	</view>
</template>


<script setup>
import { ref } from 'vue';
    import { Login, Register } from '@/api/user.js'
     import  useUserStore from '@/store/user.js';
     const userStore = useUserStore();
     const isLogin = ref(false);

const loginForm = ref({
  username: '',
  password: ''
});
const registerForm = ref({
  username: '',
  password: '',
  phone: ''
});

    const onLogin = async () => {
               try{
                const res = await Login(loginForm.value);
                const { token,openId,code  } = res.data;
                userStore.setToken(token);
                userStore.setUserInfo({ openId });
                if(code === 200){
                    uni.showToast({
                   title: '登录成功',
                   icon: 'success'
                });
                setTimeout(()=>{
                  uni.switchTab({
                    url: '/pages/index/index'
                })
                },1000)
                }else{
               uni.showToast({
                 title: '登录失败',
                icon: 'none'
                 });
                }
               
               }catch(error){
               
                 console.log(error);
               }
            
           
    }
 const onRegister = async () => {
               try{
            //     const res = await Register(registerForm.value);
            //     console.log("res",res)
            //     const { code  } = res.data;
            
            //     if(code === 200){
            //         uni.showToast({
            //        title: '注册成功',
            //        icon: 'success'
            //     });
            //     setTimeout(()=>{
            //       isLogin.value = true
            //     },1000)
            //     }else{
            //    uni.showToast({
            //      title: '注册失败',
            //     icon: 'none'

            //      });
            //     }
            
                    uni.showToast({
                   title: '注册成功',
                   icon: 'success'
                });
                setTimeout(()=>{
                  uni.switchTab({
                    url: '/pages/index/index'
                })
                },1000)

               }catch(error){
                 console.log(error);
               }
            }
</script>


<style lang="scss" scoped>
.content{
    height: 100vh;
    background: rgba(145, 211, 244);
     display: flex;
     flex-direction: column;
    justify-content: center;
    align-items: center;
    .top{
    height: 15vh;
    img{
        width: 100px;
        height: 100px;
    }
   
}
.middle{
    width: 60vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: #cc6161; */
    .form {
    height: 80%;
    width: 100%;
    /* background-color: #fff; */
    display: flex;
    justify-content: center;
    .uni-input{
    height: 7vh;
    width: 50vw;
    margin-bottom: 3vh;
    background-color: rgba(98, 188, 247,0.8);
    border-radius: 20px;
    box-shadow: #a79d9d 1px 2px 3px ;
  
}
}
}
}



.tips{
    margin-bottom: 4vh;
    font-size: 14px;
    color: #fff;
}
.btn>button{
     border-radius: 20px;
     width: 50%;
     height: 6vh;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: #fff;
     color: #67cccc;
	 font-size: 20rpx;
     
}

</style>

