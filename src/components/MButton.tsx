import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import { Button } from 'react-bootstrap'

const ButtonComp = forwardRef((props: any, ref: any) => {
  const {
    children,
    variant,
    onClick
  } = props
  return (
    <Button
      ref={ref}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})
export const MButton = motion(ButtonComp)