import axios from 'axios'

export const getCurrentWeather = async location => {
    try {
        const result = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${location}&aqi=yes`
        )
        return result.data
    } catch (error) {
        console.error(error.message)
    }
}

export const getWeeklyForecast = async location => {
    try {
        const result = await axios.get(
            `https://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${location}&days=7&aqi=yes&alerts=yes
            `
        )
        return result.data
    } catch (error) {
        console.error(error.message)
    }
}
