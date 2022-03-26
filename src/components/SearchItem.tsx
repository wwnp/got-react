import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { listVariants } from './../motion-animations/index';


export const SearchItem = ({ id, fullName, imageUrl,index }: any) => {
  const navigate = useNavigate()
  return (

    <Col xs={12} sm={6} md={4} lg={3}>
      <motion.div
        variants={listVariants}
        initial='hidden'
        animate='visible'
        custom={index}
      // initial={{
      //  opacity: 0
      // }}
      // animate={{
      //   opacity: 1
      // }}
      transition={{
        duration: .75
      }}
      >
        <Card className='bg-dark shadow-lg '>
          <Card.Img variant="top" src={imageUrl} style={{ height: '250px' }} />
          <Card.Body>
            <Button className='find__charcard UnifrakturCook-family fz-15 text-hover-shadow box-shadow-hover' onClick={() => navigate(`/character/${id}`)} variant="secondary" style={{ width: '100%', minHeight: '75px' }}>{fullName}</Button>
          </Card.Body>
        </Card>

      </motion.div>
    </Col>


  )
}
