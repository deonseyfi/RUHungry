import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '@material-ui/core';
import App from '../App/App';

configure({ adapter: new Adapter() });

describe('Frontend test', () => {
    test('renders App', () => {
        const wrapper = mount(<App />);
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    test('Start clicked', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(App).state('clickedStart')).toEqual(false);

        wrapper.find(Button).first().simulate('click');
        wrapper.update();

        expect(wrapper.find(App).state('clickedStart')).toEqual(true);
        wrapper.unmount();
    });

    test('First Select change', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(App).state('firstCategoryValue')).toEqual('All');

        wrapper.find(App).setState({ clickedStart: true });
        const app = wrapper.find(App).instance() as App;
        app.handleFirstCategoryChange('Pizza');
        expect(wrapper.find(App).state('firstCategoryValue')).toEqual('Pizza');
        wrapper.unmount();
    });

    test('Add category clicked', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(App).state('addCategory')).toEqual(false);

        wrapper.find(App).setState({ clickedStart: true });
        wrapper.find(App).setState({ firstCategoryValue: 'Burger' });
        // Add category button is now the first node because Start was unrendered
        wrapper.find(Button).first().simulate('click');
        wrapper.update();

        expect(wrapper.find(App).state('addCategory')).toEqual(true);
        wrapper.unmount();
    });

    test('Second Select change', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(App).state('secondCategoryValue')).toEqual('');

        wrapper.find(App).setState({ clickedStart: true });
        wrapper.find(App).setState({ firstCategoryValue: 'Pizza' });
        wrapper.find(App).setState({ addCategory: true });

        const app = wrapper.find(App).instance() as App;
        app.handleSecondCategoryChange('Burgers');
        expect(wrapper.find(App).state('secondCategoryValue')).toEqual('Burgers');
    });
});
