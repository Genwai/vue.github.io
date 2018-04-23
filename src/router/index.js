import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import DeatailPage from '../page/detail'
import AnalysisPage from '../page/detail/analysis'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/detail',
            component: DeatailPage,
            redirect: '/detail/analysis',
            children: [{
                path: 'analysis',
                component: AnalysisPage
            }]
        }
    ]
})