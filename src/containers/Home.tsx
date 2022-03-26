import React from 'react'
import bgGot from '../assets/images/bg-got.jpg'
import closeSnow from '../assets/images/gotSnow.jpg'
import openSnow from '../assets/images/openSnow1.png'
// import openSnow4 from '../assets/images/openSnow4.png'
// import openSnow3 from '../assets/images/openSnow3.png'
import closeDaynerys from '../assets/images/closeDaynerys.jpg'
import gotRob from '../assets/images/gotRob.jpg'
import got from '../assets/images/got.jpg'


import { Container, Row, Col } from 'react-bootstrap';
import { css, style } from 'glamor'
import styled from 'styled-components'
import { AnimatePresence, motion } from "framer-motion";
import { changeDrawer } from 'store/gotSlice';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store';
import { useNavigate } from 'react-router-dom'
import { HomeList } from 'components/HomeList'

export const Home = (props: any) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const drawer = useSelector((state: RootState) => state.got.drawer)
  const items = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 4]
  const itemsS = [
    {
      name: 'John Snow',
      close: closeSnow,
      open: openSnow,
      id: 1
    },
    {
      name: 'Rob Stark',
      close: gotRob,
      open: false,
      id: 2
    },
    {
      name: 'Daenerys Targaryen',
      close: closeDaynerys,
      open: false,
      id: 0
    },
    {
      name: 'John Snow',
      close: closeSnow,
      open: openSnow,
      id: 1
    },
    {
      name: 'Rob Stark',
      close: gotRob,
      open: false,
      id: 2
    },
    {
      name: 'Daenerys Targaryen',
      close: closeDaynerys,
      open: false,
      id: 0
    },
    {
      name: 'John Snow',
      close: closeSnow,
      open: openSnow,
      id: 1
    },
    {
      name: 'Rob Stark',
      close: gotRob,
      open: false,
      id: 2
    },
    {
      name: 'Daenerys Targaryen',
      close: closeDaynerys,
      open: false,
      id: 0
    },
    {
      name: 'John Snow',
      close: closeSnow,
      open: openSnow,
      id: 1
    },
    {
      name: 'Rob Stark',
      close: gotRob,
      open: false,
      id: 2
    },
    {
      name: 'Daenerys Targaryen',
      close: closeDaynerys,
      open: false,
      id: 0
    },

  ]
  // onClick={() => dispatch(changeDrawer())}
  return (
    <main>
      <div className={'container-got smooth-border'}>
        <h2 className='display-2 text-center text-dark got-title'>Hall of Faces</h2>
        <HomeList itemsS={itemsS}></HomeList>
      </div>
    </main>
  )
}