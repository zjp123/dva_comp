import React from 'react';
import Loadable from 'react-loadable';
import LoadingComponent from '../../../components/Loading/index';
import NotFound from '../../../components/Notfound/notfound';



import LoginB from '../b/b';
import LoginA from '../a/a';
import Login from '../index';



export const routeConfig = [
  {
    path: '/login',
    // exact: true,
    component: Login,
    routes: [
      {
        path: '/login/page1',
        // component: LoginA,
        exact: true,
        component: Loadable({
          loader:()=> import('../a/a'),
          loading:LoadingComponent
        }),
      },
      {
        path: '/login/page2',
        exact: true,
        // component: LoginB,
        component: Loadable({
          loader:()=> import('../b/b'),
          loading:LoadingComponent
        }),
      }
    ],
  },
  // {
  //   component: NotFound,

  // }
  
];

export default routeConfig;