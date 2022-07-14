import axios from 'axios'
const APIkey = process.env.REACT_APP_APIkey

export const getWeather = async location => {
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
