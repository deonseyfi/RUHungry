import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SplashPage from '../App/SplashPage';

configure({ adapter: new Adapter() });

describe('Splash Page test', () => {
    test('Renders Splash Page', () => {
        const wrapper = mount(<SplashPage />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
