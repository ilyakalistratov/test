import React from 'react';
import { Layout, Row, Col, Timeline } from 'antd';


class Experience extends React.Component {

  render() {
    return (
      <Layout id='Experience' style={{ background: '#fff' }}>
        <Row>
          <Col>
            <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#000', margin: '20px 0' }}>Резюме</h2>
          </Col>
        </Row>
        <Row type="flex" justify="center" gutter={48} style={{ margin: '20px 0 30px 0' }}>
          <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 24 }} lg={{ span: 10 }}>
            <Timeline mode="alternate">
              <Timeline.Item><b>Начало</b>. Первое знакомство с HTML, CSS. Знакомство с CMS Joomla и WordPress 2014 год</Timeline.Item>
              <Timeline.Item><b>JavaScript.</b> Изучение JavaScript в онлайн школе Hexlet 2018 год</Timeline.Item>
              <Timeline.Item><b>HTML, CSS.</b> ИзучениеHTML, CSS, SVG, LESS в онлайн школе HTML Academy 2019 год</Timeline.Item>
              <Timeline.Item><b>Dexsys IT.</b> Курсы по фронтенд разработке от компании Dexsys IT 2019 год</Timeline.Item>

            </Timeline>
          </Col>
        </Row>

      </Layout>

    )
  }
}
export default Experience;