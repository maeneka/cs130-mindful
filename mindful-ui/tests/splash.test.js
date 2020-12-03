import { h } from 'preact';
import Splash from '../src/components/splash';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Test the splash component', () => {
    const context = shallow(<Splash />);

	test('has correct title text', () => {
		expect(context.find('.subtitle').text()).toBe('WELCOME TO');
		expect(context.find('h1').text()).toBe('mindful');
    });
    
    test('has log-in button', () => {
        expect(context.exists('a')).toEqual(true);
        expect(context.find('a').find('p').text()).toBe('LOG IN');
    });

    test('has footer', () => {
        expect(context.exists('.footer')).toEqual(true);
        expect(context.find('.footer').text()).toBe('new to mindful? sign up');
        expect(context.find('.footer').exists('a')).toEqual(true);
    });
});