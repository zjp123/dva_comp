import React from 'react';
import {renderRoutes} from 'react-router-config'
import config from './config' // 整个项目路由与组件的关联配置
import Catchapp from '../../../components/Catchapp' // 外面包了一层错误处理就是首页显示组件




const Index = () => <Catchapp>{renderRoutes(config)}</Catchapp>
export default Index
