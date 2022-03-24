import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../components/Search';
import { Container, Row, Col } from 'react-bootstrap';
import { RootState } from 'store';
import axios from 'axios';
import { setPosts,setFilteredPosts } from 'store/gotSlice';

export const SearchPage = () => {
  const dispatch = useDispatch()
  const search = useSelector((state: RootState) => state.got.search)
  const posts = useSelector((state: RootState) => state.got.posts)
  const filteredPosts = useSelector((state: RootState) => state.got.filteredPosts)

  const handleSearch = (search: string) => {
    dispatch(setFilteredPosts(posts.filter(post => post.fullName.toLowerCase().trim().includes(search.toLowerCase().trim()))))
  }
  useEffect(() => {
    async function fetchCharacters() {
      const response = await axios.get('https://thronesapi.com/api/v2/Characters')
      const {data} = response
      dispatch(setPosts(data))
    }
    fetchCharacters()
  }, [])

  console.log(posts)
  console.log(filteredPosts)

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12}>
          <h1 className='text-center'>Search</h1>
          <Search handleSearch={handleSearch}></Search>
        </Col>

      </Row>
    </Container>
  )
}
