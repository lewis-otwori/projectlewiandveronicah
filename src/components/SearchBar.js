import React from 'react'

function SearchBar() {
  return (
     <div className="search"> 
      <input  id="searchInput"className="srch"type="text" name="search" placeholder="Search Your Games Here"/> 
      <a href="#"><button className="btn" type="submit">Search</button></a> 
    </div>
  )
}

export default SearchBar