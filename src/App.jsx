import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from "./components/Weather"
import LoadingScreen from './components/LoadingScreen'

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "d5a0d668134b54f88340ea02da18f63f"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(url)
    .then(({data}) => setWeatherInfo(data))
    .catch((err) => console.log(err));
  }

  const iconId = weatherInfo?.weather[0].icon

  console.log(iconId);

/* Pretendía intercambiar el iconId con la url de donde se saca el bg y así hacer que cambie,
 tristemente me tiraba un bug que no pude solucion y tuve quedejarlo estatico para no demorar 
 la entrega del proyecto */ 

  return (
    <>
    
    <main className={`min-h-screen bg-[url(/img/01d.jpeg)] bg-cover  px-4  text-white font-lato flex justify-center items-center`}>
      <LoadingScreen/>
      <Weather weatherInfo={weatherInfo}/>
    </main>
    </>
  )
}

export default App
