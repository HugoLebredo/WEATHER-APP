const cities = [{
    city:"Madrid",
    country:"España",
    countryCode:"ES"
    },
    {
    city:"Bogotá",
    country:"Colombia",
    countryCode:"CO"
    },
    {
    city:"Avilés",
    country:"España",
    countryCode:"ES"
    }]

export const getCities = () => cities

export const getContryByCountryCode = (code) => cities.filter( item => item.countryCode === code)[0].country