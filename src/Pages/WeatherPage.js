import React,{useEffect, useState} from "react";
import {readWeather} from "../server/Weather";
import "./WeatherPage.css"
import {Nav} from "../components/Nav";
import {ShowWeather} from "../components/ShowWeather";

export function WeatherPage(props){
    const[quary, setQuary] = useState({});
    const[state, setState] = useState(false);

    async function Popup(name) {
        const server = async () => {
             const apiData = await readWeather(name);
            setQuary(apiData);
            setState(true);
        }
        await server();
    }

    return <>
        <div className="layout">
            <div className="map">
                <Nav
                    Popup={Popup}
                />
                { state ? (
                <ShowWeather
                    State={state}
                    Popdown={() => setState(false)}
                    quary={quary}
                />) : null }
            </div>
        </div>
    </>
}