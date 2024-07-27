import request from '@/utils/request'

/**
 * @description 注册
 * @param {*} data 
 */
export function Register(data) {
    return request({
        url: '/users/register',
        method: 'post',
        data
    })
}


/**
 * 
 * @description 登录
 * @param {*} data
 */
export function Login(data) {
    return request({
        url: '/users/login',
        method: 'post',
        data
    })
}


