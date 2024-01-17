import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({updateInfo}){

  let [city,setCity] =useState("")
  let [error,setError] =useState(false)


  const  API_URL='https://api.openweathermap.org/data/2.5/weather'
  const API_KEY='da57d920cfd6831360be7f6a542f0bf2'



   let getWeatherInfo = async()=>{


    try{
      let res=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      let responseJSON= await res.json()
      let result={
        city:city,
        temp:responseJSON.main.temp,
        maxtemp:responseJSON.main.temp_max,
        mintemp:responseJSON.main.temp_min,
        humidity:responseJSON.main.humidity,
        feelsLike:responseJSON.main.feels_like,
        weather: responseJSON.weather[0].description
      }
      console.log(result)
    return result
    }
     catch(err){
      throw err
     }

   }
    

   let handleChange= (event)=>{
        setCity(event.target.value);
   }

   let handleSubmit = async(event)=>{
    try{
      event.preventDefault()
      console.log(city)
      setCity('')
      let newinfo = await getWeatherInfo()
      updateInfo(newinfo)
    }
    catch(err){
      setError(true)
    }
 
   }


    return (
    
    <div  className='SearchBox'>

        
        <form onSubmit={handleSubmit} >
        <TextField id="city" label="City Name" variant="outlined"  required value={city}
        onChange={handleChange}/>
        <br></br>
        <br></br>
      
        <Button variant="contained" type='submit' >
        Search
      </Button>

      {error&& <p style={{color:"red"}}> bhai mai api bolra hu aur mai tut gya bhai is jgh ke bare merko kuch nhi pta bhai</p>}
        </form>
    </div>)
}