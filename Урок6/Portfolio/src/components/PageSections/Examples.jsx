import React from 'react';
import { Layout, Row, Col, Timeline } from 'antd';
import TaskContainer from './../Projects/ToDo/TaskContainer';


class Examples extends React.Component {

  render() {
    return (
      <Layout id='Examples' style={{ background: '#f5f5f5' }}>
        <Row>
          <Col>
            <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#000', margin: '20px 0' }}>Примеры работ</h2>
          </Col>
        </Row>
        <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
          <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 24 }} lg={{ span: 10 }}>
            <TaskContainer />
          </Col>
        </Row>
      </Layout>

    )
  }
}
export default Examples;