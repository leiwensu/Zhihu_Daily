import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Daily from '@/components/Daily'
import Details from '@/components/Details'
import DailyList from '@/components/DailyList'
Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home/',
        name: 'Home',
        component: Home
    }, {
        path: '/daily/',
        name: 'Daily',
        component: Daily
    }, {
        path: '/about/',
        name: 'About',
        component: About
    }, {
        path: "/details/:id",
        name:'Details',
        component: Details
    },{
        path: "/daily/:id",
        name:'DailyList',
        component: DailyList
    }]
})