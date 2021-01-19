const apiKey = 'c9820764603fe7b3aa2fa4fab7ff284c';

export async function readWeather(city) {
    const apiURI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const readResult = await fetch(apiURI);
    const readJson = await readResult.json();

    const propsData = readJson ? {
        sky: readJson.weather[0].main,
        icon: readJson.weather[0].icon,
        wind: readJson.wind.speed,
        temp: readJson.main.temp,
        feels_like: readJson.main.feels_like,
        temp_max: readJson.main.temp_max,
        temp_min: readJson.main.temp_min,
        name: readJson.name
    } : {};
    return propsData;
}
