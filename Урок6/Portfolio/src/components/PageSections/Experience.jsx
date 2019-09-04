import React from 'react';
import { Layout, Row, Col, Timeline } from 'antd';
import { observer, inject } from 'mobx-react';

const Experience = inject('store')(observer(props => {
  const { theme } = props.store;
  const experience = [{
    title: 'Начало.',
    description: 'Первое знакомство с HTML, CSS. Знакомство с CMS Joomla и WordPress 2014 год'
  }, {
    title: 'JavaScript.',
    description: 'Изучение JavaScript в онлайн школе Hexlet 2018 год'
  }, {
    title: 'HTML, CSS.',
    description: 'ИзучениеHTML, CSS, SVG, LESS в онлайн школе HTML Academy 2019 год'
  }, {
    title: 'Dexsys IT.',
    description: 'Курсы по фронтенд разработке от компании Dexsys IT 2019 год'
  },]
  return (
    <Layout id='Experience' style={{ backgroundColor: `${theme.firstSectionBackground}`, color: `${theme.colorParagraph}` }}>
      <Row>
        <Col>
          <h2 style={{ textAlign: 'center', fontSize: '32px', color: `${theme.colorHeader}`, margin: '20px 0' }}>Резюме</h2>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
        <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 24 }} lg={{ span: 10 }}>
          <Timeline
            mode="alternate"
            style={{ color: `${theme.colorParagraph}` }}>
            {experience.map((item, index) => {
              return (
                <Timeline.Item key={index}>
                  <b>{item.title}</b> {item.description}
                </Timeline.Item>
              )
            })}
          </Timeline>
        </Col>
      </Row>
    </Layout>
  )
}))
export default Experience;