import React, { useContext, useEffect, useState, useCallback } from 'react'
import { SearchContext } from '../../context/SearchContext'
import {
    CloudyDayOne,
    CloudyNightOne,
    Cloudy,
    Day,
    Night,
    RainyFour,
    RainyFive,
    RainySix,
    RainySeven,
    SnowyFive,
    SnowySix,
    Thunder
} from '../SVGIcons/SvgIcons'
import format from 'date-fns/format'

import styles from './CurrentDay.module.scss'

const CurrentDay = () => {
    const [icon, setIcon] = useState('')
    const { searchInfo } = useContext(SearchContext)

    const renderIcon = useCallback(
        set => {
            switch (searchInfo.current.condition.code) {
                //Sunny
                case 1000:
                    if (searchInfo.current.is_day === 1) {
                        return set(<Day />)
                    } else if (searchInfo.current.is_day === 0) {
                        return set(<Night />)
                    }
                    break
                //Partly cloudy
                case 1003:
                    if (searchInfo.current.is_day === 1) {
                        return set(<CloudyDayOne />)
                    } else if (searchInfo.current.is_day === 0) {
                        return set(<CloudyNightOne />)
                    }
                    break
                //Cloudy && Overcast && Fog/Freezing Fog
                case 1006:
                case 1009:
                case 1135:
                case 1147:
                    return set(<Cloudy />)
                //Mist
                case 1030:
                    return set(<RainyFour />)
                //Patchy Rain && Patchy Light Drizzle && Drizzle && Patchy Lignt Rain && Light Rain && Moderate Rain at times && Moderate Rain && Light rain shower
                case 1063:
                case 1150:
                case 1153:
                case 1180:
                case 1183:
                case 1186:
                case 1189:
                case 1240:
                    return set(<RainyFive />)
                //Heavy Rain at time && Heavy Rain && Moderate or heavy rain shower && Torrential rain shower
                case 1192:
                case 1195:
                case 1243:
                case 1246:
                    return set(<RainySix />)

                //Patchy Freezing Drizzle && Freezing Drizzle && Heavy Freezing Drizzle && Light Freezing Rain && Moderate/Heavy freezing Rain && Light Sleet && Mod/Heavy Sleet && Ice pellets && Patchy Sleet && Light sleet showers && Moderate or heavy sleet showers && Light showers of ice pellets && Moderate or heavy showers of ice pellets
                case 1072:
                case 1168:
                case 1171:
                case 1198:
                case 1201:
                case 1204:
                case 1207:
                case 1237:
                case 1069:
                case 1249:
                case 1252:
                case 1261:
                case 1264:
                    return set(<RainySeven />)
                //Possible Thunder && Patchy light rain with thunder && Moderate or heavy rain with thunder && Patchy light snow with thunder && Moderate or heavy snow with thunder
                case 1087:
                case 1273:
                case 1276:
                case 1279:
                case 1282:
                    return set(<Thunder />)
                //Blowing Snow && Blizzard && Patchy heavy snow && Heavy snow && Moderate or heavy snow showers
                case 1114:
                case 1117:
                case 1222:
                case 1225:
                case 1258:
                    return set(<SnowySix />)
                //Patchy Light snow && Light snow && Patchy moderate snow && Moderate snow && Patchy Snow && Light snow showers
                case 1210:
                case 1213:
                case 1216:
                case 1219:
                case 1066:
                case 1255:
                    return set(<SnowyFive />)
                default:
                    break
            }
        },
        [searchInfo]
    )
    useEffect(() => {
        if (searchInfo !== '') {
            renderIcon(setIcon)
        }
    }, [searchInfo, renderIcon])

    return (
        <div className={styles.container}>
            {searchInfo !== '' && (
                <>
                    <div className={styles.weatherBox}>
                        <div className={styles.datetimebox}>
                            <p className={styles.location}>
                                {`${searchInfo.location.name}, ${searchInfo.location.region}`}
                            </p>
                            <p className={styles.dateANDtime}>
                                {format(
                                    new Date(searchInfo.location.localtime),
                                    'MM/dd/yyyy hh:mmaaa'
                                )}
                            </p>
                        </div>
                        <div className={styles.iconAndTempBox}>
                            <div className={styles.weatherIcon}>{icon}</div>
                            <div className={styles.tempBox}>
                                <p className={styles.temp}>
                                    {searchInfo.current.temp_f}
                                    <span>°</span>F
                                </p>
                                <p className={styles.currentCondition}>
                                    {searchInfo.current.condition.text}
                                </p>
                                <div className={styles.highANDlow}>
                                    <p>
                                        Low:{' '}
                                        {
                                            searchInfo?.forecast.forecastday[0]
                                                .day.mintemp_f
                                        }
                                        °
                                    </p>
                                    <p>
                                        High:{' '}
                                        {
                                            searchInfo?.forecast.forecastday[0]
                                                .day.maxtemp_f
                                        }
                                        °
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CurrentDay
