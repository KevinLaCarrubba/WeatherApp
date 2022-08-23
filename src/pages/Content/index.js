import React, { useContext } from 'react'
import CurrentDay from '../../components/CurrentDay'
import HourlyDay from '../../components/HourlyDay'
import WeeklyDay from '../../components/WeeklyDay'
import styles from './Content.module.scss'
import { SearchContext } from '../../context/SearchContext'

const Content = () => {
    const { searchInfo } = useContext(SearchContext)

    if (searchInfo !== '' && searchInfo !== undefined) {
        return (
            <div className={styles.container}>
                <CurrentDay />
                <HourlyDay />
                <WeeklyDay />
            </div>
        )
    } else {
        return (
            <div className={styles.welcomeContainer}>
                <h6>Hello</h6>
            </div>
        )
    }
}

export default Content
