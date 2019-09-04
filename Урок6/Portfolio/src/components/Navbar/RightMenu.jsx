import React from 'react';
import { Menu } from 'antd';
import { observer, inject } from 'mobx-react';

const RightMenu = inject("store")(observer((props) => {
  const { theme } = props.store;
  const menu = [{
    title: 'Главная',
    href: '#top_slide'
  }, {
    title: 'Обо мне',
    href: '#About_me'
  }, {
    title: 'Опыт разработки',
    href: '#Practice'
  }, {
    title: 'Навыки',
    href: '#Skills'
  }, {
    title: 'Резюме',
    href: '#Experience'
  }, {
    title: 'Примеры',
    href: '#Examples'
  }, {
    title: 'Контакты',
    href: '#Contacts'
  }]
  return (
    <Menu style={{ backgroundColor: `${theme.secondSectionBackground}`, color: `${theme.colorParagraph}` }}>
      {menu.map((item, index) => {
        return (
          <Menu.Item key={index}>
            <a href={item.href} >{item.title}</a>
          </Menu.Item>
        )
      })}
    </Menu>
  );
}))
export default RightMenu;