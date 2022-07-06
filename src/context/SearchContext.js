import { createContext, useState } from 'react'

export const SearchContext = createContext(null)

const SearchInfoProvider = ({ children }) => {
    const [searchInfo, setSearchInfo] = useState('')

    return (
        <SearchContext.Provider value={{ searchInfo, setSearchInfo }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchInfoProvider
