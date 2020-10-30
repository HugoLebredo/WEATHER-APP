import convertUnits from 'convert-units'

export const getCityAndCountry = (city, countryCode) => `${city}-${countryCode}`
export const toCelsius = (number) => Number(convertUnits(number).from("K").to("C").toFixed(0))