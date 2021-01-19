import React from 'react';
import './Nav.css';

const cityData = [
    {code: 'Seoul', name: '서울', class: 'm1'},
    {code: 'London', name: '런던', class: 'm2'},
    {code: 'Tokyo', name: '도쿄', class: 'm3'},
    {code: 'Beijing', name: '베이징', class: 'm4'},
    {code: 'Paris', name: '파리', class: 'm5'},
    {code: 'New York', name: '뉴욕', class: 'm6'},
    {code: 'Sydney', name: '시드니', class: 'm7'},
    {code: 'Mexico City', name: '멕시코시티', class: 'm8'},
    {code: 'Cairo', name: '카이로', class: 'm9'},
];

export function Nav(props){
    return <>
        {cityData.map((city) => <span
            className={city.class}
            onClick={() => props.Popup(city.code)}
        >{city.name}</span>)}

    </>
}