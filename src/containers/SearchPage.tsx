import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../components/Search';
import { Container, Row, Col } from 'react-bootstrap';
import { RootState } from 'store';
import axios from 'axios';
import { setPosts, setFilteredPosts } from 'store/gotSlice';
import { PaginationComp } from './../components/Pagination';
import { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getValueFromAddress } from './../auxiliary';
import { PER_PAGE } from '../auxiliary'
const queryString = require('query-string');

const NORMAL = 'NORMAL'
const SEARCH = 'SEARCH'

export const SearchPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const parsed = queryString.parse(location.search);
  const posts = useSelector((state: RootState) => state.got.posts)
  // const filteredPosts = useSelector((state: RootState) => state.got.filteredPosts)

  const [page, setPage] = useState(+parsed.page || 1);
  const [search, setSearch] = useState(parsed.search || '');

  const handleSearch = (str: string) => {
    // dispatch(setFilteredPosts(posts.filter(post => post.fullName.toLowerCase().trim().includes(str.toLowerCase().trim()))))
    setPage(1)
    navigate({
      pathname: '/search',
      search: `?page=${page}&search=${str}`
    })
  }

  const [outPosts, setOutPosts] = useState(posts)

  useEffect(() => {
    async function fetchCharacters() {
      const response = await axios.get('https://thronesapi.com/api/v2/Characters')
      const { data } = response
      dispatch(setPosts(data))
      // dispatch(setFilteredPosts(data))
    }
    fetchCharacters()
  }, [])

  const indexLast = page * PER_PAGE
  const indexFirst = indexLast - PER_PAGE

  useEffect(() => {
    if (search) {
      console.log(456)
      setOutPosts(posts.filter(post => post.fullName.toLowerCase().includes(search.toLowerCase().trim())).slice(indexFirst, indexLast))
      navigate(`/search?page=${page}&search=${search}`)
    } else {
      console.log(789)
      setOutPosts(posts.slice(indexFirst, indexLast))
      navigate(`/search?page=${page}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, posts, search])
  console.log(outPosts)
  // useEffect(() => {
  //   const indexLast = page * PER_PAGE
  //   const indexFirst = indexLast - PER_PAGE
  //   // setOutPosts(filteredPosts.slice(indexFirst, indexLast))
  //   if (search) {
  //     dispatch(setFilteredPosts(posts.filter(post => post.fullName.toLowerCase().includes(search.toLowerCase().trim())).slice(indexFirst, indexLast)))
  //     navigate(`/search?page=${page}&search=${search}`)
  //   } else {
  //     dispatch(setFilteredPosts(posts.slice(indexFirst, indexLast)))
  //     navigate(`/search?page=${page}`)
  //   }
  //   setOutPosts(filteredPosts)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page])

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12}>
          <h1 className='text-center'>Search</h1>
          <Search handleSearch={handleSearch} setSearch={setSearch} search={search}></Search>
          {
            outPosts.map(post => {
              return <p>{post.fullName}</p>
            })
          }
        </Col>
      </Row>
      <Row>
        <PaginationComp
          setPage={setPage}
          page={page}
          postsLength={
            search ? posts.filter(post => post.fullName.toLowerCase().includes(search.toLowerCase().trim()))?.length : posts?.length}
        >
        </PaginationComp>
      </Row>
    </Container>
  )
}
