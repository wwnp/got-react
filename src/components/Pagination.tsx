import { PER_PAGE } from 'auxiliary'
import React from 'react'
import { Row } from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'

export const PaginationComp = ({ setPage, page, postsLength }: any) => {
  let pagesNum = Math.ceil(postsLength / PER_PAGE)
  let temp = []
  for (let number = 1; number <= pagesNum; number++) {
    temp.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => {
          setPage(number)
        }}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Row >
      <Pagination className='justify-content-center' size='lg'>{temp}</Pagination>
    </Row>
  )
}
