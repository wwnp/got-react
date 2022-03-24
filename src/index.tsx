import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import './components/Drawer/Drawer.style.scss';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './containers/Home';
import { store } from './store'
import { Provider } from 'react-redux'
import { Search } from 'containers/Search';
import { About } from 'containers/About';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);