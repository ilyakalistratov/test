import React, { Component } from 'react';
import RightMenu from './RightMenu'
import { Drawer, Icon, Row, Col, Switch } from 'antd';
import { observer } from 'mobx-react';
import { inject } from 'mobx-react';

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

    const { theme } = this.props.store
    return (
      <nav className='navbar'>
        <Row type="flex" justify="space-between" align='middle'>
          <Col xl={{ span: 21, offset: 2 }} className="logo ">
            <a style={{ fontSize: '18px', color: `${theme.colorH}` }} href="" >ILYA KALISTRATOV</a>
          </Col>
          <Col xl={{ span: 1 }} className="navigation1">
            <Icon className="menu_icon" type="menu" style={{ fontSize: '18px', color: '#939598', verticalAlign: 'middle' }} onClick={this.showDrawer} />

            <Drawer
              title="MENU"
              placement="right"
              onClose={this.onClose}
              visible={this.state.visible}
              theme='dark'
              bodyStyle={{ backgroundColor: `${theme.background2}`, color: `${theme.colorH}` }}
              className='navbar_drawer'

            >

              <RightMenu />
            </Drawer>
            <Switch
              size="small"
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