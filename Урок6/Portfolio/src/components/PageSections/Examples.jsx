import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import TaskContainer from './../Projects/ToDo/TaskContainer';
import ConvertContainer from './../Projects/Converter/ConvertContainer'
import Weather from '../Projects/Weather/Weather';
import NewsContainer from '../Projects/News/NewsContainer';
import LoadingWeatherBg from '../Projects/LoadingWeatherBg/LoadingWeatherBg';
import { observer } from 'mobx-react';
import { inject } from 'mobx-react';

@inject("store")
@observer
class Examples extends React.Component {

  render() {
    const { theme } = this.props.store;
    return (
      <Layout id='Examples' style={{ backgroundColor: `${theme.background2}`, color: `${theme.colorP}` }}>
        <Row>
          <Col>
            <h2 style={{ textAlign: 'center', fontSize: '32px', color: `${theme.colorH}`, margin: '20px 0' }}>Примеры работ</h2>
          </Col>
        </Row>
        <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <Card >
              <TaskContainer />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <Card>
              <ConvertContainer />
            </Card>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col xs={{ span: 16 }}> <hr /></Col>
        </Row>
        <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <Card>
              <Weather />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <Card>
              <NewsContainer />
            </Card>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col xs={{ span: 16 }}> <hr /></Col>
        </Row>
        <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <Card>
              <LoadingWeatherBg />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>

          </Col>
        </Row>
      </Layout>

    )
  }
}
export default Examples;