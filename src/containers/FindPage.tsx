import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../components/Search';
import { Container, Row, Col } from 'react-bootstrap';
import { RootState } from 'store';
import axios from 'axios';
import { setPosts, setLoading } from 'store/gotSlice';
import { PaginationComp } from '../components/Pagination';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PER_PAGE } from '../auxiliary'
import { SearchList } from 'components/SearchList';
import Loader from 'components/Loader/Loader';

const queryString = require('query-string');

export const FindPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const parsed = queryString.parse(location.search);
  const posts = useSelector((state: RootState) => state.got.posts)
  const loading = useSelector((state: RootState) => state.got.loading)

  const [page, setPage] = useState(+parsed.page || 1);
  const [search, setSearch] = useState(parsed.search || '');

  const handleSearch = (str: string) => {
    setPage(1)
    navigate({
      pathname: '/find',
      search: `?page=${page}&find=${str}`
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
      setOutPosts(posts.filter(post => post.fullName.toLowerCase().includes(search.toLowerCase().trim())).slice(indexFirst, indexLast))
      navigate(`/find?page=${page}&find=${search}`)
    } else {
      setOutPosts(posts.slice(indexFirst, indexLast))
      navigate(`/find?page=${page}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, posts, search])
  return (
    <Container className='h-100'>
      {
        loading
          ? <Loader></Loader>
          : (
            <Row className='justify-content-between h-100'>
              <Col xs={12} className='overflow-hidden'>
                <h2 className='text-center display-2 got-title '>Find character</h2>
                <Search handleSearch={handleSearch} setSearch={setSearch} search={search} setPage={setPage}></Search>
                <SearchList posts={outPosts}></SearchList>
              </Col>
              <Col xs={12} className='pt-2'>
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
