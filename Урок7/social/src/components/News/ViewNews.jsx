import React from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import { observer } from 'mobx-react';

const ViewNews = (props) => {
  const { list, onLoadMore } = props;
  const loadMore = (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button onClick={onLoadMore}>show more</Button>
    </div>)
console.log("!!!!!", list)
  return (
    <List
      loadMore={loadMore}
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src='' />
            }
            title={<a href={item.story_url} target="_blank">{item.story_title}</a>}
            description={`comments | ${new Date(item.created_at).toLocaleDateString('en-GB')} | ${item.author}`}
          />
        </List.Item>

      )}
    />
  )
}

export default ViewNews;