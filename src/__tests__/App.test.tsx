import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App/App';

configure({ adapter: new Adapter() });

describe('Frontend test', () => {
    test('renders App', () => {
        const wrapper = mount(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
