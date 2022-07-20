import React from 'react'
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
} from '../components/SVGIcons/SvgIcons'

export const renderIcon = (logoData, dayData) => {
    switch (logoData) {
        //Sunny
        case 1000:
            if (dayData === 1) {
                return <Day />
            } else if (dayData === 0) {
                return <Night />
            }
            break
        //Partly cloudy
        case 1003:
            if (dayData === 1) {
                return <CloudyDayOne />
            } else if (dayData === 0) {
                return <CloudyNightOne />
            }
            break
        //Cloudy && Overcast && Fog/Freezing Fog
        case 1006:
        case 1009:
        case 1135:
        case 1147:
            return <Cloudy />
        //Mist
        case 1030:
            return <RainyFour />
        //Patchy Rain && Patchy Light Drizzle && Drizzle && Patchy Lignt Rain && Light Rain && Moderate Rain at times && Moderate Rain && Light rain shower
        case 1063:
        case 1150:
        case 1153:
        case 1180:
        case 1183:
        case 1186:
        case 1189:
        case 1240:
            return <RainyFive />
        //Heavy Rain at time && Heavy Rain && Moderate or heavy rain shower && Torrential rain shower
        case 1192:
        case 1195:
        case 1243:
        case 1246:
            return <RainySix />

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
            return <RainySeven />
        //Possible Thunder && Patchy light rain with thunder && Moderate or heavy rain with thunder && Patchy light snow with thunder && Moderate or heavy snow with thunder
        case 1087:
        case 1273:
        case 1276:
        case 1279:
        case 1282:
            return <Thunder />
        //Blowing Snow && Blizzard && Patchy heavy snow && Heavy snow && Moderate or heavy snow showers
        case 1114:
        case 1117:
        case 1222:
        case 1225:
        case 1258:
            return <SnowySix />
        //Patchy Light snow && Light snow && Patchy moderate snow && Moderate snow && Patchy Snow && Light snow showers
        case 1210:
        case 1213:
        case 1216:
        case 1219:
        case 1066:
        case 1255:
            return <SnowyFive />
        default:
            break
    }
}
