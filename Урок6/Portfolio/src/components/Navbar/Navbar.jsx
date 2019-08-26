import React, { Component } from 'react';
import RightMenu from './RightMenu'
import { Drawer, Icon, Row, Col } from 'antd';
class Navbar extends Component {
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
  render() {
    return (
      <nav className='navbar'>
        <Row type="flex" justify="space-between">
          <Col xl={{ span: 21, offset: 2 }} className="logo ">
            <a style={{ fontSize: '18px', color: '#000' }} href="" >ILYA KALISTRATOV</a>
          </Col>
          <Col xl={{ span: 1 }} className="navigation1">
            <Icon className="menu_icon" type="menu" style={{ fontSize: '18px', color: '#939598' }} onClick={this.showDrawer} />
            <Drawer
              title="MENU"
              placement="right"
              onClose={this.onClose}
              visible={this.state.visible}>
              <RightMenu />
            </Drawer>
          </Col>
        </Row>

      </nav>
    );
  }
}
export default Navbar;