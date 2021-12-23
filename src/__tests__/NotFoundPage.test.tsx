import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from '../App/NotFoundPage';

configure({ adapter: new Adapter() });

describe('Not Found Page test', () => {
    test('renders Not Found Page', () => {
        const wrapper = mount(
            <MemoryRouter>
                <NotFoundPage />
            </MemoryRouter>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
