import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { css, style } from 'glamor'
import styled from 'styled-components'
import { AnimatePresence, motion } from "framer-motion";
import { changeDrawer } from 'store/gotSlice';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store';
import { useNavigate } from 'react-router-dom'
import { HomeList } from 'components/HomeList'
import snowClose from '../assets/images/snowClose.png'
import daeClose from '../assets/images/daeClose.png'
import robClose from '../assets/images/robClose.png'
import sansaClose from '../assets/images/sansaClose.png'
import oberinClose from '../assets/images/oberinClose.png'
import cerseaClose from '../assets/images/cerseaClose.png'
import jofryClose from '../assets/images/jofryClose.png'
import jaimeClose from '../assets/images/jaimeClose.png'
import tirionClose from '../assets/images/tirionClose.png'
import nedClose from '../assets/images/nedClose.png'
import aryaClose from '../assets/images/aryaClose.png'
import katClose from '../assets/images/katClose.png'

export const Home = (props: any) => {
  const itemsS = [
    {
      name: 'John Snow',
      close: snowClose,
      open: false,
      id: 1
    },
    {
      name: 'Daenerys Targaryen',
      close: daeClose,
      open: false,
      id: 2
    },
    {
      name: 'Rob Stark',
      close: robClose,
      open: false,
      id: 0
    },
    {
      name: 'Sansa Stark',
      close: sansaClose,
      open: false,
      id: 1
    },
    {
      name: 'Oberin Martell',
      close: oberinClose,
      open: false,
      id: 2
    },
    {
      name: 'Sersea Lannister',
      close: cerseaClose,
      open: false,
      id: 0
    },
    {
      name: 'Joffry Baratheon',
      close: jofryClose,
      open: false,
      id: 1
    },
    {
      name: 'Jaime Lannister',
      close: jaimeClose,
      open: false,
      id: 2
    },
    {
      name: 'Tyrion Lannister',
      close: tirionClose,
      open: false,
      id: 0
    },
    {
      name: 'Ned Stark',
      close: nedClose,
      open: false,
      id: 1
    },
    {
      name: 'Arya Stark',
      close: aryaClose,
      open: false,
      id: 2
    },
    {
      name: 'Katelyn Stark',
      close: katClose,
      open: false,
      id: 0
    },
  ]
  return (
    <main>
      <div className={'container-got smooth-border'}>
        <h2 className='display-2 text-center text-dark got-title'>Hall of Faces</h2>
        <HomeList itemsS={itemsS}></HomeList>
      </div>
    </main>
  )
}