import React from 'react';
import { Layout, Row, Col } from "antd";
import Navbar from '../Navbar/Navbar';
import bg from '../../img/bg.jpg';
import bgDark from '../../img/bgDark.jpg';
import Texty from 'rc-texty';
import { observer, inject } from 'mobx-react';

const { Header } = Layout;

const HeaderBlock = inject('store')(observer(props => {
  const { theme } = props.store;
  const mainText = [{
    title: 'HTML5, CSS3',
    description: 'SVG, LESS,  анимация'
  }, {
    title: 'Bootstrap',
    description: 'адаптивные мобильные web-проекты'
  }, {
    title: 'JavaScript',
    description: 'jQuery, React, Redux'
  }]
  const bgImg = theme.disabled ? bgDark : bg;

  return (
    <div id='header_container' style={{ backgroundColor: `${theme.firstSectionBackground}`, color: `${theme.colorHeader}` }}>
      <Header style={{
        background: 'rgba(255, 255, 255, 0)',
      }}>
        <Navbar />
      </Header>
      <Layout id='top_slide' className='top_slide'>
        <Row style={{ backgroundColor: `${theme.firstSectionBackground}` }}>
          <Col
            md={{ span: 23, offset: 1 }}
            lg={{ span: 22, offset: 2 }}
            style={{ padding: '150px 0', background: `url(${bgImg}) no-repeat fixed`, backgroundSize: 'cover' }}>
            <Row>
              <Col xs={{ span: 22, offset: 1 }} md={{ span: 21, offset: 2 }} lg={{ span: 20, offset: 4 }}>
                {mainText.map((item, index) => {
                  return (
                    <div key={index}>
                      <h1 style={{ color: `${theme.colorHeader}` }}>
                        {item.title}
                      </h1>
                      <h2 style={{ color: `${theme.colorParagraph}` }}>
                        <Texty>
                          {item.description}
                        </Texty>
                      </h2>
                    </div>
                  )
                })}
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </div >
  )
}))

export default HeaderBlock;