import React, { useContext, useEffect, useState, useCallback } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { format } from 'date-fns'

import styles from './HourlyDay.module.scss'
import { renderIcon } from '../../Utils/renderIcon'
import { GiWaterDrop } from 'react-icons/gi'

const HourlyDay = () => {
    const { searchInfo } = useContext(SearchContext)
    const date = new Date()
    const currentHour = date.getHours()
    const [hourlyArray, setHourlyArray] = useState([])

    const createHoursArray = useCallback(() => {
        const dayOne = searchInfo?.forecast?.forecastday[0]?.hour

        if (currentHour !== 0) {
            const dayOneSlice =
                searchInfo?.forecast?.forecastday[0]?.hour.slice(
                    currentHour,
                    dayOne.length
                )
            const dayTwoSlice = searchInfo?.forecast.forecastday[1]?.hour.slice(
                0,
                currentHour
            )
            setHourlyArray(dayOneSlice.concat(dayTwoSlice))
        }
    }, [currentHour, searchInfo?.forecast?.forecastday])
    useEffect(() => {
        createHoursArray()
    }, [createHoursArray])

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                {hourlyArray.map(info => {
                    return (
                        <div className={styles.info} key={info.time_epoch}>
                            <div className={styles.time}>
                                {format(new Date(info.time), 'haaa')}
                            </div>
                            <div className={styles.logo}>
                                {renderIcon(info.condition.code, info.is_day)}
                            </div>
                            <div className={styles.temp}>
                                {Math.round(info.temp_f)}°F
                            </div>
                            <div className={styles.condition}>
                                {info.condition.text}
                            </div>
                            <div className={styles.rain}>
                                <GiWaterDrop className={styles.waterDrop} />
                                {info.chance_of_rain}%
                            </div>
                        </div>
                    )
                })}
                {/* {currentHour !== 0 && (
                    <>
                        {searchInfo?.forecast.forecastday[1]?.hour
                            .slice(0, currentHour)
                            .map(info => {
                                return (
                                    <div
                                        className={styles.info}
                                        key={info.time_epoch}>
                                        <div className={styles.time}>
                                            {format(
                                                new Date(info.time),
                                                'haaa'
                                            )}
                                        </div>
                                        <div className={styles.logo}>
                                            {renderIcon(
                                                info.condition.code,
                                                info.is_day
                                            )}
                                        </div>
                                        <div className={styles.temp}>
                                            {Math.round(info.temp_f)}°F
                                        </div>

                                        <div className={styles.condition}>
                                            {info.condition.text}
                                        </div>
                                        <div className={styles.rain}>
                                            <GiWaterDrop
                                                className={styles.waterDrop}
                                            />
                                            {info.chance_of_rain}%
                                        </div>
                                    </div>
                                )
                            })}
                    </>
                )} */}
            </div>
        </div>
    )
}

export default HourlyDay
