import React from 'react';
import { Form, Input } from 'antd';

const SearchNews = (props) => {
  const { value, onhandleInput, onhandleSearch } = props
  return (
    <Form onSubmit={onhandleSearch}>
      <Form.Item>
        <Input
          value={value}
          onChange={onhandleInput}
          placeholder='search...'
        />
      </Form.Item>
    </Form>
  )
}

export default SearchNews;