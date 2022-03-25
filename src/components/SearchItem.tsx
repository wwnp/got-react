import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';

export const SearchItem = ({ id, fullName, imageUrl, }: any) => {
  return (
    <Col xs={12} sm={3}>
      <motion.div
        initial={{
         opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: .75
        }}
      >
        <Card className='bg-dark'>
          <Card.Img variant="top" src={imageUrl} style={{ height: '250px' }} />
          <Card.Body>
            {/* <Card.Title className='text-white'></Card.Title> */}
            <Button variant="secondary" style={{ width: '100%', minHeight: '75px' }}>{fullName}</Button>
          </Card.Body>
        </Card>

      </motion.div>
    </Col>


  )
}
