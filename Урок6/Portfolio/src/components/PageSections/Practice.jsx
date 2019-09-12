import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import laptop from '../../img/laptop.svg';
import html5 from '../../img/html5.svg';
import js from '../../img/js.svg';
import { observer, inject } from 'mobx-react';
import { Parallax } from 'react-scroll-parallax';

const { Meta } = Card;

const Practice = inject("store")(observer(props => {
  const { theme } = props.store;
  const practice = [{
    title: 'PHOTOSHOP',
    description: 'Photoshop, Adobe Muze',
    img: laptop,
    x: [-30, 10]
  }, {
    title: 'HTML5/CSS3',
    description: 'Адаптив, респонсив, кроссбраузерность',
    img: html5
  }, {
    title: 'JAVASCRIPT',
    description: 'С фреймворками и без',
    img: js,
    x: [30, -10]
  }]

  return (
    <Layout id='Practice' style={{ backgroundColor: `${theme.firstSectionBackground}`, color: `${theme.colorParagraph}` }}>
      <Row>
        <Col>
          <h2 style={{ textAlign: 'center', fontSize: '32px', color: `${theme.colorHeader}`, margin: '20px 0' }}>Опыт разработки</h2>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
        {practice.map((item, index) => {
          return (
            <Col style={{ marginBottom: '10px' }} key={index}>
              <Parallax x={item.x}>
                <Card
                  hoverable
                  style={{ width: 240, padding: '20px', backgroundColor: `${theme.secondSectionBackground}`, color: `${theme.colorParagraph}` }}
                  cover={<img alt="example" src={item.img} />}
                >
                  <Meta
                    title={<span style={{ color: `${theme.colorHeader}` }}>{item.title}</span>}
                    description={<span style={{ color: `${theme.colorParagraph}` }}>{item.description}</span>}
                  />
                </Card>
              </Parallax>
            </Col>
          )
        })}
      </Row>
    </Layout >
  )
}))

export default Practice;