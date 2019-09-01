import React from 'react';
import { Layout, Row, Col } from "antd";
import Navbar from '../Navbar/Navbar2';
import bg from './../img/bg.jpg';
import bg2 from './../img/bg2.jpg';
import Texty from 'rc-texty';
import { observer } from 'mobx-react';
import { inject } from 'mobx-react';

const { Header } = Layout;



@inject("store")
@observer
class HeaderBlock extends React.Component {

  render() {
    const { theme } = this.props.store;
    const bgImg = theme.disabled ? bg2 : bg
    return (
      <div id='header_container' style={{ backgroundColor: `${theme.background1}`, color: `${theme.colorH}` }}>
        <Header style={{
          background: 'rgba(255, 255, 255, 0)',
        }}>
          <Navbar />
        </Header>
        <Layout id='top_slide' className='top_slide'>
          <Row style={{ backgroundColor: `${theme.background1}` }}>
            <Col md={{ span: 23, offset: 1 }} lg={{ span: 22, offset: 2 }} style={{ padding: '150px 0', background: `url(${bgImg}) no-repeat fixed`, backgroundSize: 'cover' }}>
              <Row>
                <Col xs={{ span: 22, offset: 1 }} md={{ span: 21, offset: 2 }} lg={{ span: 20, offset: 4 }}>
                  <h1 style={{ color: `${theme.colorH}` }}>HTML5, CSS3 </h1>
                  <h2 style={{ color: `${theme.colorP}` }}><Texty>CVG, LESS,  анимация</Texty></h2>
                  <h1 style={{ color: `${theme.colorH}` }}>Bootstrap</h1>
                  <h2 style={{ color: `${theme.colorP}` }}><Texty >адаптивные мобильные web-проекты</Texty></h2>
                  <h1 style={{ color: `${theme.colorH}` }}>JavaScript</h1>
                  <h2 style={{ color: `${theme.colorP}` }}><Texty>jQuery, React, Redux</Texty></h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout>
      </div >



    )
  }
}
export default HeaderBlock;