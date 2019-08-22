import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import TaskContainer from './../Projects/ToDo/TaskContainer';
import ConvertContainer from './../Projects/Converter/ConvertContainer'
import Weather from '../Projects/Weather/Weather';


class Examples extends React.Component {

  render() {
    return (
      <Layout id='Examples' style={{ background: '#fafafa' }}>
        <Row>
          <Col>
            <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#000', margin: '20px 0' }}>Примеры работ</h2>
          </Col>
        </Row>
        <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <Card>
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
          </Col>
        </Row>
      </Layout>

    )
  }
}
export default Examples;