import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import './App.css';
import TodoContainer from './components/Todo/TodoContainer';
import NewsContainer from './components/News/NewsContainer';

class App extends Component {

    render() {
        return (
            <>
            <TodoContainer store={this.props.store.todo}/>
            <NewsContainer store={this.props.store.news}/>
            </>
        )
    }
}

export default inject('store')(observer(App));