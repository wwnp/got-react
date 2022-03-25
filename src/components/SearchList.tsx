import React from 'react'
import { Row } from 'react-bootstrap'
import { SearchItem } from './SearchItem'

export const SearchList = ({ posts }: any) => {
  return (
    <Row style={{rowGap: '1rem'}}>
      {
        posts.map((item: any) => {
          return (
            <SearchItem
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
