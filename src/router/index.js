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