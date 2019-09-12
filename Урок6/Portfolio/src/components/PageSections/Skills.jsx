import React from 'react';
import { Layout, Row, Col, Progress } from 'antd';
import { observer, inject } from 'mobx-react';
import Plx from 'react-plx';
import * as parallax from '../../animation/parallaxData ';

const Skills = inject('store')(observer(props => {
  const { theme } = props.store;
  const skills = [{
    title: 'HTML5',
    percent: 85,
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    }
  }, {
    title: 'CSS/CSS3',
    percent: 85,
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    }
  }, {
    title: 'JavaScript',
    percent: 60
  }, {
    title: 'jQuery',
    percent: 30
  }, {
    title: 'React',
    percent: 45
  }, {
    title: 'Redux',
    percent: 45
  }, {
    title: 'Bootstrap',
    percent: 30
  }, {
    title: 'Ant Design',
    percent: 35
  },]

  return (
    <Layout id='Skills' style={{ backgroundColor: `${theme.secondSectionBackground}`, color: `${theme.colorParagraph}` }}>
      <Row>
        <Col>
          <h2 style={{ textAlign: 'center', fontSize: '32px', color: `${theme.colorHeader}`, margin: '20px 0' }}>Навыки</h2>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={32} style={{ margin: '20px 0 30px 0' }}>
        <Col xs={{ span: 19 }} sm={{ span: 17 }} md={{ span: 15 }} lg={{ span: 10 }}>
          {skills.map((item, index) => {
            return (
              <Plx
                className='MyAwesomeParallax'
                parallaxData={parallax.skills}
              >
                <div key={index}>
                  <Progress
                    strokeColor={item.strokeColor}
                    percent={item.percent}
                  />
                  <p>{item.title}</p>
                </div>
              </Plx>
            )
          })}
        </Col>
      </Row>
    </Layout>
  )
}))

export default Skills;