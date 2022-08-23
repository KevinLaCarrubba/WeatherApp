import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { renderIcon } from '../../Utils/renderIcon'

import { format, parse } from 'date-fns'
import styles from './WeeklyDay.module.scss'

const WeeklyDay = () => {
    const { searchInfo } = useContext(SearchContext)

    const dateFormat = date => {
        const parseDate = parse(date, 'yyyy-MM-dd', new Date())
        const formatDate = format(new Date(parseDate), 'M/dd')
        return formatDate
    }

    return (
        <div className={styles.container}>
            <h5>Weekly Forecast</h5>
            <div className={styles.infoContainer}>
                {searchInfo?.forecast?.forecastday.map((data, index) => {
                    return (
                        <div className={styles.cardContainer} key={index}>
                            <div className={styles.date}>
                                {dateFormat(data.date)}
                            </div>
                            <div className={styles.icon}>
                                {renderIcon(data.day.condition.code, 1)}
                            </div>
                            <div className={styles.avgTemp}>
                                {Math.round(data.day.avgtemp_f)}°F
                            </div>
                            <div className={styles.condition}>
                                {data.day.condition.text}
                            </div>
                            <div className={styles.tempContainer}>
                                <div className={styles.temp}>
                                    <span>Min:</span>{' '}
                                    {Math.round(data.day.mintemp_f)}
                                    °F
                                </div>
                                <div className={styles.temp}>
                                    <span>Max:</span>{' '}
                                    {Math.round(data.day.maxtemp_f)}
                                    °F
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WeeklyDay
