import React from 'react';
import Loadable from 'react-loadable';
import LoadingComponent from '../../../components/Loading/index';
// import discountRoutes from '../../discount/routes/config'; // 贴现模块的路由配置
import loginRoutes from '../../login/router/config'; // 秒贴2.0路由配置

/*
 * 需要服务端首屏渲染的页面放在这里, 不参与服务端渲染的通过 loadable 引入，可以按需加载
 * 首页、登录、注册、秒贴 走服务端渲染
 */
import Shouye from '../index';
import Shangye from '../shangye/shangye';
import Yinhang from '../yinhang/yinhang';
// import Login from '../components/login';
import Register from '../../register/register';
import NotFound from '../../../components/Notfound/notfound';


export const routeConfig = [
  
  {
    path: '/register',
    component: Register,
  },
  ...loginRoutes,
  // 以下是平台部分，只承担平台基础服务
  {
    path: '/*',
    component: Shouye,
    routes: [
      {
        path: '/',
        exact:true,
        component: Shangye,
        // component: Loadable({
        //   loader:()=> import('../shangye/shangye'),
        //   loading:LoadingComponent
        // }),
      },
      {
        // exact:true,
        // component: NotFound,
        path: '/*',
        component: Loadable({
          loader:()=> import('../../../components/Notfound/notfound'),
          loading:LoadingComponent
        }),
      },
    ],
  },


];

export default routeConfig;