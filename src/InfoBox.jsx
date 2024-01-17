import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){


    const  INIT_URL="https://images.unsplash.com/photo-1691848746401-b40fdd5d823f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    const HOT_URL="https://images.unsplash.com/photo-1498511133332-ad66b117f533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhPVCUyMFRFTVBSQVRVUkV8ZW58MHx8MHx8fDA%3D"

     const COLD_URL="https://media.istockphoto.com/id/1766599904/photo/sad-middle-age-couple-in-warm-clothes-getting-cold-on-the-sofa-in-their-living-room.webp?b=1&s=170667a&w=0&k=20&c=4lt1AgV4JZi8yXfkKtKBtQt8OFrz8L-YbR9WIdy_bb4="

     const RAIN_URL="https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D"


    return(<div className="InfoBox">

        <div className='cardcontainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity>65?RAIN_URL:(info.temp>25?HOT_URL:COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>65?<BeachAccessIcon/>:(info.temp>25?<WbSunnyIcon/>:<SevereColdIcon/>)}


        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temprature:{info.temp}&deg;C</p>
         <p>Humidity:{info.humidity}</p>
         <p>Weather:{info.weather}</p>
         <p>FeelsLike:{info.feelsLike}&deg;C</p>
 
        </Typography>
      </CardContent>
     
    </Card>

    </div>
    </div>)
}