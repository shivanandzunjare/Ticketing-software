//import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/header.css"
import store from "./store/store";
import App from './App';
import {  RouterProvider } from 'react-router-dom';
import customRouter from "./Routing";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
          <RouterProvider router={customRouter} >
              <App/>
          </RouterProvider>
      </Provider>
 
);


