import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Row } from 'antd';
import ViewWeather from './ViewWeather';

const Weather = (props) => {
  const [city, setState] = useState('');
  const [weatherdata, setWeather] = useState(false);
  let nameRef = useRef();
  const sumbitButton = (e) => {
    e.preventDefault();
    setState(nameRef.current.value);
  }

  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=03ee1c895fca203c761865f3ae7c96a6`;
    fetch(URL)
      .then(response => response.json())
      .then(data => { setWeather(data) })
      .catch(error => error);
  }, [city]);

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2><i>Weather </i></h2>
      <Form onSubmit={sumbitButton} >
        <Form.Item >
          <input
            type="text"
            ref={nameRef}
            placeholder=' example Moscow,ru...'
            style={{ width: '100%', border: '1px solid #d2d2d2', borderRadius: 5 }}
          />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Show weather..
          </Button>
        </Form.Item>
      </Form>
      <Row>
        <ViewWeather weatherdata={weatherdata} />
      </Row>
    </div>
  )
}

export default Weather;