// import Vue from 'vue'
import {createRouter, createWebHashHistory} from "vue-router"
// import Router from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

// Vue.use(Router);
const routes = [
    {
        path:'/',
        name:'home',
        component:Home,
        redirect:'index',
        children:[
            {
                path:'index',
                name:'index',
                component:Index,  
            },{
                path:'product/:id',
                name:'product',
                component:Product,  
            },{
                path:'detail/:id',
                name:'detail',
                component:Detail,  
            }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login,
    },
    {
        path:'/cart',
        name:'cart',
        component:Cart,
    },
    {
        path:'/order',
        name:'order',
        component:Order,
        children:[
            {
                path:'list',
                name:'order-list',
                component:OrderList,  
            },{
                path:'confirm',
                name:'order-confirm',
                component:OrderConfirm
            },{
                path:'pay',
                name:'order-pay',
                component:OrderPay
            },{
                path:'alipay',
                name:'alipay',
                component:AliPay,
            }
        ]
    }
];
// 3. 创建路由实例
const router = createRouter({
    // 4. 采用hash 模式
    history: createWebHashHistory(),
    // 采用 history 模式
    // history: createWebHistory(),
    routes, //使用上方定义的路由配置
  });
export default router



// export default new Router({
    // routes:[
    //     {
    //         path:'/',
    //         name:'home',
    //         component:Home,
    //         children:[
    //             {
    //                 path:'/index',
    //                 name:'index',
    //                 component:Index,  
    //             },{
    //                 path:'/product/:id',
    //                 name:'product',
    //                 component:Product,  
    //             },{
    //                 path:'/detail/:id',
    //                 name:'detail',
    //                 component:Detail,  
    //             }
    //         ]
    //     },
    //     {
    //         path:'/cart',
    //         name:'cart',
    //         component:Cart,
    //     },
    //     {
    //         path:'/order',
    //         name:'order',
    //         component:Order,
    //         children:[
    //             {
    //                 path:'/list',
    //                 name:'order-list',
    //                 component:OrderList,  
    //             },{
    //                 path:'/confirm',
    //                 name:'order-confirm',
    //                 component:OrderConfirm
    //             },{
    //                 path:'/pay',
    //                 name:'order-pay',
    //                 component:OrderPay
    //             }
    //         ]
    //     }
    // ]
// });