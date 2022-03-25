import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../components/Search';
import { Container, Row, Col } from 'react-bootstrap';
import { RootState } from 'store';
import axios from 'axios';
import { setPosts, setFilteredPosts, setLoading } from 'store/gotSlice';
import { PaginationComp } from './../components/Pagination';
import { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getValueFromAddress } from './../auxiliary';
import { PER_PAGE } from '../auxiliary'
import { SearchList } from 'components/SearchList';
const queryString = require('query-string');

const NORMAL = 'NORMAL'
const SEARCH = 'SEARCH'

export const SearchPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const parsed = queryString.parse(location.search);
  const posts = useSelector((state: RootState) => state.got.posts)
  const loading = useSelector((state: RootState) => state.got.loading)
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
      dispatch(setLoading(false))
    }
    dispatch(setLoading(true))

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
    <Container className='h-100'>
      {
        loading
          ? <h1>Loading...</h1>
          : (
            <Row className='justify-content-between flex-column h-100'>
              <Col xs={12} >
                <h1 className='text-center'>Search</h1>
                <Search handleSearch={handleSearch} setSearch={setSearch} search={search} setPage={setPage}></Search>
                <SearchList posts={outPosts}></SearchList>
              </Col>
              <Col xs={12} >
                <PaginationComp
                  setPage={setPage}
                  page={page}
                  postsLength={
                    search ? posts.filter(post => post.fullName.toLowerCase().includes(search.toLowerCase().trim()))?.length : posts?.length}
                >
                </PaginationComp>
              </Col>
            </Row>
          )
      }
    </Container>
  )
}
