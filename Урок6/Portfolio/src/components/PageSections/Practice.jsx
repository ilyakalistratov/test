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
  state = {
    practice: [{
      title: 'PHOTOSHOP',
      description: 'Photoshop, Adobe Muze',
      img: laptop
    }, {
      title: 'HTML5/CSS3',
      description: 'Адаптив, респонсив, кроссбраузерность',
      img: html5
    }, {
      title: 'JAVASCRIPT',
      description: 'С фреймворками и без',
      img: js
    }]
  }

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
          {this.state.practice.map(item => {
            return (
              <Col style={{ marginBottom: '10px' }}>
                <Card
                  hoverable
                  style={{ width: 240, padding: '20px', backgroundColor: `${theme.background2}`, color: `${theme.colorP}` }}
                  cover={<img alt="example" src={item.img} />}
                >
                  <Meta title={<span style={{ color: `${theme.colorH}` }}>{item.title}</span>} description={<span style={{ color: `${theme.colorP}` }}>{item.description}</span>} />
                </Card>
              </Col>
            )
          })}

        </Row>
      </Layout>
    )
  }
}
export default Practice;