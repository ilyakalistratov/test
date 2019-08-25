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
      bgUrl: 'https://s131vla.storage.yandex.net/rdisk/ba984b4930f0904f5cb9f44929a1c52942b1596f75200ba80410f5e862d5209b/5d62bdbc/qIXoc3N2Z8fglz2parGVywBr7hupNa_SK9GBi8LLH-yKHFx7sC6Jot3ixnwCiZbpSYGT9CBdinT2DD2XAqwfNQ==?uid=0&filename=bfoto_ru_4761.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&fsize=15693887&hid=cffd12b3cb77e57fc10130e1b9e13de0&media_type=image&tknv=v2&etag=e7e83cefebc1116149f45039e454f63d&rtoken=GupbO38VEK8v&force_default=no&ycrid=na-8b31bbc800bfc09da9ae9eb0fa7c0aa6-downloader2h&ts=590f3eb9de700&s=8cac589d2f461b5d1eb3d2e50b24d34bd6e607583e157c7ef03be353c5dddd74&pb=U2FsdGVkX1_oUGYiVVHqBkot0pCuuzFUroPVlvzYt_oE4FMTmHcVqFADVeNfzDzpTe0DbCwK5FGQE5y8PqGbJ3OigU3wDHQQ79kN_6AMaUw',
      url: '',
      latitude: '',
      longitude: '',
      weatherdata: {},
    }
  }
  async componentDidMount() {
    try {
      await this.bgImgLoad(this.state.bgUrl);
      await this.getCurrentLocation();
    } catch (e) {
      this.setState({ loading: false })
    }
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
      .catch(error => error);
  }


  render() {
    return (
      <div id='loading' >
        <Row>
          <Col><h2><i>LoadingWeatherBg</i></h2></Col>
        </Row>
        <Row type="flex" style={{ background: `url(${this.state.url}) no-repeat` }}>
          {this.state.loading ? <Col><Loading /></Col> :
            <Col>
              <ViewWeather weatherdata={this.state.weatherdata} />
            </Col>}
        </Row>
      </div>
    )
  }
}
export default LoadingWeatherBg;