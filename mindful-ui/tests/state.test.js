import { h } from 'preact';
import App from '../src/components/app';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { mount } from 'enzyme';

describe('Test state changes', () => {
    const context = mount(<App />);

    test('state 0', () => {
        expect(context.state().state).toBe(0);
    });

	test('state 1', () => {
        context.find('.big-button').simulate('click');
        expect(context.state().state).toBe(1);
    });

    test('state 2', () => {
        context.find('.footer').find('a').simulate('click');
        expect(context.state().state).toBe(2);
    })
});

