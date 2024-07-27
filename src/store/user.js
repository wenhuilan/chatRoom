/**
 * @description 用户信息
 */

 import { defineStore } from 'pinia'

 export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
       openid: '',
    },
    token: '',
  }),
  getters: {
      doubleAge:(state)=>state.userInfo.age * 2,
  },
  actions: {
    setUserInfo(data) {
      this.userInfo = data
    },
    setToken(data) {
      this.token = data
    },
  },
})
