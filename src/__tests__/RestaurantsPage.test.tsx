import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import RestaurantsPage from '../App/pages/RestaurantsPage';

configure({ adapter: new Adapter() });

describe('Restaurants Page test', () => {
    test('renders Restaurants Page', () => {
        const wrapper = mount(
            <MemoryRouter>
                <RestaurantsPage />
            </MemoryRouter>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
