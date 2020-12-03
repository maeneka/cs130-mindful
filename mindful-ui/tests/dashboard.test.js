import React from 'react'
import Dashboard from '../src/components/dashboard';
import { h } from 'preact';
import renderer from 'react-test-renderer';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Test of the Dashboard UI', () => {
	test('Dashbaord UI for all front end elements', () => {
		const wrapper = shallow(<Dashboard />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	test('Dashboard UI main text displays', () => {
		const wrapper = shallow(<Dashboard />);
		expect(wrapper.find('h3').text()).toBe('mindful dashboard');
	});

	test('Dashboard UI back to settings', () => {
		const wrapper = shallow(<Dashboard />);
		expect(wrapper.find('a').find('p').text()).toBe('SETTINGS');
	});

});
