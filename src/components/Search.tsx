import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setSearch } from 'store/gotSlice';

export const Search = ({ handleSearch, setSearch, search ,setPage}: any) => {
  // const handleSubmit = () => {
  //   handleSearch(search)
  // }
  return (
    <div className='input-field col s12'>
      <InputGroup className="mb-3" style={{ width: '70%', margin: '0 auto' }}>
        <FormControl
          placeholder="Search"
          defaultValue={search}
          onChange={(e) => {
            setPage(1)
            setSearch(e.target.value.trim().toLowerCase())
          }} /
        // onChange={(e) => dispatch(setSearch(e.target.value.trim()))} /
        >
        {/* <Button variant="dark" onClick={handleSubmit}>🔍</Button> */}
      </InputGroup>
    </div>
  )
}
