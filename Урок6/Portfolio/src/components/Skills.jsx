import React from 'react';
import { Layout, Row, Col, Card, Progress } from 'antd';


class Skills extends React.Component {

  render() {
    return (
      <Layout id='Skills' style={{
        background: '#f5f5f5'
      }}>
        <Row>
          <Col>
            <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#000', margin: '20px 0' }}>Навыки</h2>
          </Col>
        </Row>
        <Row type="flex" justify="center" gutter={32} style={{ margin: '20px 0 30px 0' }}>
          <Col xs={{ span: 11 }} sm={{ span: 11 }} md={{ span: 10 }} lg={{ span: 7 }}>
            <div>
              <Progress strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }} percent={85} />
              <p>HTML5</p>
            </div>
            <div>
              <Progress strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }} percent={85} />
              <p>CSS/CSS3</p>
            </div>
            <div>
              <Progress percent={60} />
              <p>JavaScript</p>
            </div>
            <div>
              <Progress percent={30} />
              <p>jQuery</p>
            </div>
            <div>
              <Progress percent={45} />
              <p>React</p>
            </div>
            <div>
              <Progress percent={45} status="active" />
              <p>Redux</p>
            </div>

          </Col>
          <Col xs={{ span: 11 }} sm={{ span: 11 }} md={{ span: 10 }} lg={{ span: 7 }}>
            <div>
              <Progress percent={30} />
              <p>Bootstrap</p>
            </div>
            <div>
              <Progress percent={35} />
              <p>Ant Design</p>
            </div>
            <div>
              <Progress percent={25} />
              <p>Photoshop</p>
            </div>

          </Col>
        </Row>

      </Layout>

    )
  }
}
export default Skills;