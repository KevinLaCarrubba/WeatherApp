import React, { useState, useContext, useRef } from 'react'

import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import { MdSearch } from 'react-icons/md'

import { SearchContext } from '../../context/SearchContext'
import { getWeather } from '../../api/api'
import styles from './nav.module.scss'
import { AllWeather } from '../SVGIcons/SvgIcons'
import { useCallback } from 'react'
import { useEffect } from 'react'

const Nav = () => {
    const { setSearchInfo } = useContext(SearchContext)
    const [value, setValue] = useState('')
    const [currentLocation, setCurrentLocation] = useState(null)
    const [recentSearched, setRecentSearched] = useState(
        JSON.parse(localStorage.getItem('searched') || '[]')
    )

    const inputText = useRef(null)
    //Fucntion to populate the last search into local storage for search auto complete
    const populateLocalStorage = search => {
        //check if search value exists
        const checkSearch = recentSearched.some(data => data.search === search)
        //add last search value to array if it doesnt exist
        if (checkSearch === false) {
            recentSearched.push({ search: search })
            localStorage.setItem('searched', JSON.stringify(recentSearched))
        }
    }

    const changeSearch = event => {
        setValue(event.target.value)
    }

    //function to search value when icon is clicked
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

    //function to search value when enter button is hit
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

    // const getCurrentLocation = () => {
    //     const options = {
    //         enableHighAccuracy: true,
    //         timeout: 5000,
    //         maximumAge: 0
    //     }

    //     function success(pos) {
    //         const crd = pos.coords
    //         setCurrentLocation(`${crd.latitude},${crd.longitude}`)
    //     }

    //     function error(err) {
    //         console.warn(`ERROR(${err.code}): ${err.message}`)
    //     }

    //     navigator.geolocation.getCurrentPosition(success, error, options)
    // }

    // if (currentLocation === null) {
    //     getCurrentLocation()
    // }
    // const getLocation = useCallback(
    //     currentLocation => {
    //         getWeather(currentLocation)
    //             .then(response => {
    //                 setSearchInfo(response)
    //             })
    //             .catch(error => {
    //                 console.error(error.message)
    //             })
    //     },
    //     [setSearchInfo]
    // )
    // useEffect(() => {
    //     getLocation('07010')
    // }, [getLocation])
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
