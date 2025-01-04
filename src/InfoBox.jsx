import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css"
import { styled } from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {

    const INIT_URL = "https://media.istockphoto.com/id/891589860/photo/cloudy-summer-landscape-field-of-ripe-wheat-dark-storm-clouds-in-dramatic-sky-minutes-before.webp?a=1&b=1&s=612x612&w=0&k=20&c=UCd-tnRYV-oNa_GFC2W8IltaXCqDp53-l0g2LvtfX2k="
    let HOT_URL = "https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyaWdodCUyMHN1bm55JTIwZGF5fGVufDB8fDB8fHww";
    let COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://t3.ftcdn.net/jpg/05/60/67/58/360_F_560675858_owDH9f8iCHRJHSD07bhx8qWAy6nXSzXD.jpg";

    return (
        <div className="InfoBox">
            <Card  style={{width : "350px"}}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={info.humidity > 75 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                info.humidity > 75 ? <ThunderstormIcon/>
                : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
                }
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                <div>Temperature: {info.temp}&deg;C</div>
                <div>Max Temp: {info.maxTemp}</div>
                <div>Min Temp: {info.minTemp}</div>
                <div>Humidity: {info.humidity}</div>
                <div>Weather: {info.weather}</div>
                <div>The weather feels like: {info.feelsLike}</div>
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        </div>
    )
}