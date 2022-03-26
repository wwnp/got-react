import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import './components/Loader/Loader.style.css';
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
import { FindPage } from 'containers/FindPage';
import { About } from 'containers/About';
import { Single } from 'containers/Single';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='find' element={<FindPage />} />
          <Route path='about' element={<About />} />
          <Route path='character/:id' element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);