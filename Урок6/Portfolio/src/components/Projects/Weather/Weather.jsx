import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col } from 'antd';



const Weather = (props) => {
  const [city, setState] = useState('');
  const [weatherdata, setWeather] = useState(false);

  let nameRef = useRef();

  const sumbitButton = () => {
    setState(nameRef.current.value);
  }

  useEffect(() => {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=03ee1c895fca203c761865f3ae7c96a6`;
    fetch(URL).then(response => response.json()).then(data => {
      setWeather(data);
    });
  }, [city]);

  return (
    <div style={{ marginBottom: '30px', border: '1px solid #d2d2d2', padding: 20 }}>
      <h2><i>Weather </i></h2>
      <Form >
        <Form.Item >
          <input type="text" ref={nameRef} placeholder='example Moscow,ru...' style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" onClick={sumbitButton}>Узнать погоду</Button>
        </Form.Item>
      </Form>
      <Row>
        <Col>
          {!weatherdata.main ? null :
            <>
              <p>{weatherdata.name}, {weatherdata.sys.country} <img alt='img' src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} /> </p>
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