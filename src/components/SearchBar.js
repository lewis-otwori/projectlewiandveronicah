import React from 'react'

function SearchBar({ search, setSearch, handleSearch }) {
  function handleSubmit(e) {
    e.preventDefault()
    handleSearch()
  }
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input className="srch" type="text" name="search" placeholder="Search Your Games Here" value={search} onChange={(e) => { setSearch(e.target.value) }} />
        <button className="btn" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar