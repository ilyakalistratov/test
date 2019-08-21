import React from 'react';
import { Layout, Row, Col } from "antd";
import Navbar from './Navbar/Navbar';
import bg from './img/bg.jpg';
import Texty from 'rc-texty';


const { Header } = Layout;

class HeaderBlock extends React.Component {

  render() {
    return (
      <div id='header_container' style={{ backgroundColor: '#f2f2f2' }}>
        <Header style={{
          background: 'rgba(255, 255, 255, 0)',
        }}>
          <Navbar />
        </Header>
        <Layout id='top_slide' className='top_slide'>
          <Row>
            <Col md={{ span: 23, offset: 1 }} xl={{ span: 22, offset: 2 }} lg={{ span: 22, offset: 2 }} style={{ padding: '150px 0', background: `fixed url(${bg}) no-repeat`, backgroundSize: 'cover' }}>
              <Row>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 21, offset: 2 }} xl={{ span: 20, offset: 4 }} lg={{ span: 20, offset: 4 }}>

                  <h1>HTML5, CSS3 </h1>
                  <h2><Texty>CVG, LESS,  анимация</Texty></h2>
                  <h1>Bootstrap</h1>
                  <h2><Texty >адаптивные мобильные web-проекты</Texty></h2>
                  <h1>JavaScript</h1>
                  <h2><Texty>jQuery, React, Redux</Texty></h2>

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