import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import UserView from '../views/UserView'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',         
      redirect: '/news'    
    },
    {
      path: '/news',          // url 주소
      component: NewsView     // 표시될 컴포넌트(페이지)
    },
    {
      path: '/ask',
      component: AskView
    },
    {
      path: '/jobs',
      component: JobsView
    },
    {
      path: '/uers',
      component: UserView
    },
  ]
});

