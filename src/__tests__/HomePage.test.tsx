import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button, IconButton } from '@material-ui/core';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../App/pages/HomePage';

configure({ adapter: new Adapter() });

describe('Frontend test', () => {
    test('renders HomePage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>,
        );
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    test('First Select change', () => {
        const wrapper = mount(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>,
        );
        expect(wrapper.find(HomePage).state('firstCategoryValue')).toEqual('All');

        const app = wrapper.find(HomePage).instance() as HomePage;
        app.handleFirstCategoryChange('Pizza');
        expect(wrapper.find(HomePage).state('firstCategoryValue')).toEqual('Pizza');
        wrapper.unmount();
    });

    test('Add category clicked', () => {
        const wrapper = mount(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>,
        );
        expect(wrapper.find(HomePage).state('addCategory')).toEqual(false);

        wrapper.find(HomePage).setState({ firstCategoryValue: 'Burger' });
        // Add category button is now the second node because Start was unrendered
        wrapper.find(Button).at(1).simulate('click');
        wrapper.update();

        expect(wrapper.find(HomePage).state('addCategory')).toEqual(true);
        wrapper.unmount();
    });

    test('Second Select change', () => {
        const wrapper = mount(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>,
        );
        expect(wrapper.find(HomePage).state('secondCategoryValue')).toEqual('');
        wrapper.find(HomePage).setState({ firstCategoryValue: 'Pizza' });
        wrapper.find(HomePage).setState({ addCategory: true });

        const app = wrapper.find(HomePage).instance() as HomePage;
        app.handleSecondCategoryChange('Burgers');
        expect(wrapper.find(HomePage).state('secondCategoryValue')).toEqual('Burgers');
    });

    test('Clear second category', () => {
        const wrapper = mount(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>,
        );

        wrapper.find(HomePage).setState({ firstCategoryValue: 'Burgers' });
        wrapper.find(HomePage).setState({ addCategory: true });
        wrapper.find(HomePage).setState({ secondCategoryValue: 'Pizza' });
        wrapper.find(IconButton).at(0).simulate('click');
        wrapper.update();

        expect(wrapper.find(HomePage).state('addCategory')).toEqual(false);
        expect(wrapper.find(HomePage).state('secondCategoryValue')).toEqual('');
        wrapper.unmount();
    });

    test('Clear button clicked', () => {
        const wrapper = mount(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>,
        );

        wrapper.find(HomePage).setState({ firstCategoryValue: 'Burgers' });
        wrapper.find(HomePage).setState({ addCategory: true });
        wrapper.find(HomePage).setState({ secondCategoryValue: 'Pizza' });
        wrapper.find(Button).first().simulate('click');
        wrapper.update();

        expect(wrapper.find(HomePage).state('firstCategoryValue')).toEqual('All');
        expect(wrapper.find(HomePage).state('addCategory')).toEqual(false);
        expect(wrapper.find(HomePage).state('secondCategoryValue')).toEqual('');
        wrapper.unmount();
    });
});
