import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap';

export const Search = ({ handleSearch, setSearch, search, setPage }: any) => {
  return (
    <div className='input-field col s12'>
      <InputGroup className="mb-3" style={{ width: '70%', margin: '0 auto' }}>
        <FormControl
          placeholder="Search"
          defaultValue={search}
          onChange={(e) => {
            setPage(1)
            setSearch(e.target.value.trim().toLowerCase())
          }}
        />
      </InputGroup>
    </div>
  )
}
