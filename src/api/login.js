import axios from "axios";
const instance = axios.create({
    baseURL:process.env.VUE_APP_BASEURL,
    withCredentials:true
});
export function login(data){
    return instance({
        url:"/login",
        method:"post",
        data
    });
}

export function sendsms(data){
    return instance({
        url:"/sendsms",
        method:"post",
        data
    });
}

export function register (data){
    return instance({
        url:"/register",
        method:"post",
        data
    });
}