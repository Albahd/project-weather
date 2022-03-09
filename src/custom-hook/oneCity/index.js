
import { useState, useEffect } from "react"
import { API_KEY } from "../../config.js"

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')




export const useOneCity = () => {

    const [lat,updateLat] = useState(latLoc)
    const [lon,updateLon] = useState(lonLoc)
    const [cityOne,updateCity] = useState([])
    
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY.key4}`)
        .then(r => r.json())
        .then(d => updateCity([d]))
    
    },[])
    
    return {cityOne, updateCity}

    /**
     *  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY.key4}`)
        .then(r => r.json())
        .then(d => updateCity([d]))
     */
}

