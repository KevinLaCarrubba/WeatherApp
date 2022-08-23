import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

import format from 'date-fns/format'

import styles from './CurrentDay.module.scss'
import { renderIcon } from '../../Utils/renderIcon'

const CurrentDay = () => {
    const { searchInfo } = useContext(SearchContext)

    return (
        <div className={styles.container}>
            <div className={styles.weatherBox}>
                <div className={styles.datetimebox}>
                    <p className={styles.location}>
                        {`${searchInfo?.location?.name}, ${searchInfo?.location?.region}`}
                    </p>
                    <p className={styles.dateANDtime}>
                        {searchInfo?.location?.localtime &&
                            format(
                                new Date(searchInfo?.location?.localtime),
                                'MM/dd/yyyy hh:mmaaa'
                            )}
                    </p>
                </div>
                <div className={styles.iconAndTempBox}>
                    <div className={styles.weatherIcon}>
                        {renderIcon(
                            searchInfo?.current?.condition.code,
                            searchInfo?.current?.is_day
                        )}
                    </div>
                    <div className={styles.tempBox}>
                        <p className={styles.temp}>
                            {Math.round(searchInfo.current.temp_f)}
                            <span>°</span>F
                        </p>
                        <p className={styles.currentCondition}>
                            {searchInfo.current.condition.text}
                        </p>
                        <div className={styles.highANDlow}>
                            <p>
                                Low:{' '}
                                {
                                    searchInfo?.forecast.forecastday[0].day
                                        .mintemp_f
                                }
                                °
                            </p>
                            <p>
                                High:{' '}
                                {
                                    searchInfo?.forecast.forecastday[0].day
                                        .maxtemp_f
                                }
                                °
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentDay
