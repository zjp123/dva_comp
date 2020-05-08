import React from 'react';
import dva from 'dva';
import { routerRedux } from 'dva/router';
import createLoading from 'dva-loading';
// import createBrowserHistory from 'history/createBrowserHistory';
import commonModels from './src/model/index';
const { ConnectedRouter } = routerRedux;

const createBrowserHistory =  require("history").createBrowserHistory

// 加载 scss

/*
 * 创建 app
 * https://dvajs.com/api
 */
const myApp = dva({
  history: createBrowserHistory(),
});

// 使用 dva 中间件
myApp.use(createLoading());

// 在 production 构建时，参数如果是 Container，会构建失败，故这里传入小写 container， 然后在方法体中定义大写的 Container
const Root = ({ models = [], container }) => {
  // 设置 redux 中 的 action 和 reducer ，dva 中是以 models 形式设置的
  [...commonModels, ...models].forEach(model => {
    myApp.model(model.default || model);
  });

  const Container = container;
  /**
   * dva 源码中会调用 router，传入参数 { app, history: app._history, ...extraProps }
   * function getProvider(store, app, router) {
   * const DvaRoot = extraProps => (
   * <Provider store={store}>
   * { router({ app, history: app._history, ...extraProps }) }
   * </Provider>
   * );
   * return DvaRoot;
   * }
   * 后续根据实际扩展参数 app 和 history 的用法
   */
  myApp.router(({ app, history }) => {
    console.log('params: app--------------', app);
    console.log('params: history--------------', history);

    return (
      <ConnectedRouter history={history}>
        <Container />
      </ConnectedRouter>
    );
  });

  myApp.start('#root');
};

export default Root;