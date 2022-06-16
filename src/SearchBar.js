import React, { useState } from 'react'

const SearchBar = (arr, query) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [Inputs, setInputs] = useState([])

  const onChangeHandler = (e) => {
    const userInput = e.target.value
    const results = arr.filter(
      (arr) => arr.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    )
    setSearchQuery(e.target.value)
  }
  return (
    <div className='search_bar'>
      <input
        name='search'
        type='text'
        id='search'
        placeholder='Quick Search'
        value={searchQuery}
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default SearchBar
