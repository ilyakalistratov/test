import React from 'react';
import { Layout, Row, Col } from 'antd';
import { observer, inject } from 'mobx-react';

const AboutMe = inject("store")(observer((props => {
  const { theme } = props.store;
  return (
    <Layout id='About_me' style={{ background: `${theme.secondSectionBackground}`, color: `${theme.colorParagraph}` }}>
      <Row>
        <Col>
          <h2 style={{ textAlign: 'center', fontSize: '32px', margin: '20px 0', color: `${theme.colorHeader}` }}>Обо мне</h2>
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 15, offset: 3 }} lg={{ span: 15, offset: 1 }} style={{ padding: 10, fontSize: '16px', lineHeight: '30px', marginBottom: '20px' }}>
          <p>Всем привет!<br />
            Меня зовут Илья. Я Web-разработчик. Вы находитесь на моем персональном сайте портфолио.<br />
            Могу сделать верстку, написать скрипты. Работая с макетом стараюсь как можно полно реализовать идею дизайнера.<br />
            Делаю красиво и понятно как для пользователей, так и для тех, кто в дальнейшем будет поддерживать данный проект.<br />
            Для меня важно, чтобы сайты одинаково красиво смотрелись как на мобильных, так и на десктопных устройстах. Для этого использую responsive и adaptive подход.<br />
            Ниже Вы найдете информацию по моему опыту, навыкам и контактой информации по которой можно связаться со мной.</p>
        </Col>
      </Row>
    </Layout>
  )
})))

export default AboutMe;