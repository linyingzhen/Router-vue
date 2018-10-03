import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstRoute from '@/components/FirstRoute'
import FirstRouteChild from '@/components/FirstRouteChild'
import One from '@/components/One'
import OneChild from '@/components/OneChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/firstroute/:name',
    	name: 'FirstRoute',
    	component: FirstRoute,
      children: [
        {
          path: 'child',
          component: FirstRouteChild
        }
      ]
    },
    {
      path: '/one/:id',
      name: 'One',
      component: One,
      children: [
        {
          path: 'child',
          component: OneChild
        }
      ]
    }
  ]
})
