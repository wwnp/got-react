import React from 'react'
import { Row } from 'react-bootstrap'
import { SearchItem } from './SearchItem'

export const SearchList = ({ posts }: any) => {
  return (
    <Row style={{ rowGap: '1rem' }}>
      {
        posts.map((item: any, index: number) => {
          return (
            <SearchItem
              index={index}
              key={item.id}
              id={item.id}
              fullName={item.fullName}
              imageUrl={item.imageUrl}
            >
            </SearchItem>
          )
        })
      }
    </Row>
  )
}
