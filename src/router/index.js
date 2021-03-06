import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import User from '@/views/User.vue'
import Category from '@/views/Category.vue'
import ProductList from '@/views/ProductList.vue'
import Login from '@/views/Login.vue'
import Demo from '@/views/Demo.vue'
import Order from '@/views/Order.vue'
import Address from '@/views/Address.vue'
import Setting from '@/views/Setting.vue'
import About from '@/views/About.vue'
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
        path: '/category',
        name: 'category',
        component: Category
    },
    {
        path: '/productList',
        name: 'productList',
        component: ProductList
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }, 
    {
        path:'/demo',
        name: 'demo',
        component: Demo
    }, {
        path: '/order',
        name: 'order',
        component: Order
    }, {
        path: '/setting',
        name: 'setting',
        component: Setting
    }, {
        path: '/about',
        name: 'about',
        component: About
    }, {
        path: '/address',
        name: 'address',
        component: Address
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router