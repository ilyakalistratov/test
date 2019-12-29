import React from 'react'
import {shallow} from 'enzyme'
import TodoList from "./TodoList";

describe ('Todo', () => {
    const props = {
        todo: {
            name: 'ilya',
            id: 12,
            active: 'active'
        }
    }

    it('should work with props', () => {
        const myComponent = shallow(<TodoList {...props}/>)
        //console.log(myComponent.find('span').text())
expect(myComponent.find('span').text()).toEqual(' ilya')
    })
})
