import React from 'react';
import ViewNews from './ViewNews';
import SearchNews from './SearchNews';

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search_by_date';
const SEARCH_PARAM = 'query=';
const count = 3;

class NewsContainer extends React.Component {
  state = {
    serachQuery: '',
    result: {},
    list: []
  }
  onhandleInput = (e) => {
    const value = e.target.value;
    this.setState({ serachQuery: value });
  }

  componentDidMount() {
    const { serachQuery } = this.state;
    this.fetchdata(serachQuery)
  }

  fetchdata = serachQuery => {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${serachQuery}`)
      .then(res => res.json())
      .then(result => this.setNews(result))
      .catch(error => error);
  }

  onhandleSearch = (e) => {
    e.preventDefault();
    const { serachQuery } = this.state
    this.fetchdata(serachQuery);
  }

  setNews = result => {
    const list = result.hits.slice(0, count)
    this.setState({ result, list })

  }
  onLoadMore = (e) => {
    const { list, result } = this.state;
    const newList = result.hits.slice(list.length, list.length + count);
    this.setState({ list: [...list, ...newList] })
  }

  render() {
    const { list } = this.state
    return (
      <div>
        <h2><i>News</i></h2>
        <SearchNews value={this.state.serachQuery} onhandleInput={this.onhandleInput} onhandleSearch={this.onhandleSearch} />
        <ViewNews list={list} onLoadMore={this.onLoadMore} />
      </div>
    )
  }
}
export default NewsContainer;