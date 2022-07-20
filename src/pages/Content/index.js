import React from 'react'
import CurrentDay from '../../components/CurrentDay'
import HourlyDay from '../../components/HourlyDay'
import WeeklyDay from '../../components/WeeklyDay'
import styles from './Content.module.scss'

const Content = () => {
    return (
        <div className={styles.container}>
            <CurrentDay />
            <HourlyDay />
            <WeeklyDay />
        </div>
    )
}

export default Content
