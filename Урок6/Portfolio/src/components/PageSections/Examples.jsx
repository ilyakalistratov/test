import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import TaskContainer from './../Projects/ToDo/TaskContainer';
import ConvertContainer from './../Projects/Converter/ConvertContainer'
import Weather from '../Projects/Weather/Weather';
import NewsContainer from '../Projects/News/NewsContainer';
import LoadingWeatherBg from '../Projects/LoadingWeatherBg/LoadingWeatherBg';
import { observer, inject } from 'mobx-react';
import WithCardWrapper from '../../hoc/WithCardWrapper';

const TaskContainerInCard = WithCardWrapper(TaskContainer);
const ConvertContainerInCard = WithCardWrapper(ConvertContainer);
const WeatherInCard = WithCardWrapper(Weather);
const NewsContainerInCard = WithCardWrapper(NewsContainer);
const LoadingWeatherBgInCard = WithCardWrapper(LoadingWeatherBg)

const Examples = inject('store')(observer(props => {
  const { theme } = props.store;
  return (
    <Layout id='Examples' style={{ backgroundColor: `${theme.secondSectionBackground}`, color: `${theme.colorParagraph}` }}>
      <Row>
        <Col>
          <h2 style={{ textAlign: 'center', fontSize: '32px', color: `${theme.colorHeader}`, margin: '20px 0' }}>Примеры работ</h2>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
        <TaskContainerInCard />
        <ConvertContainerInCard />
      </Row>
      <Row type="flex" justify="center">
        <Col xs={{ span: 16 }}> <hr /></Col>
      </Row>
      <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
        <WeatherInCard />
        <NewsContainerInCard />
      </Row>
      <Row type="flex" justify="center">
        <Col xs={{ span: 16 }}> <hr /></Col>
      </Row>
      <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
        <LoadingWeatherBgInCard />
      </Row>
    </Layout>
  )
}))
export default Examples;