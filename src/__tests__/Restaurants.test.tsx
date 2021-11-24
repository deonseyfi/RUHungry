import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import Restaurants from '../App/Restaurants';

configure({ adapter: new Adapter() });

describe('Restaurants Page test', () => {
    test('renders Restaurants Page', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Restaurants />
            </MemoryRouter>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
