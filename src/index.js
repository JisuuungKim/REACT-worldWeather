import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {WeatherPage} from './Pages/WeatherPage';
import {Header} from "./components/Header";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <WeatherPage/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
