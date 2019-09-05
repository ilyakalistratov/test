import React from 'react';
import { Layout, Row, Col, Icon } from 'antd';

const Contacts = () => {
  return (
    <Layout id='Contacts' style={{ background: '#222222' }}>
      <Row type="flex" justify="center">
        <Col style={{ padding: 30, fontSize: '16px', }}>
          <a href="https://github.com/ilyakalistratov/test" target="_blank" className='contacts_iconGit'><Icon type="github" /></a>
          <a href="mailto:ilya.kalistatoff@mail.ru" className='contacts_iconMail' ><Icon type="mail" /></a>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col>
          <p style={{ color: '#939598', fontSize: '16px' }}>© 2019 Ilya Kalistratov</p>
        </Col>
      </Row>
    </Layout >
  )
}
export default Contacts;