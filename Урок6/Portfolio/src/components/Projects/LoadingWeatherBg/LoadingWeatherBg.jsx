import React from 'react'
import ViewWeather from '../Weather/ViewWeather';
import Loading from '../../Common/Loading';
import { Row, Col } from 'antd';

const BASE_PATH = 'https://api.openweathermap.org/data/2.5/weather';
const SEARCH_LAT = 'lat=';
const SEARCH_LON = 'lon=';
const APPID = 'APPID=03ee1c895fca203c761865f3ae7c96a6';

class LoadingWeatherBg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      bgUrl: 'https://static.wixstatic.com/media/632d61_b320d16fef074274b7700f95d68ab6ee~mv2_d_6016_4016_s_4_2.jpg?dn=',
      url: '',
      latitude: '',
      longitude: '',
      weatherdata: {},
    }
  }

  componentDidMount() {
    this.bgImgLoad(this.state.bgUrl);
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        this.setState({ latitude, longitude })
        this.fetchdata(latitude, longitude)
      })
    } else {
      this.setState({ error: "Unable to retrieve your location" });
    }
  }

  fetchdata(latitude, longitude) {
    fetch(`${BASE_PATH}?${SEARCH_LAT}${latitude}&${SEARCH_LON}${longitude}&${APPID}`)
      .then(res => res.json())
      .then(weatherdata => this.setState({ weatherdata }))
      .catch(error => error);
  }

  bgImgLoad(url) {
    this.setState({ loading: true })
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        let objectURL = URL.createObjectURL(blob);
        this.setState({ loading: false, url: objectURL })
      })
      .catch(error => this.setState({ loading: false }));
  }

  render() {
    return (
      <div id='loading' >
        <Row>
          <Col><h2><i>LoadingWeatherBg</i></h2></Col>
        </Row>
        <Row type="flex" style={{ background: `url(${this.state.url}) no-repeat`, backgroundSize: 'cover' }}>
          {this.state.loading ? <Col><Loading /></Col> :
            <Col>
              <ViewWeather weatherdata={this.state.weatherdata}
              />
            </Col>}
        </Row>
      </div>
    )
  }
}

export default LoadingWeatherBg;