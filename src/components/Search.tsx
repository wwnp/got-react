import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setSearch } from 'store/gotSlice';

export const Search = ({ handleSearch }: any) => {
  const dispatch = useDispatch()
  const search = useSelector((state: RootState) => state.got.search)
  const handleSubmit = () => {
    handleSearch(search)
  }
  return (
    <div className='input-field col s12'>
      <InputGroup className="mb-3" style={{ width: '70%', margin: '0 auto' }}>
        <FormControl
          placeholder="Search"
          onChange={(e) => dispatch(setSearch(e.target.value.trim()))} /
        >
        <Button variant="success" onClick={handleSubmit}>🔍</Button>
      </InputGroup>
    </div>
  )
}
