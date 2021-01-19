import React from 'react';
import './Header.css';
import title_icon from '../image/cloud_sun_icon-icons.com_59607.png';
export function Header(){

    return <>
        <div className="color">
            <h2>오늘의 날씨</h2>
            <img className="title_icon" src={title_icon}/>
            <p>원하는 지역을 클릭해보세요.</p>
        </div>

    </>
}