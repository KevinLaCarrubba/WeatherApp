import React, { useState, useContext, useRef } from 'react'

import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import { MdSearch } from 'react-icons/md'

import { SearchContext } from '../../context/SearchContext'
import { getWeather } from '../../api/api'
import styles from './nav.module.scss'
import { AllWeather } from '../SVGIcons/SvgIcons'

const Nav = () => {
    const { setSearchInfo } = useContext(SearchContext)
    const [value, setValue] = useState('')
    const [recentSearched, setRecentSearched] = useState(
        JSON.parse(localStorage.getItem('searched') || '[]')
    )

    const inputText = useRef(null)

    const populateLocalStorage = search => {
        recentSearched.push({ search: search })
        localStorage.setItem('searched', JSON.stringify(recentSearched))
    }

    const changeSearch = event => {
        setValue(event.target.value)
    }
    const clickSearch = () => {
        getWeather(inputText.current.value)
            .then(response => {
                setSearchInfo(response)
            })
            .catch(error => {
                console.error(error.message)
            })
        populateLocalStorage(inputText.current.value)
    }
    const hitEnter = event => {
        if (event.key === 'Enter') {
            getWeather(inputText.current.value)
                .then(response => {
                    setSearchInfo(response)
                })
                .catch(error => {
                    console.error(error.message)
                })
            populateLocalStorage(inputText.current.value)
        }
    }
    const clearLocalStorage = () => {
        localStorage.clear()
        setRecentSearched([])
    }
    return (
        <nav>
            <div>
                <AllWeather />
            </div>
            <div className={styles.search}>
                <Autocomplete
                    className={styles.searchField}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={recentSearched?.map(option => option.search)}
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
                <small
                    className={styles.searchClear}
                    onClick={clearLocalStorage}>
                    Clear History
                </small>
            </div>
        </nav>
    )
}

export default Nav
