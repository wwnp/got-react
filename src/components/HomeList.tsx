import { style } from 'glamor'
import React from 'react'
import { Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import gotLast from '../assets/images/gotLast.jpg'
import { motion } from 'framer-motion'
import { listVariants2 } from 'motion-animations'

export const HomeList = ({ itemsS }: any) => {
  const navigate = useNavigate()
  return (
    <Row className='flex-wrap'>
      {
        itemsS.map((item: any, index: number) => {
          let styles = null
          let backPos = null
          let left = null
          backPos = '45%'
          left = '36.5%'
          styles = {
            CardCustom: style({
              width: '100%',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              background: `url(${item.close}) no-repeat`,
              backgroundPosition: `right ${backPos} bottom 52.5% `,
              backgroundSize: '135px',
              ":hover": {
                background: `url(${item.open ? item.open : item.close}) no-repeat`,
                backgroundSize: '135px',
                backgroundPosition: `right ${backPos} bottom 52.5%`,
              },
              ":hover h2": {
                padding: '5px',
                transition: 'background .7s ease-in-out, opacity .7s ease-in-out',
                left: left,
                top: '87.5%',
                position: 'absolute',
                opacity: 1,
                background: ' rgba(0, 0, 0, 0.5)',
                borderRadius: '5%',
                maxWidth: '100px'
              }
            })
          }
          return (
            <div
              onClick={() => navigate('character/' + item.id)}
              className='col-got' key={index + Date.now()}
              style={{
                padding: '0',
              }}>
              <div className='card-wrapper' style={{
                background: `url(${gotLast}) center center no-repeat`,
                backgroundSize: '290px',
              }}>
                <motion.div
                  className="card-custom"
                  {...styles.CardCustom}
                  variants={listVariants2}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  transition={{ delay: .85 }}
                >
                  <h2>{item.name}</h2>
                </motion.div>
              </div>
            </div>
          )
        })
      }
    </Row>
  )
}
