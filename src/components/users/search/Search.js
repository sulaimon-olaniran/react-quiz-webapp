import React, { useState } from 'react'



const Search = ({ users }) =>{
    const [ searchValue, setSearchValue ] = useState("")

    const handleSearchData = ( data )=>{
       return data.firstName.includes(searchValue)
    }

    const SearchResults = users.filter(handleSearchData)

    return(
        <div>

        </div>
    )
}

export default Search