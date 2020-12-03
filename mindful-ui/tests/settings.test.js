import React from 'react'
import Settings from '../src/components/settings';
import { h } from 'preact';
import renderer from 'react-test-renderer';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Test of the Settings UI', () => {
	test('Settings UI for all front end elements', () => {
		const wrapper = shallow(<Settings />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	test('Settings UI text displays', () => {
		const wrapper = shallow(<Settings />);
		expect(wrapper.find('h3').text()).toBe('mindful settings');
	});

	test('Settings UI back to dashboard', () => {
		const wrapper = shallow(<Settings />);
		expect(wrapper.find('a').find('p').text()).toBe('DASHBOARD');
	});

});
