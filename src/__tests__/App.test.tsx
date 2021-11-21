import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button, IconButton } from '@material-ui/core';
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
        // Add category button is now the second node because Start was unrendered
        wrapper.find(Button).at(1).simulate('click');
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

    test('Clear second category', () => {
        const wrapper = mount(<App />);

        wrapper.find(App).setState({ clickedStart: true });
        wrapper.find(App).setState({ firstCategoryValue: 'Burgers' });
        wrapper.find(App).setState({ addCategory: true });
        wrapper.find(App).setState({ secondCategoryValue: 'Pizza' });
        wrapper.find(IconButton).at(0).simulate('click');
        wrapper.update();

        expect(wrapper.find(App).state('addCategory')).toEqual(false);
        expect(wrapper.find(App).state('secondCategoryValue')).toEqual('');
        wrapper.unmount();
    });

    test.skip('Lucky Button clicked', () => {
        const wrapper = mount(<App />);

        wrapper.find(App).setState({ clickedStart: true });
        wrapper.find(App).setState({ firstCategoryValue: 'Burgers' });
        wrapper.find(App).setState({ addCategory: true });
        wrapper.find(App).setState({ secondCategoryValue: 'Pizza' });
        wrapper.update();
        const nextSpy = jest.spyOn(App.prototype, 'handleNextButton');
        wrapper.find(Button).simulate('click');
        wrapper.update();

        expect(nextSpy).toHaveBeenCalled();
        wrapper.unmount();
    });

    test('Clear button clicked', () => {
        const wrapper = mount(<App />);

        wrapper.find(App).setState({ clickedStart: true });
        wrapper.find(App).setState({ firstCategoryValue: 'Burgers' });
        wrapper.find(App).setState({ addCategory: true });
        wrapper.find(App).setState({ secondCategoryValue: 'Pizza' });
        wrapper.find(Button).first().simulate('click');
        wrapper.update();

        expect(wrapper.find(App).state('firstCategoryValue')).toEqual('All');
        expect(wrapper.find(App).state('addCategory')).toEqual(false);
        expect(wrapper.find(App).state('secondCategoryValue')).toEqual('');
        wrapper.unmount();
    });
});
