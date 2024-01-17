import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Dehradun",
        feelsLike : 6.93,
        humidity:56,
        maxtemp :8.19,
        mintemp:8.19,
        temp:8.19,
        weather: "clear sky" 
    })



    let updateInfo =(res)=>{
       setWeatherInfo(res)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather app by Yash Chamoli </h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}