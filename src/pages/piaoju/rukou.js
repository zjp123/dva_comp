import React from 'react';

// import models from '../../model/index';
import piaojumodels from './models/index'; // 数组module
import Root from '../../../root';
console.log(piaojumodels, 'piaojumodelspiaojumodels');
import Routes from './router/index'
console.log(Routes, 'RoutesRoutes');

const container = () => <Routes/>

Root({
  models:[
    // ...models,
    ...piaojumodels
  ],
  container
})
