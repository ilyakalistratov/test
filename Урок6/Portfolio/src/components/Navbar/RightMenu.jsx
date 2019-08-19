import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
      <Menu>
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
        <Menu.Item key="Contacts">
          <a href="">Контакты</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;