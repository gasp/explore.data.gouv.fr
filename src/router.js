import Vue from 'vue'
import Router from 'vue-router'
import TableView from './views/TableView.vue'
import AppCarburant from './views/AppCarburant.vue'
import AppDvf from './views/AppDvf.vue'

Vue.use(Router)

export default new Router({  
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: TableView
    },
    {
      path: '/prix-carburants',
      name: 'AppCarburant',
      component: AppCarburant
    },
    {
      path: '/dvf',
      name: 'AppDvf',
      component: AppDvf
    },
  ]
})
