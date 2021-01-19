import React from 'react';
import './ShowWeather.css'
import Close from '../image/Group.png';
import day from '../image/day.png'
import cloud from '../image/cloud.png'
import night from '../image/night.png'
import rain from '../image/rain.png'
import snow from '../image/snow.png'
import mist from '../image/mist.png';

export function ShowWeather(props){
    function ChooseIcon() {
        if (props.quary.icon == "01d") { return day;}
        else if(props.quary.icon == "01n") {return night;}
        else if(props.quary.icon == "02d"||props.quary.icon == "03d"||props.quary.icon == "04d"||props.quary.icon == "02n"||props.quary.icon == "03n"||props.quary.icon == "04n") {return cloud;}
        else if(props.quary.icon == "13d"||props.quary.icon == "13n") {return snow}
        else if(props.quary.icon == "50d"||props.quary.icon == "50n") {return mist}
        else {return rain}
    }
    const iconurl = ChooseIcon()
    const tempC = Math.round(props.quary.temp-273.15);
    const Feels_like_tempC = Math.round(props.quary.feels_like-273.15);

    return <>
        <div className="modal">
                <img className="close" onClick={props.Popdown} src={Close}/>
                <div className="main">
                    <img className="icon" src={iconurl}/>
                </div>
                    <p className="city">{props.quary.name}</p>
                    <p className="small_font">{props.quary.sky}</p>
                    <p className="temp">{tempC}℃</p>
                    <p className="small_font">Feels like {Feels_like_tempC}℃</p>

        </div>
    </>
}