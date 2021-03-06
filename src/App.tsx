import { Drawer } from "components/Drawer/Drawer";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { changeDrawer } from "store/gotSlice";
import tar from './assets/images/tar.png'

function App() {
  const dispatch = useDispatch()
  return (
    <>
      <img src={tar} className={'tar-logo'} alt='tar' onClick={() => dispatch(changeDrawer(true))} />
      <Drawer />
      <Outlet></Outlet>
    </>
  );
}
export default App;
