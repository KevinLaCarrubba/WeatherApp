import { createContext, useState } from 'react'

export const SearchContext = createContext(null)

const SearchInfoProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchInfoProvider
