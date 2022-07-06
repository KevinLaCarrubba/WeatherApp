import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const CurrentDay = () => {
    const { searchInfo } = useContext(SearchContext)
    console.log(searchInfo)
    return <div>search incoming</div>
}

export default CurrentDay
