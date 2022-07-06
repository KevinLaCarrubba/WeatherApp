import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const CurrentDay = () => {
    const { searchValue } = useContext(SearchContext)

    return <div>{searchValue}</div>
}

export default CurrentDay
