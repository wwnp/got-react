import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { variantsOpacity, variants_X_0_to_100, variants_X_100_to_0, variants_X_M100_to_0 } from '../../motion-animations/index';
import { changeDrawer } from 'store/gotSlice';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const closeBtnSize = '20px'
export const Drawer = () => {
  const drawer = useSelector((state: RootState) => state.got.drawer)
  const dispatch = useDispatch()
  return (
    <AnimatePresence>
      {drawer && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants_X_M100_to_0}
            className="Drawer"
          >
            <div style={{ height: closeBtnSize, marginBottom: '5px' }}>
              <AiOutlineClose
                size={closeBtnSize}
                role="button"
                className='float-end'
                onClick={() => dispatch(changeDrawer(false))}
              >
              </AiOutlineClose>
            </div>

            <ul>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
                  onClick={() => dispatch(changeDrawer(false))}
                >Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
                  onClick={() => dispatch(changeDrawer(false))}
                >About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/search'
                  className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
                  onClick={() => dispatch(changeDrawer(false))}
                >Search
                </NavLink>
              </li>
            </ul>
          </motion.div>
          <motion.div
            role={'button'}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsOpacity}
            transition={{ type: "ease-in-out", duration: 0.1 }}
            onClick={() => dispatch(changeDrawer(false))}
            className="Backdrop"
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
