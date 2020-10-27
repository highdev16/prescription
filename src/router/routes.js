import Home from 'pages/Home';
import Login from 'pages/Auth/login';
import Signup from 'pages/Auth/signup';

import Error404 from 'pages/Error/404';

import MainLayout from 'layouts/MainLayout';
import BasicLayout from 'layouts/BasicLayout';

const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        name: 'home',
        path: '',
        component: Home
      },
      {
        name: 'login',
        path: 'login',
        component: Login
      },
      {
        name: 'signup',
        path: 'signup',
        component: Signup
      }
    ]
  },
  {
    path: '/dashbaord',
    component: MainLayout,
    children: []
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: Error404
  }
]

export default routes
