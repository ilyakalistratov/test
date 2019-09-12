import React from 'react';
import { Col } from 'antd';

const ViewWeather = (props) => {
  const { weatherdata } = props
  return (
    <Col>
      {weatherdata.cod == 404 ? <p>{weatherdata.message}</p> : null}
      {!weatherdata.main ? null :
        <>
          <p>{weatherdata.name}, {weatherdata.sys.country}</p>
          <p><sub>{(weatherdata.main.temp_min - 273.15).toFixed(1)}  °C</sub><img
            alt='img' src={`https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} /><sub>{(weatherdata.main.temp_max - 273.15).toFixed(1)}  °C</sub> </p>
          <p>t: {(weatherdata.main.temp - 273.15).toFixed(1)} °C </p>
          <p>wind: {weatherdata.wind.speed} m/s </p>
          <p>humidity : {weatherdata.main.humidity} % </p>
          <p>clouds : {weatherdata.clouds.all} % </p>
        </>
      }
    </Col>
  )
}

export default ViewWeather;