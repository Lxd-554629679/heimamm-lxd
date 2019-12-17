// 导入 vue-router
import VueRouter from 'vue-router'
import Vue from "vue"
import login from "../views/login/login.vue"
import index from "../views/index/index.vue"
//嵌套路由
import chart from "../views/index/chart/chart.vue"
import enterprise from "../views/index/enterprise/enterprise.vue"
import question from "../views/index/question/question.vue"
import subject from "../views/index/subject/subject.vue"
import user from "../views/index/user/user.vue"
//注册 vue-router
Vue.use(VueRouter)
// 实例化
const routes = [{
        path: '/login',
        component: login
    },
    {
        path: '/index',
        component: index,
        children: [
        {
            path: 'chart',
            component: chart,
        }, 
        {
            path: 'enterprise',
            component: enterprise,
        }, 
        {
            path: 'question',
            component: question,
        }, 
        {
            path: 'subject',
            component: subject,
        }, 
        {
            path: 'user',
            component: user,
        }, 
    ]
    },
]
const router = new VueRouter({
    //这里就是路由的配制项
    routes
    //  [
    //  {
    // path: '/这里可给路由地址一个名字',
    // component:  //这里要填入一个组件名(填入import的名字)，也就是上面地址对应的组件
    //  }
    //   ]
})
export default router