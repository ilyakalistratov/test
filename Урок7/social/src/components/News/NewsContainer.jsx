import React from 'react';
import ViewNews from './ViewNews';
import SearchNews from './SearchNews';
import { observer } from 'mobx-react';

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search_by_date';
const SEARCH_PARAM = 'query=';
const count = 3;

class NewsContainer extends React.Component {
  onhandleInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.props.store.onhandleInput(value)
  }

  componentDidMount() {
    this.fetchdata(this.props.store.serachQuery);
  }

  fetchdata = serachQuery => {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${serachQuery}`)
      .then(res => res.json())
      .then(result => this.props.store.setResult(result.hits))
      .catch(error => error);
  }

  onhandleSearch = (e) => {
    e.preventDefault();
    this.fetchdata(this.props.store.serachQuery);
  }
  onLoadMore = (e) => {
    e.preventDefault();
    this.props.store.onLoadMore()
  }

  render() {
    const { serachQuery, result, list, onLoadMore} = this.props.store;

    return (
      <div>
        <h2><i>News</i></h2>
        <SearchNews
          value={serachQuery}
          onhandleInput={this.onhandleInput}
          onhandleSearch={this.onhandleSearch}
        />
        <ViewNews
          list={list}
          onLoadMore={onLoadMore}
        />
      </div>
    )
  }
}

export default observer(NewsContainer);