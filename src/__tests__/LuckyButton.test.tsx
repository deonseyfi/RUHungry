import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import LuckyButton from '../components/LuckyButton';

configure({ adapter: new Adapter() });

describe('LuckyButton test', () => {
    test('Renders LuckyButton component', () => {
        const wrapper = mount(
            <MemoryRouter>
                <LuckyButton />
            </MemoryRouter>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    test.skip('Selects random category', () => {
        const wrapper = mount(
            <MemoryRouter>
                <LuckyButton />
            </MemoryRouter>,
        );
        const random = jest.spyOn(LuckyButton.prototype, 'selectRandomCategory');
        wrapper.simulate('click');
        expect(random).toHaveBeenCalled();
    });
    test.skip('Click LuckyButton', () => {
        const wrapper = mount(<LuckyButton />);
        const random = jest.spyOn(LuckyButton.prototype, 'selectRandomCategory');
        wrapper.simulate('click');
        expect(random).toHaveBeenCalled();
    });
});
