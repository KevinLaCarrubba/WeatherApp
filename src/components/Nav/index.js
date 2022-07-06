import React, { useState, useContext, useRef } from 'react'

import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import { MdSearch } from 'react-icons/md'

import { SearchContext } from '../../context/SearchContext'
import { getCurrentWeather } from '../../api/api'
import styles from './nav.module.scss'

const Nav = () => {
    const { setSearchInfo } = useContext(SearchContext)
    const [value, setValue] = useState('')

    const inputText = useRef(null)

    const changeSearch = event => {
        setValue(event.target.value)
    }
    const clickSearch = () => {
        getCurrentWeather(inputText.current.value).then(response => {
            setSearchInfo(response)
        })
    }
    const hitEnter = event => {
        if (event.key === 'Enter') {
            getCurrentWeather(inputText.current.value).then(response => {
                setSearchInfo(response)
            })
        }
    }

    return (
        <nav>
            <div>Logo</div>
            <div className={styles.search}>
                <Autocomplete
                    className={styles.searchField}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={recentSearched?.map(option => option.title)}
                    renderInput={params => (
                        <TextField
                            {...params}
                            value={value}
                            label="Search by City/Zip Code"
                            inputRef={inputText}
                            onChange={changeSearch}
                            onKeyPress={hitEnter}
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                                endAdornment: (
                                    <InputAdornment
                                        onClick={clickSearch}
                                        position="end">
                                        <MdSearch
                                            className={styles.searchIcon}
                                        />
                                    </InputAdornment>
                                )
                            }}
                        />
                    )}
                />
            </div>
        </nav>
    )
}

const recentSearched = [{ title: 'Hello' }, { title: 'goodbye' }]

export default Nav
