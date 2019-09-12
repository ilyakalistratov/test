import React from 'react';
import { Col, Card } from 'antd';

const WithCardWrapper = (Component) => {
  class NewComponent extends React.Component {
    render() {
      return (
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Card >
            <Component {...this.props} />
          </Card>
        </Col>
      )
    }
  }
  return NewComponent;
}

export default WithCardWrapper;