import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col } from 'antd';



const Weather = (props) => {
  const [city, setState] = useState('');
  const [weatherdata, setWeather] = useState(false);

  let nameRef = useRef();

  const sumbitButton = (e) => {
    e.preventDefault();
    setState(nameRef.current.value);
  }

  useEffect(() => {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=03ee1c895fca203c761865f3ae7c96a6`;
    fetch(URL).then(response => response.json()).then(data => {
      setWeather(data);
    });
  }, [city]);

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2><i>Weather </i></h2>
      <Form onSubmit={sumbitButton} >
        <Form.Item >
          <input type="text" ref={nameRef} placeholder=' example Moscow,ru...' style={{ width: '100%', border: '1px solid #d2d2d2', borderRadius: 5 }} />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" >Show weather..</Button>
        </Form.Item>
      </Form>
      <Row>
        <Col>
          {weatherdata.cod == 404 ? <p>{weatherdata.message}</p> : null}
          {!weatherdata.main ? null :
            <>
              <p>{weatherdata.name}, {weatherdata.sys.country}</p>
              <p><sub>{(weatherdata.main.temp_min - 273.15).toFixed(1)}  °C</sub><img
                alt='img' src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} /><sub>{(weatherdata.main.temp_max - 273.15).toFixed(1)}  °C</sub> </p>
              <p>t: {(weatherdata.main.temp - 273.15).toFixed(1)} °C </p>
              <p>wind: {weatherdata.wind.speed} m/s </p>
              <p>humidity : {weatherdata.main.humidity} % </p>
              <p>clouds : {weatherdata.clouds.all} % </p>
            </>
          }
        </Col>
      </Row>
    </div>

  )
}
export default Weather;