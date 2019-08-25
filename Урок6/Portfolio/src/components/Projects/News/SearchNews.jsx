import React from 'react';
import { Form, Input } from 'antd';

class SearchNews extends React.Component {

  render() {
    const { value, onhandleInput, onhandleSearch } = this.props
    return (
      <Form onSubmit={onhandleSearch}>
        <Form.Item>
          <Input value={value} onChange={onhandleInput} placeholder='search...' />
        </Form.Item>
      </Form>
    )
  }
}
export default SearchNews;