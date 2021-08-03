import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => err);
};
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalReplace.call(this, location, onResolve, onReject);
    return originalReplace.call(this, location).catch(err => err);
};


const routes = [{
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/register/Register.vue')
    }, {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/login/Login.vue')
    },
    {
        path: '',
        component: Layout,
        children: [{
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Xmall商城',
                index: '/'
            },
        }, {
            path: '/detail',
            name: 'Detail',
            component: () =>
                import ('../views/detail/Detail.vue'),
            meta: {
                title: 'Xmall商城',
                index: '/detail'
            }
        }, {
            path: '/all',
            name: 'All',
            component: () =>
                import ('../views/all/All.vue'),
            meta: {
                title: 'Xmall商城',
                index: '/all'
            }
        }, {
            path: '*',
            name: '*',
            component: () =>
                import ('../views/404/404.vue'),
            meta: {
                title: 'Xmall商城',
                index: '*'
            }
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
export default router