import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { format } from 'date-fns'

import styles from './HourlyDay.module.scss'
import { renderIcon } from '../../Utils/renderIcon'
import { GiWaterDrop } from 'react-icons/gi'

const HourlyDay = () => {
    const { searchInfo } = useContext(SearchContext)
    const date = new Date()
    const currentHour = date.getHours()

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                {searchInfo?.forecast?.forecastday[0]?.hour
                    .splice(0, currentHour)
                    .map(info => {
                        return (
                            <div className={styles.info} key={info.time_epoch}>
                                <div className={styles.time}>
                                    {format(new Date(info.time), 'haaa')}
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
                                    <GiWaterDrop className={styles.waterDrop} />
                                    {info.chance_of_rain}%
                                </div>
                            </div>
                        )
                    })}
                {currentHour !== 0 && (
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
                )}
            </div>
        </div>
    )
}

export default HourlyDay
