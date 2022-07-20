import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { renderIcon } from '../../Utils/renderIcon'

import { format } from 'date-fns'
import styles from './WeeklyDay.module.scss'

const WeeklyDay = () => {
    const { searchInfo } = useContext(SearchContext)
    console.log(searchInfo)
    //searchInfo?.forecast?.forecastday
    //map to day
    return (
        <div className={styles.container}>
            <h5>Weekly Forecast</h5>
            {searchInfo !== '' && (
                <div className={styles.infoContainer}>
                    {searchInfo?.forecast?.forecastday.map((data, index) => {
                        return (
                            <div className={styles.cardContainer} key={index}>
                                <div className={styles.date}>
                                    {format(new Date(data.date), 'M/dd')}
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
                                        {Math.round(data.day.mintemp_f)}°F
                                    </div>
                                    <div className={styles.temp}>
                                        <span>Max:</span>{' '}
                                        {Math.round(data.day.maxtemp_f)}°F
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default WeeklyDay
