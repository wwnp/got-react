import React, { useEffect, useState } from 'react'
import { HomeList } from 'components/HomeList'
import snowClose from '../assets/images/snowClose.png'
import snowOpen from '../assets/images/snowOpen.png'
import daeClose from '../assets/images/daeClose.png'
import robClose from '../assets/images/robClose.png'
import sansaClose from '../assets/images/sansaClose.png'
import sansaOpen from '../assets/images/sansaOpen.png'
import oberinClose from '../assets/images/oberinClose.png'
import cerseaClose from '../assets/images/cerseaClose.png'
import jofryClose from '../assets/images/jofryClose.png'
import jaimeClose from '../assets/images/jaimeClose.png'
import tyrionClose from '../assets/images/tyrionClose.png'
import tyrionOpen from '../assets/images/tyrionOpen.png'
import nedClose from '../assets/images/nedClose.png'
import aryaClose from '../assets/images/aryaClose.png'
import aryaOpen from '../assets/images/aryaOpen.png'
import katClose from '../assets/images/katClose.png'

const itemsS = [
  {
    name: 'John Snow',
    close: snowClose,
    open: snowOpen,
    id: 2
  },
  {
    name: 'Daenerys Targaryen',
    close: daeClose,
    open: false,
    id: 0
  },
  {
    name: 'Rob Stark',
    close: robClose,
    open: false,
    id: 11
  },
  {
    name: 'Sansa Stark',
    close: sansaClose,
    open: sansaOpen,
    id: 4
  },
  {
    name: 'Oberyn Martell',
    close: oberinClose,
    open: false,
    id: 39
  },
  {
    name: 'Cersei Lannister',
    close: cerseaClose,
    open: false,
    id: 9
  },
  {
    name: 'Joffrey Baratheon',
    close: jofryClose,
    open: false,
    id: 13
  },
  {
    name: 'Jamie Lannister',
    close: jaimeClose,
    open: false,
    id: 8
  },
  {
    name: 'Tyrion Lannister',
    close: tyrionClose,
    open: tyrionOpen,
    id: 14
  },
  {
    name: 'Ned Stark',
    close: nedClose,
    open: false,
    id: 6
  },
  {
    name: 'Arya Stark',
    close: aryaClose,
    open: aryaOpen,
    id: 3
  },
  {
    name: 'Catelyn  Stark',
    close: katClose,
    open: false,
    id: 10
  },
]
export const Home = (props: any) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main>
      <div className={'container-got smooth-border'}>
        <h2 className='display-2 text-center text-dark got-title'>Hall of Faces</h2>
        <HomeList itemsS={itemsS}></HomeList>
      </div>
    </main>
  )
}