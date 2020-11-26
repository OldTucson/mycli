const Vue = require('vue')
const Router = require('vue-router')
const home = resolve => require(['@/pages/home'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
