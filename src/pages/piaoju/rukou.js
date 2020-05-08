import React from 'react';

// import models from '../../model/index';
import piaojumodels from './models/index';
import Root from '../../../root';

import Routes from './router/index'

const container = () => <Routes/>

Root({
  models:[
    // ...models,
    ...piaojumodels
  ],
  container
})
