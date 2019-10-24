import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import './App.css';
import TodoContainer from './components/Todo/TodoContainer';
import NewsContainer from './components/News/NewsContainer';
import HeaderBlock from './components/Header/Header'

class App extends Component {

    render() {
        return (
            <>
                <HeaderBlock />

            </>
        )
    }
}

export default inject('store')(observer(App));