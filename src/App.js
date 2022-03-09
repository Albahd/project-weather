

import './App.css';
import Header from './components/header';
import CurrentWeather from './components/currentWeather';
import { useGeoLocation } from './geolocation';


function App() {

  const geo = useGeoLocation()

  return (

      <div className="App">

        <CurrentWeather></CurrentWeather>
      </div>

  );
}

export default App;
