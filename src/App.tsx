import { Drawer } from "components/Drawer/Drawer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Outlet
} from "react-router-dom";
import { changeDrawer } from "store/gotSlice";
import tar from './assets/images/tar.png'

function App() {
  const [drawer, setDrawer] = useState(false);
  const dispatch = useDispatch()
  return (
    <div className="wrapper">
      <img src={tar} className={'tar-logo'} alt='tar' onClick={() => dispatch(changeDrawer(456))} />
      <Drawer />
      <Outlet></Outlet>
      <footer></footer>
    </div>
  );
}

export default App;
