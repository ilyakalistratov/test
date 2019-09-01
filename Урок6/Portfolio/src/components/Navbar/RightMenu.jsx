import React, { Component } from 'react';
import { Menu } from 'antd';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react';

@inject("store")
@observer
class RightMenu extends Component {
  render() {
    const { theme } = this.props.store

    return (
      <Menu style={{ backgroundColor: `${theme.background2}`, color: `${theme.colorP}` }}>
        <Menu.Item key="main">
          <a href="#top_slide">Главная</a>
        </Menu.Item>
        <Menu.Item key="About_me">
          <a href="#About_me">Обо мне</a>
        </Menu.Item>
        <Menu.Item key="Dev_experience">
          <a href="#Practice">Опыт разработки</a>
        </Menu.Item>
        <Menu.Item key="Skills">
          <a href="#Skills">Навыки</a>
        </Menu.Item>
        <Menu.Item key="Experience">
          <a href="#Experience">Резюме</a>
        </Menu.Item>
        <Menu.Item key="Examples">
          <a href="#Examples">Примеры</a>
        </Menu.Item>
        <Menu.Item key="Contacts">
          <a href="#Contacts">Контакты</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;