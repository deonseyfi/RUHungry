import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button, IconButton } from '@material-ui/core';
import { MemoryRouter } from 'react-router-dom';
import Home from '../App/Home';

configure({ adapter: new Adapter() });

describe('Frontend test', () => {
    test('renders Home', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    test('Start clicked', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );
        expect(wrapper.find(Home).state('clickedStart')).toEqual(false);

        wrapper.find(Button).first().simulate('click');
        wrapper.update();

        expect(wrapper.find(Home).state('clickedStart')).toEqual(true);
        wrapper.unmount();
    });

    test('First Select change', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );
        expect(wrapper.find(Home).state('firstCategoryValue')).toEqual('All');

        wrapper.find(Home).setState({ clickedStart: true });
        const app = wrapper.find(Home).instance() as Home;
        app.handleFirstCategoryChange('Pizza');
        expect(wrapper.find(Home).state('firstCategoryValue')).toEqual('Pizza');
        wrapper.unmount();
    });

    test('Add category clicked', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );
        expect(wrapper.find(Home).state('addCategory')).toEqual(false);

        wrapper.find(Home).setState({ clickedStart: true });
        wrapper.find(Home).setState({ firstCategoryValue: 'Burger' });
        // Add category button is now the second node because Start was unrendered
        wrapper.find(Button).at(1).simulate('click');
        wrapper.update();

        expect(wrapper.find(Home).state('addCategory')).toEqual(true);
        wrapper.unmount();
    });

    test('Second Select change', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );
        expect(wrapper.find(Home).state('secondCategoryValue')).toEqual('');

        wrapper.find(Home).setState({ clickedStart: true });
        wrapper.find(Home).setState({ firstCategoryValue: 'Pizza' });
        wrapper.find(Home).setState({ addCategory: true });

        const app = wrapper.find(Home).instance() as Home;
        app.handleSecondCategoryChange('Burgers');
        expect(wrapper.find(Home).state('secondCategoryValue')).toEqual('Burgers');
    });

    test('Clear second category', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );

        wrapper.find(Home).setState({ clickedStart: true });
        wrapper.find(Home).setState({ firstCategoryValue: 'Burgers' });
        wrapper.find(Home).setState({ addCategory: true });
        wrapper.find(Home).setState({ secondCategoryValue: 'Pizza' });
        wrapper.find(IconButton).at(0).simulate('click');
        wrapper.update();

        expect(wrapper.find(Home).state('addCategory')).toEqual(false);
        expect(wrapper.find(Home).state('secondCategoryValue')).toEqual('');
        wrapper.unmount();
    });

    test('Clear button clicked', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );

        wrapper.find(Home).setState({ clickedStart: true });
        wrapper.find(Home).setState({ firstCategoryValue: 'Burgers' });
        wrapper.find(Home).setState({ addCategory: true });
        wrapper.find(Home).setState({ secondCategoryValue: 'Pizza' });
        wrapper.find(Button).first().simulate('click');
        wrapper.update();

        expect(wrapper.find(Home).state('firstCategoryValue')).toEqual('All');
        expect(wrapper.find(Home).state('addCategory')).toEqual(false);
        expect(wrapper.find(Home).state('secondCategoryValue')).toEqual('');
        wrapper.unmount();
    });
});
