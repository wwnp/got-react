import React from 'react'
import bgGot from '../assets/images/bg-got.jpg'
import closeSnow from '../assets/images/gotSnow.jpg'
import openSnow from '../assets/images/openSnow1.png'
// import openSnow4 from '../assets/images/openSnow4.png'
// import openSnow3 from '../assets/images/openSnow3.png'
import closeDaynerys from '../assets/images/closeDaynerys.jpg'
import gotRob from '../assets/images/gotRob.jpg'
import got from '../assets/images/got.jpg'
import gotLast from '../assets/images/gotLast.jpg'

import { Container, Row, Col } from 'react-bootstrap';
import { css, style } from 'glamor'
import styled from 'styled-components'
import { AnimatePresence, motion } from "framer-motion";
import { changeDrawer } from 'store/gotSlice';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store';

export const Home = (props: any) => {
  const dispatch = useDispatch()
  const drawer = useSelector((state: RootState) => state.got.drawer)
  const items = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 4]
  const itemsS = [
    {
      name: 'John Snow',
      close: closeSnow,
      open: openSnow
    },
    {
      name: 'Rob Stark',
      close: gotRob,
      open: false
    },
    {
      name: 'Daenerys Targaryen',
      close: closeDaynerys,
      open: false
    },

  ]
  // onClick={() => dispatch(changeDrawer())}
  return (
    <main>
      <div className={'container-got smooth-border '}>
        <Row className='flex-wrap'>
          {
            itemsS.map((item, index) => {
              let styles = null
              let backPos = null
              let left = null
              backPos = '45%'
              left = '35.5%'
              styles = {
                CardCustom: style({
                  width: '100%',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  background: `url(${item.close}) no-repeat`,
                  backgroundPosition: `right ${backPos} bottom 75% `,
                  backgroundSize: '135px',
                  ":hover": {
                    background: `url(${item.open !== false ? item.open : item.close})  no-repeat`,
                    backgroundSize: '135px',
                    backgroundPosition: `right ${backPos} bottom 75%`,
                  },
                  ":hover h2": {
                    transition: 'background .7s ease-in-out, opacity .7s ease-in-out',
                    left: left,
                    top:'50%',
                    position:'absolute',
                    opacity: 1,
                    background: ' rgba(0, 0, 0, 0.3)',
                    borderRadius: '5%',
                    maxWidth: '150px'
                  }
                })
              }
              return (
                <div className='col-got' key={index + Date.now()} style={{
                  padding: '0',
                }}>
                  <div className='card-wrapper' style={{
                    background: `url(${gotLast}) center center no-repeat`,
                    backgroundSize: '290px',
                  }}>
                    <div className="card-custom"  {...styles.CardCustom}>
                      <h2>{item.name}</h2>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Row>
      </div>
    </main>
  )
}