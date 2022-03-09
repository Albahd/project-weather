import { useOneCity } from "../../custom-hook/oneCity"
import Header from "../header"
import { useState } from "react"
import { API_KEY } from '../../config.js'





function CurrentWeather() {

  const { cityOne, updateCity } = useOneCity()
  const [location, setLocation] = useState('')

  const searchLoc = e => {
      if(e.key === 'Enter'){
          fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY.key4}`)
          .then(r => r.json())
          .then(d => {   
              updateCity([d])   
          })
      }
  }


  return (
    <div>
      <Header location={location} setLocation={setLocation} searchLoc={searchLoc} ></Header>
      <h1>Hola tiempo</h1>
      {cityOne.map(e => (
        <div>
          <h1>{e.name}</h1>
          <p>{e.main.humidity}</p>
        </div>

      ))}
    </div>
  )
}

export default CurrentWeather

/**
 * 
 *  
 */
