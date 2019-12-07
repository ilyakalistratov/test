import reverse from '../src';
import {user} from '../src'

test('reverse', () => {
    const str = 'hello';
    expect(reverse(str)).toEqual('olleh');
    expect(reverse('')).toEqual('');
})

test('user', () => {
    expect(user).toMatchObject({firstName: 'tolya'})
})



test ('eq', () => {
    expect({a: 123}).toMatchObject({a: 123})
})
