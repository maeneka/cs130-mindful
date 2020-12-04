import React from 'react'
import Login from '../src/components/login';
import { h } from 'preact';

// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Test login', () => {
	test('Settings UI for all front end elements', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('h2').text()).toBe('log in');
	});

    test('Footer text', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('.footer').text()).toBe("new to mindful? sign up");
    });
});
