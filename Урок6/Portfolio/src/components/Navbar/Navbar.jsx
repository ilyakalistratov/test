import React, { Component } from 'react';
import RightMenu from './RightMenu'
import { Drawer, Icon, Row, Col, Switch } from 'antd';
import { observer, inject } from 'mobx-react';

const SunSvg = () => {
  <svg>
    <path d="M19,1 Q21,0,23,1 L39,10 Q41.5,11,42,14 L42,36 Q41.5,39,39,40 L23,49 Q21,50,19,49 L3,40 Q0.5,39,0,36 L0,14 Q0.5,11,3,10 L19,1"></path>
    <circle cx="21" cy="25" r="8"></circle>
    <circle cx="21" cy="25" r="12">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 21 25" to="360 21 25" dur="3.5s" repeatCount="indefinite"></animateTransform>
    </circle>
  </svg>
}

@inject("store")
@observer class Navbar extends Component {
  state = {
    visible: false
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleChangeTheme = (disabled) => {
    this.props.store.changeTheme(disabled)
  }

  render() {
    const { theme } = this.props.store;
    return (
      <nav className='navbar'>
        <Row type="flex" justify="space-between" align='middle'>
          <Col sm={{ span: 20, offset: 1 }} className="logo ">
            <a style={{ fontSize: '18px', color: `${theme.colorHeader}` }} href="">ILYA KALISTRATOV</a>
          </Col>
          <Col className="navigation1">
            <Icon
              className="menu_icon"
              type="menu"
              style={{ fontSize: '18px', color: '#939598', verticalAlign: 'middle' }}
              onClick={this.showDrawer} />
            <Drawer
              title="MENU"
              placement="right"
              onClose={this.onClose}
              visible={this.state.visible}
              bodyStyle={{ backgroundColor: `#3a3a3a`, color: `${theme.colorHeader}` }}
            >
              <RightMenu />
            </Drawer>
            <Switch
              size="small"
              checkedChildren={<Icon type='sun' />}
              unCheckedChildren={<Icon type="close" />}
              style={{ marginLeft: 10 }}
              checked={theme.disabled}
              onChange={this.handleChangeTheme}
            >
            </Switch>
          </Col>
        </Row>
      </nav>
    );
  }
}

export default Navbar;