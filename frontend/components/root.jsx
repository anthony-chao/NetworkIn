import React from 'react'
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
// import App from "./App";
import Test from './test';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Test /> 
    </HashRouter>
  </Provider>
);

export default Root;