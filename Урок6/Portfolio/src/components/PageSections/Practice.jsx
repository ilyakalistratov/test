import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import laptop from './../img/laptop.svg';
import html5 from './../img/html5.svg';
import js from './../img/js.svg';
import { observer } from 'mobx-react';
import { inject } from 'mobx-react';


const { Meta } = Card;
@inject("store")
@observer
class Practice extends React.Component {

  render() {
    const { theme } = this.props.store;
    return (
      <Layout id='Practice' style={{ backgroundColor: `${theme.background1}`, color: `${theme.colorP}` }}>
        <Row>
          <Col>
            <h2 style={{ textAlign: 'center', fontSize: '32px', color: `${theme.colorH}`, margin: '20px 0' }}>Опыт разработки</h2>
          </Col>
        </Row>

        <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
          <Col style={{ marginBottom: '10px' }}>
            <Card
              hoverable
              style={{ width: 240, padding: '20px', backgroundColor: `${theme.background2}`, color: `${theme.colorP}` }}
              cover={<img alt="example" src={laptop} />}
            >
              <Meta title={<span style={{ color: `${theme.colorH}` }}>PHOTOSHOP</span>} description={<span style={{ color: `${theme.colorP}` }}>Photoshop, Adobe Muze</span>} />
            </Card>
          </Col>
          <Col style={{ marginBottom: '10px' }}>
            <Card
              hoverable
              style={{ width: 240, padding: '20px', backgroundColor: `${theme.background2}`, color: `${theme.colorP}` }}
              cover={<img alt="example" src={html5} />}
            >
              <Meta title={<span style={{ color: `${theme.colorH}` }}>HTML5/CSS3"</span>} description={<span style={{ color: `${theme.colorP}` }}>Адаптив, респонсив, кроссбраузерность</span>} />
            </Card>
          </Col>
          <Col style={{ marginBottom: '10px' }}>
            <Card
              hoverable
              style={{ width: 240, padding: '20px', backgroundColor: `${theme.background2}`, color: `${theme.colorP}` }}
              cover={<img alt="example" src={js} />}
            >
              <Meta title={<span style={{ color: `${theme.colorH}` }}>JAVASCRIPT</span>} description={<span style={{ color: `${theme.colorP}` }}>С фреймворками и без</span>} />
            </Card>
          </Col>
        </Row>
      </Layout>
    )
  }
}
export default Practice;