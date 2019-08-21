import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import laptop from './../img/laptop.svg';
import html5 from './../img/html5.svg';
import js from './../img/js.svg';


const { Meta } = Card;

class Practice extends React.Component {

  render() {
    return (
      <Layout id='Practice' style={{ background: '#e7e7e7' }}>
        <Row>
          <Col>
            <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#000', margin: '20px 0' }}>Опыт разработки</h2>
          </Col>
        </Row>

        <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
          <Col style={{ marginBottom: '10px' }}>
            <Card
              hoverable
              style={{ width: 240, padding: '20px' }}
              cover={<img alt="example" src={laptop} />}
            >
              <Meta title="PHOTOSHOP" description="Photoshop, Adobe Muze" />
            </Card>
          </Col>
          <Col style={{ marginBottom: '10px' }}>
            <Card
              hoverable
              style={{ width: 240, padding: '20px' }}
              cover={<img alt="example" src={html5} />}
            >
              <Meta title="HTML5/CSS3" description="Адаптив, респонсив, кроссбраузерность" />
            </Card>
          </Col>
          <Col style={{ marginBottom: '10px' }}>
            <Card
              hoverable
              style={{ width: 240, padding: '20px' }}
              cover={<img alt="example" src={js} />}
            >
              <Meta title="JAVASCRIPT" description="С фреймворками и без" />
            </Card>
          </Col>
        </Row>
      </Layout>
    )
  }
}
export default Practice;